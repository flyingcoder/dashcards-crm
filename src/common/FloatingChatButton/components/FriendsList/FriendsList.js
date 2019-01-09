import makeRequestTo from '@/services/makeRequestTo'
import { mapGetters, mapMutations } from 'vuex'

export default {
  data: () => ({
    fabs: false
  }),

  computed: {
    ...mapGetters('onlineUsers', ['all_users']),
    online_users() {
      return this.all_users.filter(user => user.is_online)
    }
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
