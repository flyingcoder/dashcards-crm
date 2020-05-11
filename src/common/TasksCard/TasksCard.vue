<template>
  <div class="tasks-card">
    <div class="tasks__content">
      <dash-card
        title="Tasks"
        :view-more-btn="true"
        class="task__content"
        :dashboard="dashboard"
        @close="$emit('close')"
        @expand="expand"
      >
        <div class="content-wrapper" slot="content">
          <div class="tasks-items">
            <tasks-content />
          </div>
        </div>
        <div slot="footer">
          <v-btn
            text
            class="view__more_btn"
            :loading="btnloading"
            v-if="!noMoreData"
            @click="loadMore"
          >
            VIEW MORE
          </v-btn>
        </div>
      </dash-card>
      <TaskDialog
        ref="add_task_dialog"
        dialog-title="Add Task"
        :id="project_id"
        @save="create_new_task($event)"
        @close="closeAddDialog()"
      ></TaskDialog>
      <TaskDialog
        :id="project_id"
        :task="task"
        ref="edit_task_dialog"
        dialog-title="Edit Task"
        @save="edit_task($event)"
        @close="closeEditDialog()"
      ></TaskDialog>
      <DeleteDialog
        :open-dialog.sync="delete_task_dialog"
        title="Delete Task"
        text-content="Are you sure you want to delete this task?"
        @delete="delete_task()"
      ></DeleteDialog>
      <ConfirmDialog
        :open-dialog.sync="confirm_mark_as_complete_dialog"
        title="Confirmation required!"
        confirm-button-text="Yes"
        text-content="Mark task as completed?"
        @confirm="confirm_mark_as_complete_task()"
      ></ConfirmDialog>
      <TaskViewDialog
        ref="view_task_dialog"
        :task="task"
        @close-task-preview="closeViewDialog"
      ></TaskViewDialog>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import { list_functionality } from '@/services/list-functionality/list-functionality'
import moment from 'moment'
import _cloneDeep from 'lodash/cloneDeep'
import request from '@/services/axios_instance'
import apiTo from '@/modules/ProjectPreview-Tasks/api'

import DashCard from '@/common/DashCard.vue'
import TasksContent from './TasksContent.vue'
import TaskDialog from '@/modules/ProjectPreview-Tasks/components/TaskDialog/TaskDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import ConfirmDialog from '@/common/ConfirmDialog.vue'
import TaskViewDialog from '@/modules/ProjectPreview-Tasks/components/TaskViewDialog/TaskViewDialog.vue'

export default {
  name: 'TasksCard',
  mixin: [list_functionality],
  components: {
    DashCard,
    TasksContent,
    TaskDialog,
    DeleteDialog,
    ConfirmDialog,
    TaskViewDialog
  },

  props: {
    id: [Number, String],
    dashboard: Boolean,
    page: { type: String, default: 'dashboard' }
  },

  beforeDestroy() {
    this.$event.$off('task-row-clicked')
  },

  computed: {
    ...mapGetters('taskCards', [
      'total',
      'loading',
      'see_more_url',
      'btnloading'
    ]),
    active_task_id: {
      get: function() {
        if (this.task) return this.task.id
      },
      set: function(val) {
        return val
      }
    },
    tab_tasks() {
      if (this.selected_tab === 'My Tasks') return this.tasks_own
      return this.all_tasks
    },
    logged_user() {
      return this.$store.getters.user
    },
    project_id() {
      return this.$store.getters['taskCards/id']
    },
    noMoreData() {
      return this.see_more_url ? false : true
    }
  },

  data: () => ({
    tasks_own: [],
    all_tasks: [],
    selected_tab: 'My Tasks',
    task: null,
    add_task_dialog: false,
    edit_task_dialog: false,
    confirm_mark_as_complete_dialog: false,
    delete_task_dialog: false
  }),

  created() {
    if (this.$route.query.id) this.active_task_id = this.$route.query.id
    if (this.id) this.set_id(this.id)

    this.set_page(this.page)

    this.$event.$on('task-row-clicked', task =>
      this.set_and_open_side_preview(task)
    )
    this.$event.$on('task-card-tab', tab => (this.selected_tab = tab))
    this.$event.$on('task-mark-as-complete', task =>
      this.set_and_mark_complete_task(task)
    )
    this.$event.$on('task-add', () => this.set_and_add_task())
    this.$event.$on('task-edit', task => this.set_and_edit_task(task))
    this.$event.$on('task-delete', task => this.set_and_delete_task(task))
    this.$event.$on('task-view', task => this.set_and_view_task(task))
  },

  methods: {
    ...mapActions('taskCards', ['see_more', 'get_tasks']),
    ...mapMutations('taskCards', [
      'set_id',
      'set_page',
      'add_task',
      'del_task',
      'replace_task'
    ]),
    loadMore() {
      this.see_more()
    },
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
      apiTo.create_new_task(payload).then(({ data }) => {
        this.add_task(data)
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
        this.$event.$emit('task-is-updated', data)
      })
    },

    delete_task() {
      apiTo.delete_task(this.task.id).then(() => {
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

    open_add_task_dialog() {
      this.$refs.add_task_dialog.open_dialog()
    },

    open_edit_task_dialog() {
      this.$refs.edit_task_dialog.open_dialog()
    },

    closeEditDialog() {
      this.$refs.edit_task_dialog.$refs.dialog.clear_and_close()
    },

    closeAddDialog() {
      this.$refs.add_task_dialog.$refs.dialog.clear_and_close()
    },

    closeViewDialog() {
      this.$refs.view_task_dialog.$refs.dialog.clear_and_close()
    },

    open_delete_task_dialog() {
      this.delete_task_dialog = true
    },

    open_mark_as_complete_task_dialog() {
      this.confirm_mark_as_complete_dialog = true
    },

    confirm_mark_as_complete_task() {
      var payload = { status: 'completed' }
      apiTo.mark_as_complete_task(this.task.id, payload).then(({ data }) => {
        this.confirm_mark_as_complete_dialog = false
        this.$event.$emit('open_snackbar', 'Task is completed')
        this.update_task(data, this.task.id, 'all_tasks')
        this.update_task(data, this.task.id, 'tasks_own')
        this.replace_task(data)
        this.$event.$emit('btnloading_off', false)
        this.$event.$emit('task-is-updated', data)
      })
    },

    set_and_delete_task(task) {
      this.task = task
      this.set_id(task.project_id)
      this.open_delete_task_dialog()
    },
    set_and_edit_task(task) {
      this.task = task
      this.set_id(task.project_id)
      this.open_edit_task_dialog()
    },
    set_and_mark_complete_task(task) {
      this.task = task
      this.set_id(task.project_id)
      this.open_mark_as_complete_task_dialog()
    },
    set_and_view_task(task) {
      this.task = task
      this.set_id(task.project_id)
      this.$refs.view_task_dialog.open_dialog()
    },
    set_and_add_task() {
      this.set_id(this.id)
      this.open_add_task_dialog()
    },
    set_and_open_side_preview(task) {
      this.task = task
      if (this.page === 'project-preview') {
        this.$event.$emit('show-task-side-preview', task)
      } else {
        this.set_and_view_task(task)
      }
    },
    expand() {
      this.$router.push({ name: 'expanded-tasks' })
    }
  }
}
</script>
