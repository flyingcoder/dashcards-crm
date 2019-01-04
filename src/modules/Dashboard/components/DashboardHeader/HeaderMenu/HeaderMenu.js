import { mapGetters } from 'vuex'
//Components
import Dropdown from './components/Dropdown.vue'
import AddCards from './components/DashCardsDropdown/DashCardsDropdown.vue'
import NotificationIcon from '@/common/NotificationIcon/NotificationIcon.vue'

export default {
  components: {
    Dropdown,
    AddCards,
    NotificationIcon
  },

  computed: {
    ...mapGetters('headerIcons', ['chat', 'notification']),

    mail_icon() {
      return require('@/assets/icons/header/email__default.png')
    },
    hovered_mail_icon() {
      return require('@/assets/icons/header/email.png')
    },

    notification_icon() {
      return require('@/assets/icons/header/notification__default.png')
    },
    hovered_notification_icon() {
      return require('@/assets/icons/header/notification.png')
    },

    chat_icon() {
      return require('@/assets/icons/header/chat__default.png')
    },
    hovered_chat_icon() {
      return require('@/assets/icons/header/chat.png')
    }
  },

  methods: {
    go_to_pricing_page() {
      this.$router.push({ name: 'pricing' })
    }
  }
}
