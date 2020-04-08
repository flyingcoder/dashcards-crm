import * as apiTo from '../api'
import { mapGetters } from 'vuex'
import { cloneDeep } from 'lodash'
import { global_utils } from '@/global_utils/global_utils'
// Components
import SingleNotification from './SingleNotification.vue'

export default {
  mixins: [global_utils],
  components: { SingleNotification },
  props: {
    visible: { type : Number, default : 0 }
  },

  data: () => ({
    notificationsFetched: false,
    boilerplate: false,
    tile: false,
    type: 'list-item-avatar-three-line',
    types: [],
    btnloading: false,
    noMoreData: false,
    current_page : 1,
    total_page : 0,
    total_counts: 0
  }),
  computed: {
    ...mapGetters('notifications', { notifications: 'notification' })
  },
  created(){
    if (this.current_page === 1) {
      this.visible > 0 && !this.notificationsFetched && this.fetchNotifications()
    }
  },
  /*watch: {
    visible(val) {
      val > 0 && !this.notificationsFetched && this.fetchNotifications()
    }
  },*/

  methods: {
    fetchNotifications() {
      this.notificationsFetched = true
      apiTo
        .getUnreadNotifications({ page : this.current_page })
        .then(({ data }) => {
          this.$store.commit('notifications/setNotification', data.data)
          this.current_page = data.current_page
          this.total_page = data.last_page
          this.total_counts = data.total
        })
        .finally(() => {
          this.notificationsFetched = false
          this.btnloading = false
          if (this.current_page >= this.total_page) {
            this.noMoreData = true
          }
        })
    },
    fetchMoreNotifications() {
      this.notificationsFetched = true
      this.btnloading = true
      apiTo
        .getUnreadNotifications({ page : this.current_page+1 })
        .then(({ data }) => {
          this.$store.commit('notifications/addMoreNotification', data.data)
          this.current_page = data.current_page
          this.total_page = data.last_page
          this.total_counts = data.total
        })
        .finally(() => {
          this.notificationsFetched = false
          this.btnloading = false
          if (this.current_page >= this.total_page) {
            this.noMoreData = true
          }
        })
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
