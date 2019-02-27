import { api_to } from './api'
//Components
import TableHeader from '@/common/TableHeader.vue'

export default {
  name: 'Chat',
  components: {
    TableHeader
  },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Chat', disabled: true, router_name: null }
    ],
    all_users: []
  }),

  created() {
    this.$store.commit('set_floating_button', false)
    this.get_chat_list()
  },

  beforeDestroy() {
    this.$store.commit('set_floating_button', true)
  },

  methods: {
    get_chat_list() {
      api_to.get_chat_list().then(({ data }) => (this.all_users = data))
    }
  }
}
