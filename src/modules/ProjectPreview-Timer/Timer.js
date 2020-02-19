import { table_functionality } from '@/services/table-functionality/table-functionality'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import AssignedBtn from '@/common/AssignedBtn.vue'

export default {
  name: 'TimerTab',
  mixins: [table_functionality],
  components: {
    CustomTable,
    AssignedBtn
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
      { text: 'Task', value: 'title' },
      { text: 'Assignee', value: 'assignee' },
      { text: 'Total Time', value: 'total_time'},
      { text: 'Status', value: 'status'},
      { is_action: false }
    ]
  }),

  methods: {
    view_task(id) {
      this.$router.push('/dashboard/project-preview/9/tasks?id=' + id)
    }
  },

  computed: {
    dynamic_api() {
      return `api/projects/${this.id}/timers`
    },
    client() {
      return this.id
    }
  },

  created() {
    console.log(this.$route.query.id)
    this.fill_table('get_project_timers', false, this.dynamic_api)
  }
}
