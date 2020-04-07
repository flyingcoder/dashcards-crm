import { mapGetters } from 'vuex'
import request from '@/services/axios_instance'
import moment from 'moment'

import DashCard from '@/common/DashCard.vue'
import AssignedBtn from '@/common/AssignedBtn.vue'

export default {
  name: 'TimerCard',
  components: {
    DashCard,
    AssignedBtn
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
        { id: 1, text: 'Task', value: 'title', sortable: false },
        { id: 2, text: 'Type', value: 'type', sortable: false },
        { id: 3, text: 'Total Time', value: 'total_time', sortable: false },
        { id: 4, text: 'Status', value: 'status', sortable: false }
      ],
      slides: 5
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
