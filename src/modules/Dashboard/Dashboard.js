import Pusher from 'pusher-js'
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
    }
  },

  created() {
    this.fetch_online_users()
  },

  methods: {
    subscribe() {
      let pusher = new Pusher('6857db1d25c87cb2e20d', {
        cluster: 'ap1',
        encrypted: true,
        authEndpoint: 'https://api.bizzooka.com/api/broadcasting/auth',
        auth: {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }
      })
      let channel = pusher.subscribe(
        'private-user.login.' + this.user.company_id
      )
      channel.bind('App\\Events\\UserLogin', ({ user }) => {
        this.$store.commit('onlineUsers/add_new_user', {
          id: user.id,
          name: `${user.first_name}, ${user.last_name}`
        })
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
