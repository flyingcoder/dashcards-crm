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
    this.subscribe()
  },

  methods: {
    ...mapMutations('onlineUsers', ['set_all_users']),
    ...mapMutations('chat', ['add_unread_messages', 'add_message_to_conv']),

    subscribe() {
      this.$pusher.authenticate()

      const chat_channel = this.$pusher.subscribe(
        `private-chat.new-message.${this.user.id}`
      )

      const friends_channel = this.$pusher.subscribe(
        `presence-friend-list-${this.user.company_id}`
      )

      this.chat_channel(chat_channel)
      this.friends_channel(friends_channel)
    },

    chat_channel(channel) {
      channel.bind(
        `App\\Events\\PrivateChatSent`,
        ({ message, sender, receiver }) => {
          if (receiver.id === this.user.id) {
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
            is_online: !!value.is_online
          })
        })
        this.set_all_users(all_users)
      })

      channel.bind('pusher:member_added', ({ info: member }) => {
        this.$store.commit('onlineUsers/user_logged_in', {
          id: member.id,
          name: `${member.first_name}, ${member.last_name}`,
          is_online: !!member.is_online
        })
      })

      channel.bind('pusher:member_removed', ({ info: member }) => {
        const index = this.all_users.findIndex(
          on_user => on_user.id === member.id
        )
        if (~index) {
          makeRequestTo.logout_user(member.id)
          this.$store.commit('onlineUsers/user_logged_out', index)
        }
      })
    },

    handle_unread_message(sender) {
      const conv = this.all_conversations.find(conv => conv.id === sender.id)
      if (!conv.open && conv.active) {
        this.add_unread_messages(sender.id)
      }
    }
  }
}
