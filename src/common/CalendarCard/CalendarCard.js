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
    start: null,
    attributes: [
      {
        highlight: true,
        popover: {
          label: 'Meeting with the team'
        },
        dates: [
          new Date(2020, 2, 1), // Jan 1st
          new Date(2020, 2, 10), // Jan 10th
          new Date(2020, 2, 22) // Jan 22nd
        ]
      },
      {
        highlight: 'red',
        popover: {
          label: 'Task 2 Time Line'
        },
        dates: [
          { start: new Date(2020, 2, 2), end: new Date(2020, 2, 9) },
          { start: new Date(2020, 2, 15), span: 5 } // # of days
        ]
      }
    ]
  })
}
