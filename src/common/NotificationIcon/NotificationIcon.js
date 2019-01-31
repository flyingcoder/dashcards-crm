import HeaderIcon from '@/common/HeaderIcon.vue'
import ChatDropdown from './components/ChatDropdown.vue'

export default {
  components: {
    HeaderIcon,
    ChatDropdown
  },
  props: {
    imageSrc: String,
    hoveredImageSrc: String,
    count: [Number, String],
    type: String
  },
  data: () => ({
    friends: [
      {
        id: 0,
        name: 'Mohammad Alongan',
        status: 'online',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
      },
      {
        id: 1,
        name: 'Klent Gary',
        status: 'offline',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
      },
      {
        id: 2,
        name: 'Alvin Pacot',
        status: 'dnd',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
      },
      {
        id: 3,
        name: 'Roland Doda',
        status: 'online',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
      }
    ],
    dropdown_visible: false
  }),

  computed: {
    notifications() {
      return this[this.type]
    },

    mail() {
      return null
    },

    chat() {
      return this.$store.getters['notifications/chat']
    },

    notification() {
      return null
    }
  }
}
