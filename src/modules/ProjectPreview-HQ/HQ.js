import TasksCard from '@/common/TasksCard/TasksCard.vue'
import TimelineCard from '@/common/TimelineCard/TimelineCard.vue'
import ProjectOverviewCard from './components/ProjectOverviewCard/ProjectOverviewCard.vue'
import InvoiceTable from './components/InvoiceTable/InvoiceTable.vue'

export default {
  components: {
    ProjectOverviewCard,
    TimelineCard,
    TasksCard,
    InvoiceTable
  },

  props: {
    id: [Number, String]
  },

  data: () => ({
    taskPath: { name: 'project_preview', query: { tab: 'Task' } }
  }),

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.verifyProject(to, from, next)
    })
  }
}
