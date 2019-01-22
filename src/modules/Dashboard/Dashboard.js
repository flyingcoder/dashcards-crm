import { mapGetters, mapMutations } from 'vuex'
<<<<<<< HEAD
import makeRequestTo from '@/services/makeRequestTo'
=======
>>>>>>> develop
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
<<<<<<< HEAD
    this.fetch_all_users()
=======
    this.subscribe()
>>>>>>> develop
  },

  methods: {
    ...mapMutations('onlineUsers', ['set_all_users']),
    ...mapMutations('chat', ['add_unread_messages', 'add_message_to_conv']),

    subscribe() {
      this.$pusher.authenticate()
<<<<<<< HEAD
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
=======

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
>>>>>>> develop
        })
        this.set_all_users(all_users)
      })
    },

<<<<<<< HEAD
    logout_channel(channel) {
      channel.bind('App\\Events\\UserLogout', ({ user }) => {
        const index = this.all_users.findIndex(
          on_user => on_user.id === user.id
=======
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
>>>>>>> develop
        )
        if (~index) {
          this.$store.commit('onlineUsers/user_logged_out', index)
        }
      })
    },

<<<<<<< HEAD
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

=======
>>>>>>> develop
    handle_unread_message(sender) {
      const conv = this.all_conversations.find(conv => conv.id === sender.id)
      if (!conv.open && conv.active) {
        this.add_unread_messages(sender.id)
      }
<<<<<<< HEAD
    },

    fetch_all_users() {
      makeRequestTo.get_all_users().then(({ data }) => {
        this.set_all_users(data)
        this.subscribe()
      })
=======
>>>>>>> develop
    }
  }
}
