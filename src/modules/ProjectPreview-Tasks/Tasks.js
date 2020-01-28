import apiTo from './api'
//Components
import TasksCard from '@/common/TasksCard-Manage-From-Parent/TasksCard.vue'
import PreviewCard from './components/TaskTabPreviewCard/TaskTabPreviewCard.vue'
import TaskDialog from './components/TaskDialog/TaskDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'

export default {
  name: 'TasksTab',
  components: {
    TasksCard,
    PreviewCard,
    TaskDialog,
    DeleteDialog
  },
  props: {
    id: [Number, String]
  },

  provide() {
    const properties = {}
    Object.defineProperty(properties, 'loading', {
      get: () => this.loading
    })
    return { properties, bodyMaxHeight: '1200px' }
  },

  data: () => ({
    tasks_own: [],
    all_tasks: [],
    selected_tab: 'My Tasks',
    task: null,
    add_task_dialog: false,
    loading: false,
    delete_dialog: false
  }),

  computed: {
    tab_tasks() {
      if (this.selected_tab === 'My Tasks') return this.tasks_own
      return this.all_tasks
    },
    logged_user() {
      return this.$store.getters.user
    }
  },

  watch: {
    selected_tab: {
      handler(val) {
        if (val === 'My Tasks') this.get_own_tasks()
        else this.get_all_tasks()
      },
      immediate: true
    }
  },

  created() {
    this.$event.$on('task-row-clicked', task => (this.task = task))
    this.$event.$on('task-card-tab', tab => (this.selected_tab = tab))
  },
  beforeDestroy() {
    this.$event.$off('task-row-clicked')
  },

  methods: {
    get_own_tasks() {
      if (this.tasks_own.length) return //tasks are already fetched
      this.loading = true
      apiTo
        .get_own_tasks(this.id)
        .then(({ data }) => (this.tasks_own = data))
        .finally(() => (this.loading = false))
    },

    get_all_tasks() {
      if (this.all_tasks.length) return
      this.loading = true
      apiTo
        .get_all_tasks(this.id)
        .then(({ data }) => (this.all_tasks = data))
        .finally(() => (this.loading = false))
    },

    create_new_task(payload) {
      const is_myTask = payload.assigned_ids.includes(this.logged_user.id)
      apiTo.create_new_task(payload).then(({ data }) => {
        this.all_tasks.push(data)
        is_myTask && this.tasks_own.push(data)
        this.$refs.add_task_dialog.clear_and_close()
        this.$event.$emit('open_snackbar', 'New Task added successfully')
      })
    },

    edit_task(payload) {
      apiTo.edit_task(this.task.id, payload).then(({ data }) => {
        this.update_task(data, this.task.id, 'all_tasks')
        this.update_task(data, this.task.id, 'tasks_own')
        this.$refs.edit_task_dialog.$refs.dialog.clear_and_close()
        this.$event.$emit('open_snackbar', 'Task updated successfully')
      })
    },

    delete_task() {
      apiTo.delete_task(this.task.id).then(() => this.remove_task())
    },

    update_task(new_task, id, target) {
      const indexFound = this[target].findIndex(task => task.id === id)
      if (indexFound) this[target].splice(indexFound, 1, new_task)
    },

    remove_task() {
      //after delete request (API)
      const own_task_index = this.tasks_own.findIndex(
        task => task.id === this.task.id
      )
      const all_task_index = this.all_tasks.findIndex(
        task => task.id === this.task.id
      )
      if (~own_task_index) this.tasks_own.splice(own_task_index, 1)
      if (~all_task_index) this.all_tasks.splice(all_task_index, 1)

      this.delete_dialog = false
      this.$event.$emit('open_snackbar', 'Task deleted successfully')
      this.set_active_task_after_delete()
    },

    set_active_task_after_delete() {
      if (this.selected_tab === 'My Tasks') {
        if (this.tasks_own.length) this.task = this.tasks_own[0]
        else this.task = null
      } else {
        if (this.all_tasks.length) this.task = this.all_tasks[0]
        else this.task = null
      }
    },

    handle_dropdown_action(action) {
      const method = `open_${action}_task_dialog`
      this[method]()
    },

    open_edit_task_dialog() {
      this.$refs.edit_task_dialog.open_dialog()
    },

    closeEditDialog() {
      this.$refs.edit_task_dialog.cancel()
    },

    open_delete_task_dialog() {
      this.delete_dialog = true
    }
  }
}
