import TasksCard from '@/common/TasksCard/TasksCard.vue'
import PreviewCard from './components/TaskTabPreviewCard/TaskTabPreviewCard.vue'

export default {
  name: 'TasksTab',
  components: {
    TasksCard,
    PreviewCard
  },
  props: {
    id: [Number, String]
  },

  provide: {
    bodyMaxHeight: '1200px'
  },

  data: () => ({
    task: null
  }),

  created() {
    this.$event.$on(
      'task-row-clicked',
      data_from_child => (this.task = data_from_child)
    )
  },
  beforeDestroy() {
    this.$event.$off('task-row-clicked')
  }
}
