import apiTo from '@/modules/ProjectPreview-Tasks/api'
import { mapMutations, mapActions, mapGetters } from 'vuex'
import _cloneDeep from 'lodash/cloneDeep'

import PreviewCard    from '@/modules/ProjectPreview-Tasks/components/TaskTabPreviewCard/TaskTabPreviewCard.vue'
import TasksCard      from '@/common/TasksCard/TasksCard.vue'
import TaskDialog     from '@/modules/ProjectPreview-Tasks/components/TaskDialog/TaskDialog.vue'
import DeleteDialog   from '@/common/DeleteDialog.vue'
import ConfirmDialog  from '@/common/ConfirmDialog.vue'

export default {
  name: 'TaskViewDialog',
  components: {
    PreviewCard,
    TasksCard,
    TaskDialog,
    DeleteDialog,
    ConfirmDialog
  },
  props: {
    task: { type: Object, default : null },
    dialog : { type: Boolean, default : false }
  },
  created(){
    if (this.task) {
      this.id = this.task.id
    }
  },
  data: () => ({
    delete_dialog: false,
    confirm_mark_as_complete_dialog: false,
    id: null,
    componentKey: 0
  }),
  computed: {
    active_task : {
      get() { return this.task },
      set(value) { return value  }
    }
  },
  methods: {
    forcerender(){
      this.componentKey += 1
    },
    close() {
      this.dialog  = false
      this.$emit('update:dialog', false)
    },
    handle_dropdown_action(action) {
      const method = `open_${action}_task_dialog`
      this[method]()
    },
    open_delete_task_dialog() {
      this.$refs.delete_task_dialog.showDialog()
    },
    open_edit_task_dialog() {
      this.$refs.edit_task_dialog.open_dialog()
    },
    open_mark_as_complete_task_dialog() {
      this.$refs.confirm_mark_as_complete_dialog.showDialog()
    },
    edit_task_save(payload){
      apiTo.edit_task(this.task.id, payload).then(({ data }) => {
        this.active_task = data
        this.$refs.edit_task_dialog.$refs.dialog.clear_and_close()
        this.$event.$emit('open_snackbar', 'Task updated successfully')
        this.$event.$emit('btnloading_off', false)
        this.forcerender()
      })
    },
    confirmed_delete_task(){
      apiTo
      .delete_task(this.task.id)
      .then(() => {
        this.$event.$emit('task_deleted', this.task)
        this.$event.$emit('btnloading_off', false)
        this.$refs.delete_task_dialog.closeDialog()
        this.$emit('close-task-preview', true)
      })
    },
    closeEditDialog(){
      this.$refs.edit_task_dialog.$refs.dialog.clear_and_close()
    },
    confirm_mark_as_complete_task(){
      var payload = { status : 'completed' }
      apiTo.mark_as_complete_task(this.task.id, payload)
        .then(({ data }) => { 
          this.active_task = data
          this.$refs.confirm_mark_as_complete_dialog.closeDialog() 
          this.$event.$emit('open_snackbar', 'Task is completed')
          this.$event.$emit('btnloading_off', false)
          this.$event.$emit('task_completed', data)
          this.forcerender()
        })
    }
  }
}