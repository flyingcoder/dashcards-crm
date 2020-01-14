import { table_functionality } from '@/services/table-functionality/table-functionality'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'

export default {
  name: 'TimerTab',
  mixins: [table_functionality],
  components: {
    CustomTable
  },
  props: {
    id: [Number, String]
  },
  data: () => ({
    sortList: [
      { title: 'Sort by Client' },
      { title: 'Sort by Task' },
      { title: 'Sort by Services' },
      { title: 'Sort by Time' },
      { title: 'Sort by Date' }
    ],
    headers: [
      { text: 'Client', value: 'id'},
      { text: 'Task', value: 'title' },
      { text: 'Assignee', value: 'assignee' },
      { text: 'Total Time', value: 'total_time'},
      { text: 'Status', value: 'status'},
      { is_action: false }
    ]
  }),

  computed: {
    dynamic_api() {
      return `api/projects/${this.id}/timers`
    },
    client() {
      return this.id
    }
  },
  created() {
    this.fill_table('get_project_timers', false, this.dynamic_api)
    console.log(this)
  }
}
