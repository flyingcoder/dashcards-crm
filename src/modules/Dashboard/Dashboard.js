import {mapActions, mapGetters, mapMutations} from 'vuex'
import {settings} from '@/variables'
//Components
import DashboardLogo from '@/modules/Dashboard/components/DashboardLogo/DashboardLogo.vue'
import DashboardHeader from '@/modules/Dashboard/components/DashboardHeader/DashboardHeader.vue'
import DashboardSidebar from '@/modules/Dashboard/components/DashboardSidebar/DashboardSidebar.vue'
import FloatingChatButton from '@/common/FloatingChatButton/FloatingChatButton.vue'
import GlobalEmailer from "./components/GlobalEmailer/GlobalEmailer";

export default {
    name: 'MainDashboard',
    components: {
        DashboardLogo,
        DashboardHeader,
        DashboardSidebar,
        FloatingChatButton,
        GlobalEmailer
    },

    data: () => ({
        mini_sidebar: false,
        admintabs: [
            {text: 'General', route_name: 'admin-dashboard'},
            {text: 'APIs', route_name: 'admin-apis'},
            {text: 'Subscribers', route_name: 'admin-subscribers'},
            {text: 'Payments', route_name: 'admin-payments'},
            {text: 'Templates', route_name: 'admin-templates'},
            {text: 'Database', route_name: 'admin-database'},
            {text: 'Logs', route_name: 'admin-logs'},
        ],
        tab: 0
    }),

    computed: {
        ...mapGetters('onlineUsers', ['all_users']),
        ...mapGetters('chat', ['unread_messages', 'all_conversations']),
        user() {
            return this.$store.getters.user
        },
        is_sm_and_down() {
            return this.$vuetify.breakpoint.smAndDown
        },
        is_admin_routes() {
            return this.$route.path.includes('admin-dashboard')
        }
    },
    mounted() {
        if (this.$route.name) {
            let index = this.admintabs.findIndex(i => i.route_name === this.$route.name)
            if (~index) {
                this.tab = index
            }
        }
    },

    watch: {
        is_sm_and_down: {
            handler(val) {
                this.mini_sidebar = val
            },
            immediate: true
        }
    },

    created() {
        this.subscribe()
        this.fetch_chat()
        this.$event.$on('open_emailer', (user) => {
            this.$refs.global_emailer.openEmailer(user)
        })
        this.$event.$on('close_emailer', () => {
            this.$refs.global_emailer.closeEmailer()
        })
    },

    methods: {
        ...mapMutations('onlineUsers', ['set_all_users']),
        ...mapMutations('chat', ['add_unread_messages', 'add_message_to_conv']),
        ...mapMutations('notifications', ['add_to_chat']),
        ...mapActions('notifications', ['fetch_chat']),

        subscribe() {
            this.$pusher.authenticate()
            const open_channel = this.$pusher.subscribe(`apps`)

            const chat_channel = this.$pusher.subscribe(
                `private-chat.new-message.${this.user.id}`
            )

            const friends_channel = this.$pusher.subscribe(
                `presence-friend-list-${this.user.company_id}`
            )

            const chat_notification_channel = this.$pusher.subscribe(
                `private-chat.notification.${this.user.id}`
            )

            this.chat_channel(chat_channel)
            this.friends_channel(friends_channel)
            this.chat_notification_channel(chat_notification_channel)
            this.open_channel(open_channel)

            if (this.user.is_admin) {
                this.$pusher.authenticate()
                const activityLog = this.$pusher.subscribe(
                    `private-activity.log.${this.user.id}`
                )
                activityLog.bind('App\\Events\\ActivityEvent', payload => {
                    this.$store.commit('headerIcons/addNotification')
                    this.$store.commit('notifications/addNotification', payload)
                })
            }
        },

        chat_channel(channel) {
            channel.bind(
                `App\\Events\\PrivateChatSent`,
                ({message, sender, receiver}) => {
                    const conv = this.all_conversations.find(
                        conv => conv.id === sender.id
                    )
                    if (conv && receiver.id === this.user.id) {
                        this.handle_unread_message(sender)
                        this.add_message_to_conv({id: sender.id, message})
                    }
                }
            )
        },

        friends_channel(channel) {
            channel.bind('pusher:subscription_succeeded', ({members}) => {
                let all_users = []
                Object.entries(members).forEach(([key, value]) => {
                    all_users.push({
                        id: Number(key),
                        name: `${value.first_name}, ${value.last_name}`,
                        is_online: !!value.is_online,
                        image_url: value.image_url
                    })
                })
                this.set_all_users(all_users)
            })

            channel.bind('pusher:member_added', ({info: member}) => {
                this.$store.commit('onlineUsers/user_logged_in', {
                    id: member.id,
                    name: `${member.first_name}, ${member.last_name}`,
                    is_online: !!member.is_online,
                    image_url: member.image_url
                })
            })

            channel.bind('pusher:member_removed', ({info: member}) => {
                const index = this.all_users.findIndex(
                    on_user => on_user.id === member.id
                )
                if (~index) {
                    this.$store.commit('onlineUsers/user_logged_out', index)
                }
            })

            channel.bind('App\\Events\\ProjectTaskNotification', ({payload}) => {
                let index = payload.receivers.findIndex(i => i === this.user.id)
                if (~index) {
                    let notification = new Notification(payload.title, {
                        icon: require('@/assets/logo/mini-blue.png'),
                        body: payload.message
                    })
                }
            })

            channel.bind('App\\Events\\CompanyEvent', payload => {
                if (payload.type === 'configs') {
                    this.$store.commit('set_user_company', payload)
                }
            })

            channel.bind('pusher:subscription_error', (status) => {
                console.log('Subscription error', status)
            })
        },

        chat_notification_channel(channel) {
            channel.bind('App\\Events\\ChatNotification', ({notification}) => {
                const sender_id = notification.sender.id
                const conv = this.all_conversations.find(conv => conv.id === sender_id)
                if (!conv || !conv.open) {
                    this.add_to_chat(notification)
                }
            })
        },

        open_channel(channel) {
            channel.bind('App\\Events\\GlobalEvent', payload => {
                // console.log(payload)
                if (payload.type === 'configs') {
                    this.$store.commit('set_global_configs', payload)
                    localStorage.setItem('session-eXt-eQt128', this.CryptoJS.AES.encrypt(JSON.stringify(payload), settings.paraphrase).toString())
                }
            })
        },

        handle_unread_message(sender) {
            const conv = this.all_conversations.find(conv => conv.id === sender.id)
            if (conv && !conv.open && conv.active) {
                this.add_unread_messages(sender.id)
            }
        },
        navigate() {
            this.$router.push({name: this.admintabs[this.tab].route_name})
        }
    }
}