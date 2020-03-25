import moment from 'moment'
import { table_functionality } from '@/services/table-functionality/table-functionality'
//Components
import TableHeader from '@/common/TableHeader.vue'
import CalendarDialog from './components/CalendarDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'

export default {
  name: 'Calendar',
  mixins: [table_functionality],
  components: { TableHeader, CalendarDialog, DeleteDialog },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Calendar', disabled: true, router_name: null }
    ],
    table_config: {
      route_name: 'templates',
      add_message: 'New Template added successfully!',
      update_message: 'Template updated successfully!',
      delete_message: 'Template deleted successfully!'
    },
    start: moment().format('YYYY-MM-DD'),
    type: 'month',
    active_tab: '',
    attributes: [
      {
        dot: true,
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
        dot: 'red',
        popover: {
          label: 'Task 2 Time Line'
        },
        dates: [
          { start: new Date(2020, 2, 2), end: new Date(2020, 2, 9) },
          { start: new Date(2020, 2, 15), span: 5 } // # of days
        ]
      }
    ],
    eventlabels: [
      { title: 'Default', color: '#ccc' },
      { title: 'Ranking Report', color: '#515d93' },
      { title: 'Video Marketing', color: '#f56c6c' },
      { title: 'Local SEO', color: '#1fb868' },
      { title: 'Social Post', color: '#00a7e5' },
      { title: 'Report files', color: '#ed8564' },
      { title: 'Others', color: '#088f81' }
    ],
    events: [
      { 
        type: 'Event', 
        color: '#f56c6c',
        time: '12:00PM - 1:30PM', 
        title: 'Video Product Roadmap 01',
        users: [
          {
            first_name: 'Alvin',
            last_name: 'Pacot',
            image_url: false
          },
          {
            first_name: 'Kirby',
            last_name: 'Capangpangan',
            image_url: false
          },
          {
            first_name: 'Moe',
            last_name: 'Alongan',
            image_url: false
          },
         ]
      },
      { 
        type: 'Event', 
        color: '#f56c6c',
        time: '12:00PM - 1:30PM', 
        title: 'Video Product Roadmap 02',
        users: [
          {
            first_name: 'Alvin',
            last_name: 'Pacot',
            image_url: false
          },
          {
            first_name: 'Kirby',
            last_name: 'Capangpangan',
            image_url: false
          },
          {
            first_name: 'Moe',
            last_name: 'Alongan',
            image_url: false
          },
         ]
      },
      { 
        type: 'Event', 
        color: '#f56c6c',
        time: '12:00PM - 1:30PM', 
        title: 'Video Product Roadmap 03',
        users: [
          {
            first_name: 'Alvin',
            last_name: 'Pacot',
            image_url: false
          },
          {
            first_name: 'Kirby',
            last_name: 'Capangpangan',
            image_url: false
          },
          {
            first_name: 'Moe',
            last_name: 'Alongan',
            image_url: false
          },
         ]
      },
      { 
        type: 'Event', 
        color: '#f56c6c',
        time: '12:00PM - 1:30PM', 
        title: 'Video Product Roadmap 04',
        users: [
          {
            first_name: 'Alvin',
            last_name: 'Pacot',
            image_url: false
          },
          {
            first_name: 'Kirby',
            last_name: 'Capangpangan',
            image_url: false
          },
          {
            first_name: 'Moe',
            last_name: 'Alongan',
            image_url: false
          },
         ]
      },
    ],
  }),

  computed: {
    date() {
      return moment(this.start, 'YYYY-MM-DD').format('MMMM YYYY')
    }
  }
}
