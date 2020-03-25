import { list_functionality } from '@/services/list-functionality/list-functionality'
import request from '@/services/axios_instance'
//Components
import VueTable from '@/common/VueTable/VueTable.vue'
import AssignedBtn from '@/common/AssignedBtn.vue'

export default {
  name: 'TimerTab',
  mixins: [list_functionality],
  components: {
    VueTable,
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
      { text: 'Total Time', value: 'total_time' },
      { text: 'Status', value: 'status' }
    ]
  }),

  methods: {
    view_task(id) {
      this.$router.push(`/dashboard/project-preview/${this.id}/tasks?id=` + id)
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
    // this.get_timers()
    this.fill_table('get_project_timers', false, this.dynamic_api)
  },

  methods: {
    get_timers() {
      this.loading = true
      request
        .get(`${this.dynamic_api}?page=1`)
        .then(({ data }) => {
          data.data.forEach(item => {
            this.items.push(item)
          })
          this.pagination.current = data.current_page
          this.pagination.total = data.last_page
          this.hasMoreData()
        })
        .finally(() => {
          this.loading = false
          this.$event.$emit('btnloading_off', false)
        })
    },
    get_more_timers() {
      this.loading = true
      request
        .get(`${this.dynamic_api}?page=${this.pagination.current + 1}`)
        .then(({ data }) => {
          this.items = data.data
          this.pagination.current = data.current_page
          this.pagination.total = data.last_page
          this.hasMoreData()
        })
        .finally(() => {
          this.loading = false
          this.$event.$emit('btnloading_off', false)
        })
    }
  }
}
