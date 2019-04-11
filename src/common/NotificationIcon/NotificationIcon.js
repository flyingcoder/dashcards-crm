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
