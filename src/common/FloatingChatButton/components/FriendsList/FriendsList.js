import makeRequestTo from '@/services/makeRequestTo'
import { mapGetters, mapMutations } from 'vuex'

export default {
  data: () => ({
    fabs: false
  }),

  computed: {
    ...mapGetters('onlineUsers', ['all_users'])
  },

  created() {
    makeRequestTo.get_all_users().then(({ data }) => this.set_all_users(data))
  },

  methods: {
    ...mapMutations('onlineUsers', ['set_all_users']),
    open_chat_box(user) {
      this.$emit('open-chatbox', user)
      this.fabs = false
    }
  }
}
