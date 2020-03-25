import request from '@/services/axios_instance'
import moment from 'moment'
import { global_utils } from '@/global_utils/global_utils'
//Components
import Empty from '@/common/Empty.vue'
import DashCard from '@/common/DashCard.vue'
import Carousel from 'vue-owl-carousel'

export default {
  name: 'TimelineCard',
  mixins: [global_utils],
  components: {
    DashCard,
    Carousel,
    Empty
  },

  props: {
    id: [Number, String],
    dashboard: Boolean,
    viewMoreLink: Object
  },

  data: () => ({
    timeline_items: [],
    loading: false,
    enableViewMore: true,
    pagination: {
      current: 1,
      total: 0
    }
  }),
  computed: {
    api() {
      return this.id ? `api/projects/${this.id}/timeline` : 'api/activities'
    }
  },
  created() {
    this.fill_timeline_card(this.api)
  },

  methods: {
    get_calendar_time(time) {
      let string = moment(time)
        .calendar()
        .split('at')
      return string.join('')
    },
    fill_timeline_card(api) {
      this.loading = true
      request
        .get(`${api}?page=${this.pagination.current}`)
        .then(response => {
          this.timeline_items = response.data.data
          this.pagination.current = response.data.current_page
          this.pagination.total = response.data.total
          this.enableViewMore =
            response.data.to !== null && response.data.to < response.data.total
        })
        .finally(() => (this.loading = false))
    },
    load_more_timeline() {
      this.loading = true
      request
        .get(`${this.api}?page=${this.pagination.current + 1}`)
        .then(response => {
          response.data.data.forEach(item => {
            this.timeline_items.push(item)
          })
          this.pagination.current = response.data.current_page
          this.pagination.total = response.data.total
          this.enableViewMore =
            response.data.to !== null && response.data.to < response.data.total
        })
        .finally(() => (this.loading = false))
    },
    set_icon(item) {
      let icon = 'mdi-buffer'
      //todo set icon by types
      return icon
    }
  }
}
