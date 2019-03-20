import apiTo from './api'
//Components
import TasksCard from '@/common/TasksCard-Manage-From-Parent/TasksCard.vue'
import PreviewCard from './components/TaskTabPreviewCard/TaskTabPreviewCard.vue'
import TaskDialog from './components/TaskDialog/TaskDialog.vue'

export default {
  name: 'TasksTab',
  components: {
    TasksCard,
    PreviewCard,
    TaskDialog
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
    loading: false
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
        .then(({ data }) => (this.tasks_own = data.data))
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
    }
  }
}
