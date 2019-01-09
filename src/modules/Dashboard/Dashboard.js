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
    user() {
      return this.$store.getters.user
    },
    online_users() {
      return this.$store.getters['onlineUsers/online_users']
    }
  },

  created() {
    this.fetch_online_users()
  },

  methods: {
    subscribe() {
      this.$pusher.authenticate()
      let login_channel = this.$pusher.subscribe(
        'private-user.login.' + this.user.company_id
      )
      login_channel.bind('App\\Events\\UserLogin', ({ user }) => {
        this.$store.commit('onlineUsers/add_user', {
          id: user.id,
          name: `${user.first_name}, ${user.last_name}`
        })
      })

      let logout_channel = this.$pusher.subscribe(
        'private-user.logout.' + this.user.company_id
      )
      logout_channel.bind('App\\Events\\UserLogout', ({ user }) => {
        const index = this.online_users.findIndex(
          on_user => on_user.id === user.id
        )
        if (~index) {
          this.$store.commit('onlineUsers/delete_user', index)
        }
      })
    },
    fetch_online_users() {
      makeRequestTo.get_online_users().then(({ data }) => {
        this.$store.commit('onlineUsers/set_online_users', data)
        this.subscribe()
      })
    }
  }
}
