import { mapGetters } from 'vuex'
import request from '@/services/axios_instance'
import moment from 'moment'

import DashCard from '@/common/DashCard.vue'
import Avatars from '@/common/Avatars.vue'

export default {
  name: 'TimerCard',
  components: {
    DashCard,
    Avatars
  },

  props: {
    id: [Number, String],
    viewMoreLink: Object,
    dashboard: Boolean
  },

  data() {
    return {
      loading: true,
      items: [],
      page: 1,
      timeNow: new Date().toLocaleTimeString(),
      dayNow: moment().format('ddd'),
      dateNow: moment().format('LL'),
      pagination: {
        current: 1,
        total: 0
      },
      headers: [
        { text: 'Task', sortable: false },
        { text: 'Assigned',  sortable: false },
        { text: 'Total Time', sortable: false },
        { text: 'Status', sortable: false }
      ],
      slides: 5,
      tab : 'timer'
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  created() {
    this.getTimers()
    // `this` points to the vm instance
    setInterval(() => {
      this.timeNow = new Date().toLocaleTimeString()
    }, 1000)
  },

  methods: {
    getTimers() {
      this.loading = true
      request
        .get(`/api/user/${this.user.id}/timers?page=${this.pagination.current}`)
        .then(response => {
          this.items = response.data.data
          this.pagination.current = response.data.current_page
          this.pagination.total = response.data.last_page
        })
        .finally(() => (this.loading = false))
    },
    onPageChange() {
      this.getTimers()
    }
  }
}
