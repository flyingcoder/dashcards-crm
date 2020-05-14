import { mapGetters, mapMutations, mapActions } from 'vuex'
//Components
import DashboardLogo from './components/DashboardLogo/DashboardLogo.vue'
import DashboardHeader from './components/DashboardHeader/DashboardHeader.vue'
import DashboardSidebar from './components/DashboardSidebar/DashboardSidebar.vue'
import FloatingChatButton from '../.././common/FloatingChatButton/FloatingChatButton.vue'

export default {
    components: {
        DashboardLogo,
        DashboardHeader,
        DashboardSidebar,
        FloatingChatButton
    },

    data: () => ({
        mini_sidebar: false
    }),

    computed: {
        ...mapGetters('onlineUsers', ['all_users']),
        ...mapGetters('chat', ['unread_messages', 'all_conversations']),
        user() {
            return this.$store.getters.user
        },
        is_sm_and_down() {
            return this.$vuetify.breakpoint.smAndDown
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
    },

    methods: {
        ...mapMutations('onlineUsers', ['set_all_users']),
        ...mapMutations('chat', ['add_unread_messages', 'add_message_to_conv']),
        ...mapMutations('notifications', ['add_to_chat']),
        ...mapActions('notifications', ['fetch_chat']),

        subscribe() {
            this.$pusher.authenticate()

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
                ({ message, sender, receiver }) => {
                    const conv = this.all_conversations.find(
                        conv => conv.id === sender.id
                    )
                    if (conv && receiver.id === this.user.id) {
                        this.handle_unread_message(sender)
                        this.add_message_to_conv({ id: sender.id, message })
                    }
                }
            )
        },

        friends_channel(channel) {
            channel.bind('pusher:subscription_succeeded', ({ members }) => {
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

            channel.bind('pusher:member_added', ({ info: member }) => {
                this.$store.commit('onlineUsers/user_logged_in', {
                    id: member.id,
                    name: `${member.first_name}, ${member.last_name}`,
                    is_online: !!member.is_online,
                    image_url: member.image_url
                })
            })

            channel.bind('pusher:member_removed', ({ info: member }) => {
                const index = this.all_users.findIndex(
                    on_user => on_user.id === member.id
                )
                if (~index) {
                    this.$store.commit('onlineUsers/user_logged_out', index)
                }
            })

            channel.bind('pusher:subscription_error', (status) => {
                console.log('Subscription error', status)
            })
        },

        chat_notification_channel(channel) {
            channel.bind('App\\Events\\ChatNotification', ({ notification }) => {
                const sender_id = notification.sender.id
                const conv = this.all_conversations.find(conv => conv.id === sender_id)
                if (!conv || !conv.open) {
                    this.add_to_chat(notification)
                }
            })
        },

        handle_unread_message(sender) {
            const conv = this.all_conversations.find(conv => conv.id === sender.id)
            if (conv && !conv.open && conv.active) {
                this.add_unread_messages(sender.id)
            }
        }
    }
}