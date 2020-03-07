import apiTo from './api'
import { mapMutations, mapActions, mapGetters } from 'vuex'
//Components
import TasksCard from '@/common/TasksCard/TasksCard.vue'
import PreviewCard from './components/TaskTabPreviewCard/TaskTabPreviewCard.vue'
import TaskDialog from './components/TaskDialog/TaskDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import ConfirmDialog from '@/common/ConfirmDialog.vue'

export default {
  name: 'TasksTab',
  components: {
    TasksCard,
    PreviewCard,
    TaskDialog,
    DeleteDialog,
    ConfirmDialog
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
    delete_dialog: false,
    confirm_mark_as_complete_dialog: false,
  }),

  computed: {
    ...mapGetters('taskCards', ['total', 'loading']),
    active_task_id: {
      get: function() {
        if(this.task)
          return this.task.id
      },
      set: function(val) {
        console.log(val)
        return val
      }
    },
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
        //if (val === 'My Tasks') this.get_own_tasks()
        //else this.get_all_tasks()
      },
      immediate: true
    }
  },

  created() {
    this.$event.$on('task-row-clicked', task => (this.task = task))
    this.$event.$on('task-card-tab', tab => (this.selected_tab = tab))
    if(this.$route.query.id)
      this.active_task_id = this.$route.query.id
    
    this.$event.$on('task-mark-as-complete', task => this.set_and_mark_complete_task(task))
    this.$event.$on('task-edit', task => this.set_and_edit_task(task))
    this.$event.$on('task-delete', task => this.set_and_delete_task(task))
  },
  beforeDestroy() {
    this.$event.$off('task-row-clicked')
  },

  methods: {
    ...mapMutations('taskCards', ['add_task', 'del_task', 'replace_task']),
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
      //const is_myTask = payload.assigned_ids.includes(this.logged_user.id)
      apiTo.create_new_task(payload).then(({ data }) => {
        this.add_task(data)
        //is_myTask && this.tasks_own.push(data)
        this.$refs.add_task_dialog.clear_and_close()
        this.$event.$emit('open_snackbar', 'New Task added successfully')
        this.$event.$emit('btnloading_off', false)
      })
    },

    edit_task(payload) {
      apiTo.edit_task(this.task.id, payload).then(({ data }) => {
        this.update_task(data, this.task.id, 'all_tasks')
        this.update_task(data, this.task.id, 'tasks_own')
        this.$refs.edit_task_dialog.$refs.dialog.clear_and_close()
        this.$event.$emit('open_snackbar', 'Task updated successfully')
        this.$event.$emit('btnloading_off', false)
      })
    },

    delete_task() {
      apiTo
      .delete_task(this.task.id)
      .then(() => {
        this.remove_task(this.task) 
        this.$event.$emit('btnloading_off', false)
      })
    },

    update_task(new_task, id, target) {
      this.task = new_task
      if (target === 'all_tasks') {
        let indexFound = this.all_tasks.findIndex(task => task.id === id)
        if (~indexFound) { 
          this.all_tasks.splice(indexFound, 1, new_task) 
        }
      } else {
        let indexFound = this.tasks_own.findIndex(task => task.id === id)
        if (~indexFound) { 
          this.tasks_own.splice(indexFound, 1, new_task) 
        }
      }
    },

    remove_task(task) {
      this.del_task(task)
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
      this.$refs.edit_task_dialog.$refs.dialog.clear_and_close()
    },

    open_delete_task_dialog() {
      this.delete_dialog = true
    },

    open_mark_as_complete_task_dialog(){
      this.confirm_mark_as_complete_dialog = true
    },

    confirm_mark_as_complete_task(){
      var payload = { status : 'completed' }
      apiTo.mark_as_complete_task(this.task.id, payload)
        .then(({ data }) => { 
          this.confirm_mark_as_complete_dialog = false
          this.$event.$emit('open_snackbar', 'Task is completed')
          this.update_task(data, this.task.id, 'all_tasks')
          this.update_task(data, this.task.id, 'tasks_own')
          this.replace_task(data)
          this.$event.$emit('btnloading_off', false)
        })
    },

    set_and_delete_task(task) {
      this.task = task
      this.open_delete_task_dialog()
    },
    set_and_edit_task(task) {
      this.task = task
      this.open_edit_task_dialog()
    },
    set_and_mark_complete_task(task) {
      this.task = task
      this.open_mark_as_complete_task_dialog()
    }

  }
}
