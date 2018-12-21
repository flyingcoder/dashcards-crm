import HeaderIcon from './components/HeaderIcon.vue'
import Dropdown from './components/Dropdown.vue'
import AddCards from './components/DashCardsDropdown/DashCardsDropdown.vue'
import ChatList from './components/ChatNotificationList/ChatNotificationList.vue'
import NotificationList from './components/NotificationList/NotificationList.vue'

export default {
  name: 'HeaderMenu',

  components: {
    HeaderIcon,
    Dropdown,
    AddCards,
    ChatList,
    NotificationList
  },

  methods: {
    go_to_pricing_page() {
      this.$router.push({ name: 'pricing' })
    }
  }
}
