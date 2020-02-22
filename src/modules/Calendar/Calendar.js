import moment from 'moment'
//Components
import TableHeader from '@/common/TableHeader.vue'

export default {
  name: 'Calendar',
  components: { TableHeader },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Calendar', disabled: true, router_name: null }
    ],
    start: moment().format('YYYY-MM-DD'),
    type: 'month'
  }),

  computed: {
    date() {
      return moment(this.start, 'YYYY-MM-DD').format('MMMM YYYY')
    }
  }
}
