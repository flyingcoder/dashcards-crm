import * as apiTo from '../api'
import { mapGetters } from 'vuex'
// Components
import SingleNotification from './SingleNotification.vue'

export default {
  components: { SingleNotification },
  props: {
    visible: Boolean
  },

  data: () => ({
    notificationsFetched: false
  }),

  computed: {
    ...mapGetters('notifications', {
      notifications: 'notification'
    })
  },

  watch: {
    visible(val) {
      val && !this.notificationsFetched && this.fetchNotifications()
    }
  },

  methods: {
    fetchNotifications() {
      this.notificationsFetched = true
      apiTo
        .getNotifications()
        .then(({ data }) =>
          this.$store.commit('notifications/setNotification', data)
        )
    }
  }
}
