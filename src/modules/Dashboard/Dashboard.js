import {mapActions, mapGetters, mapMutations} from 'vuex'
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
        this.$pusher.authenticate();
        this.subscribeToApp()
        this.subscribePresence()
        this.fetch_chat()
        this.$event.$on('open_emailer', (user) => {
            this.$refs.global_emailer.openEmailer(user)
        })
        this.$event.$on('close_emailer', () => {
            this.$refs.global_emailer.closeEmailer()
        })
    },

    methods: {
        ...mapMutations('chatNotifications', ['add_chat']),
        ...mapMutations('onlineUsers', ['set_all_users']),
        ...mapMutations('chat', ['add_unread_messages', 'add_message_to_conv']),
        ...mapActions('notifications', ['fetch_chat']),
        ...mapActions(['fetchUsers']),
        subscribePresence() {
            const presence_channel = this.$pusher.subscribe(`presence-friend-list-${this.user.company_id}`)

            presence_channel.bind('pusher:member_added', ({info: member}) => {
                this.$store.commit('onlineUsers/user_logged_in', {
                    id: member.id,
                    name: `${member.first_name}, ${member.last_name}`,
                    is_online: !!member.is_online,
                    image_url: member.image_url
                })
            })

            presence_channel.bind('pusher:member_removed', ({info: member}) => {
                const index = this.all_users.findIndex(
                    on_user => on_user.id === member.id
                )
                if (~index) {
                    this.$store.commit('onlineUsers/user_logged_out', index)
                }
            })

            presence_channel.bind('App\\Events\\ProjectTaskNotification', ({payload}) => {
                let index = payload.receivers.findIndex(i => i === this.user.id)
                if (~index) {
                    new Notification(payload.title, {
                        icon: require('@/assets/logo/mini-blue.png'),
                        body: payload.message
                    })
                }
            })

            presence_channel.bind('App\\Events\\CompanyEvent', payload => {
                if (payload.type === 'configs') {
                    this.$store.commit('set_user_company', payload)
                }
            })

            presence_channel.bind('Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', payload => {
                if (payload.type.includes('CompanyNotification'))
                    this.handleNotificationPayload(payload, 'notification')
            })

            presence_channel.bind('App\\Events\\ChatNotification', payload => {
                this.handleChatPayload(payload)
            })

            presence_channel.bind('pusher:subscription_succeeded', ({members}) => {
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

            presence_channel.bind('pusher:subscription_error', (status) => {
                console.log('Subscription error', status)
            })
        },
        subscribeToApp() {
            this.app_channel = this.$pusher.subscribe(`apps`)
            this.app_channel.bind('App\\Events\\GlobalEvent', payload => {
                if (payload.type === 'configs') {
                    this.$store.commit('set_global_configs', payload)
                    localStorage.setItem('session-eXt-eQt128', this.CryptoJS.AES.encrypt(JSON.stringify(payload), settings.paraphrase).toString())
                }
            })
        },
        handleNotificationPayload(payload, type) {
            if (payload.data && payload.data.targets.length > 0 && payload.data.title) {
                if (payload.targets.includes(this.user.id)) {
                    this.$store.commit(`chatNotifications/add_${type}`, payload)
                    new Notification(payload.data.title, {
                        icon: require('@/assets/logo/mini-blue.png'),
                        body: payload.data.message
                    })
                }
            } else {
                if (payload.data && payload.data.title) {
                    this.$store.commit(`chatNotifications/add_${type}`, payload)
                    new Notification(payload.data.title, {
                        icon: require('@/assets/logo/mini-blue.png'),
                        body: payload.data.message
                    })
                }
            }
        },

        handleChatPayload(payload) {
            console.log(payload)
            let index = payload.receivers.findIndex(user => user.id === this.user.id)
            if (~index) {
                this.add_chat(payload.message)
            }
        },
        navigate() {
            this.$router.push({name: this.admintabs[this.tab].route_name})
        }
    }
}