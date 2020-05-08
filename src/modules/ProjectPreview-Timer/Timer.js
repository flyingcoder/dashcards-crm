import { list_functionality } from '@/services/list-functionality/list-functionality'
import request from '@/services/axios_instance'
//Components
import VueTable from '@/common/VueTable/VueTable.vue'
import Avatars from '@/common/Avatars.vue'
import PlayPause from '@/modules/Timer/components/PlayPause.vue'

export default {
  name: 'TimerTab',
  mixins: [list_functionality],
  components: {
    VueTable,
    Avatars,
    PlayPause
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
      { text: 'Assigned To', sortable : false  },
      { text: 'Task', sortable : false  },
      { text: 'Milestone', sortable : false  },
      { text: 'Status', sortable : false  },
      { text: 'Total Time' , sortable : false }
    ]
  }),

  methods: {
    view_task(id) {
      this.$router.push(`/dashboard/project-preview/${this.id}/tasks?id=` + id)
    }
  },

  computed: {
    dynamic_api() {
      return `api/projects/${this.id}/project-tasks-timers`
    },
    client() {
      return this.id
    }
  },

  created() {
    this.get_timers()
  },

  methods: {
    get_timers() {
      this.fill_table_via_url(this.dynamic_api)
    },
    get_more_timers() {
      this.load_more_via_url(this.dynamic_api)
    }
  }
}
