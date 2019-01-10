import { mapGetters } from 'vuex'

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

  methods: {
    open_chat_box(user) {
      this.$emit('open-chatbox', user)
      this.fabs = false
    }
  }
}
