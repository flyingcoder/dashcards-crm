import makeRequestTo from '@/services/makeRequestTo'
import { mapGetters, mapMutations } from 'vuex'

export default {
  data: () => ({
    fabs: false,
    showMessage: false,
  }),
  computed: {
    ...mapGetters('onlineUsers', ['all_users']),
    should_show() {
      return this.$store.getters.show_floating_button
    }
  },

  created() {
    makeRequestTo.get_all_users().then(({ data }) => this.set_all_users(data))
  },

  methods: {
    ...mapMutations('onlineUsers', ['set_all_users'])
  }
}
