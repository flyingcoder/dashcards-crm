import DashCard from '@/common/DashCard.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'

export default {
  name: 'DynamicBox',
  components: {
    DashCard,
    DeleteDialog
  },
  props: {
    id: [Number, String],
    box: Object,
    loading: Boolean
  },

  data: () => ({
    delete_dialog: false,
    item_to_delete: null
  }),

  computed: {
    tasksProgress () {
      const { box } = this
      const completedTasks = box.tasks.filter(t => t.status === 'completed').length
      const allTasks = box.tasks.length
      return (completedTasks * allTasks / 100) * 100
    }
  },

  methods: {
    validate_title(title) {
      return title.length > 18 ? title.slice(0, 18) + '...' : title
    },

    openDeleteDialog(task) {
      this.delete_dialog = true
      this.item_to_delete = task
    },

    delete_task({ task_index, task_id }) {
      this.$emit('remove-task', { task_index, task_id })
      this.delete_dialog = false
      this.item_to_delete = null
    },

    edit_task_clicked(task, index) {
      this.$emit('edit-task', { task, index, box_id: this.box.id })
    }
  }
}