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
    type: 'month',
    attributes: [
      {
        dot: true,
        popover: {
          label: 'Meeting with the team',
        },
        dates: [
          new Date(2020, 2, 1), // Jan 1st
          new Date(2020, 2, 10), // Jan 10th
          new Date(2020, 2, 22), // Jan 22nd
        ]
      },      
      {
        dot: 'red',
        popover: {
          label: 'Task 2 Time Line',
        },
        dates: [
          { start: new Date(2020, 2, 2), end: new Date(2020, 2, 9) },
          { start: new Date(2020, 2, 15), span: 5 } // # of days
        ]
      }
    ],
  }),

  computed: {
    date() {
      return moment(this.start, 'YYYY-MM-DD').format('MMMM YYYY')
    }
  }
}
