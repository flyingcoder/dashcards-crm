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
        tab: 0,
        companyChannel: null,
        userChannel: null,
        appChannel: null
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
        this.subscribeToCompany()
        this.subscribeToUser()
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
        ...mapActions('onlineUsers', ['user_logged_in', 'user_logged_out']),
        ...mapMutations('chat', ['add_unread_messages', 'add_message_to_conv']),
        ...mapActions('notifications', ['fetch_chat']),
        ...mapActions(['fetchUsers']),
        subscribeToUser() {
            this.userChannel = this.$pusher.subscribe(`presence-as-user.${this.user.id}`)
            this.userChannel.bind('pusher:subscription_succeeded', ({members}) => {
                console.log('Connected to as-user channel.')
            })
            this.userChannel.bind('pusher:subscription_error', (status) => {
                console.log('Disconnected to as-user channel', status)
            })
            this.userChannel.bind('App\\Events\\ChatMessageSent', ({message}) => {
                this.$event.$emit('new-chat-message-received', message)
                if (message.sender.id !== this.user.id ) {
                    this.notify(`New message from ${message.sender.first_name}`, message.body)
                }
            })
        },
        subscribeToCompany() {
            this.companyChannel = this.$pusher.subscribe(`presence-as-company.${this.user.company_id}`)

            this.companyChannel.bind('App\\Events\\ProjectTaskNotification', ({payload}) => {
                let index = payload.receivers.findIndex(i => i === this.user.id)
                if (~index) {
                    this.notify(payload.title, payload.message)
                }
            })

            this.companyChannel.bind('App\\Events\\CompanyEvent', payload => {
                if (payload.type === 'configs') {
                    this.$store.commit('set_user_company', payload)
                }
            })

            this.companyChannel.bind('Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', payload => {
                console.log(payload)
                if (payload.type.includes('CompanyNotification')) {
                    this.handleNotificationPayload(payload, 'notification')
                }
            })

            this.companyChannel.bind('App\\Events\\ChatNotification', payload => {
                this.handleChatPayload(payload)
            })

            this.companyChannel.bind('pusher:subscription_succeeded', ({members}) => {
                console.log('Connected to as-company channel.')
                this.set_all_users(Object.values(members))
            })

            this.companyChannel.bind('pusher:member_added', ({info}) => {
                this.user_logged_in(info).then(() => {
                    this.$event.$emit('user-is-logged-in', info)
                    //this.$event.$emit('open_snackbar', `${info.fullname} is now online`)
                })
            })

            this.companyChannel.bind('pusher:member_removed', ({info}) => {
                this.user_logged_out(info).then(() => {
                    this.$event.$emit('user-is-logged-out', info)
                    //this.$event.$emit('open_snackbar', `${info.fullname} is now offline`)
                })
            })

            this.companyChannel.bind('pusher:subscription_error', (status) => {
                console.log('Disconnected to as-company channel', status)
            })
        },
        subscribeToApp() {
            this.appChannel = this.$pusher.subscribe(`as-apps`)
            this.appChannel.bind('pusher:subscription_succeeded', (payload) => {
                console.log('Connected to global app channel.')
            })
            this.appChannel.bind('pusher:subscription_error', (status) => {
                console.log('Disconnected to global app channel', status)
            })
            this.appChannel.bind('App\\Events\\GlobalEvent', payload => {
                if (payload.type === 'configs') {
                    this.$store.commit('set_global_configs', payload)
                    localStorage.setItem('session-eXt-eQt128', this.CryptoJS.AES.encrypt(JSON.stringify(payload), settings.paraphrase).toString())
                }
            })
        },

        handleNotificationPayload(payload, type) {
            if (payload.data && payload.data.title) {
                if (payload.data.targets.length > 0 && payload.data.targets.includes(this.user.id)) {
                    if (payload.data.notif_only === false)
                        this.$store.commit(`chatNotifications/add_${type}`, payload)

                    this.notify(payload.data.title, payload.data.message)
                } else if (payload.data.title) {
                    if (payload.data.notif_only === false)
                        this.$store.commit(`chatNotifications/add_${type}`, payload)

                    this.notify(payload.data.title, payload.data.message)
                }
            } else {
                if (payload.targets.length > 0 && payload.targets.includes(this.user.id)) {
                    if (payload.notif_only === false)
                        this.$store.commit(`chatNotifications/add_${type}`, payload)

                    this.notify(payload.title, payload.message)
                } else if (payload.title) {
                    if (payload.notif_only === false)
                        this.$store.commit(`chatNotifications/add_${type}`, payload)

                    this.notify(payload.title, payload.message)
                }
            }
        },
        notify(title, body) {
            this.$notification.show(title, {
                icon: require('@/assets/logo/mini-blue.png'),
                body: body
            }, {})
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