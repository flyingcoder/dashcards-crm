import * as apiTo from '../api'
import { mapGetters } from 'vuex'
import { cloneDeep } from 'lodash'
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
    },
    notificationClicked(notification, index) {
      this.$emit('notification-clicked')
      apiTo.markReadNotification(notification.id).then(() => {
        let notifications = cloneDeep(this.notifications)
        notifications[index].read = true
        this.$store.commit('notifications/setNotification', notifications)
      })
    }
  }
}
