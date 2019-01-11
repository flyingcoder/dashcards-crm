import { mapGetters, mapMutations } from 'vuex'
import makeRequestTo from '@/services/makeRequestTo'
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

  computed: {
    ...mapGetters('onlineUsers', ['all_users']),
    ...mapGetters('chat', ['unread_messages', 'all_conversations']),
    user() {
      return this.$store.getters.user
    }
  },

  created() {
    this.fetch_all_users()
  },

  methods: {
    ...mapMutations('onlineUsers', ['set_all_users']),
    ...mapMutations('chat', ['add_unread_messages', 'add_message_to_conv']),

    subscribe() {
      this.$pusher.authenticate()
      const login_channel = this.$pusher.subscribe(
        'private-user.login.' + this.user.company_id
      )
      const logout_channel = this.$pusher.subscribe(
        'private-user.logout.' + this.user.company_id
      )

      const chat_channel = this.$pusher.subscribe(
        `private-chat.new-message.${this.user.id}`
      )

      this.login_channel(login_channel)
      this.logout_channel(logout_channel)
      this.chat_channel(chat_channel)
    },

    login_channel(channel) {
      channel.bind('App\\Events\\UserLogin', ({ user }) => {
        this.$store.commit('onlineUsers/user_logged_in', {
          id: user.id,
          name: `${user.first_name}, ${user.last_name}`,
          is_online: user.is_online
        })
      })
    },

    logout_channel(channel) {
      channel.bind('App\\Events\\UserLogout', ({ user }) => {
        const index = this.all_users.findIndex(
          on_user => on_user.id === user.id
        )
        if (~index) {
          this.$store.commit('onlineUsers/user_logged_out', index)
        }
      })
    },

    chat_channel(channel) {
      channel.bind(
        `App\\Events\\PrivateChatSent`,
        ({ message, sender, receiver }) => {
          if (receiver.id === this.user.id) {
            const conv = this.all_conversations.find(
              conv => conv.id === sender.id
            )
            if (!conv.open && conv.active) {
              this.add_unread_messages(sender.id)
            }
            this.add_message_to_conv({ id: sender.id, message })
          }
        }
      )
    },

    fetch_all_users() {
      makeRequestTo.get_all_users().then(({ data }) => {
        this.set_all_users(data)
        this.subscribe()
      })
    }
  }
}
