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
    dashboard: Boolean
  },

  data: () => ({
    timeline_items: [],
    loading: false
  }),

  created() {
    const api = this.id ? `api/projects/${this.id}/timeline` : 'api/activities'
    this.fill_timeline_card(api)
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
        .get(api)
        .then(response => (this.timeline_items = response.data))
        .finally(() => (this.loading = false))
    }
  }
}
