import Pusher from 'pusher-js'
import makeRequestTo from '@/services/makeRequestTo'
//Components
import DashboardLogo from './components/DashboardLogo/DashboardLogo.vue'
import DashboardHeader from './components/DashboardHeader/DashboardHeader.vue'
import DashboardSidebar from './components/DashboardSidebar/DashboardSidebar.vue'
import FloatingChatButton from '../.././common/FloatingChatButton/FloatingChatButton.vue'

const pusher = new Pusher('6857db1d25c87cb2e20d', {
  cluster: 'ap1',
  encrypted: true
})

export default {
  components: {
    DashboardLogo,
    DashboardHeader,
    DashboardSidebar,
    FloatingChatButton
  },

  created() {
    this.fetch_online_users()
    this.subscribe()
  },

  methods: {
    subscribe() {
      pusher.subscribe('buzzooka-crm')
      pusher.bind('user.login', data => {
        console.log(data)
      })
    },
    fetch_online_users() {
      makeRequestTo
        .get_online_users()
        .then(({ data }) => this.$store.commit('set_online_users', data))
    }
  }
}
