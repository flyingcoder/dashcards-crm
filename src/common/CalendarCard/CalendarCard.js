import request from '@/services/axios_instance'
import moment from 'moment'
//Components
import DashCard from '@/common/DashCard.vue'

export default {
  name: 'CalendarCard',

  components: {
    DashCard
  },

  props: {
    id: [Number, String],
    viewMoreLink: Object, 
    dashboard: Boolean 
  },

  data: () => ({
    loading: false,
    start : null
  })
}
