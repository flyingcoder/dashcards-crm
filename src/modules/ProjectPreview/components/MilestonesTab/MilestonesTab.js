import request from '@/services/axios_instance'
import DeleteDialog from '@/common/DeleteDialog.vue'
import DynamicBox from './DynamicBox/DynamicBox.vue'
import MilestoneTabDialog from './MilestoneTabDialog/MilestoneTabDialog.vue'
import SelectTemplateDialog from './SelectTemplateDialog.vue'
import AddTaskDialog from './AddTaskDialog/AddTaskDialog.vue'

export default {
  name: 'MilestonesTab',
  components: {
    DynamicBox,
    MilestoneTabDialog,
    DeleteDialog,
    SelectTemplateDialog,
    AddTaskDialog
  },

  props: {
    id: [Number, String]
  },

  data: () => ({
    add_dialog: false,
    edit_dialog: false,
    delete_dialog: false,
    select_template_dialog: false,
    add_task_dialog: false,
    boxes: [],
    loading: false,
    direction: 'top',
    is_open_speed_dial: false,
    id_to_delete: null,
    edit_item: {
      id: null,
      fields: null
    },
    box_id_to_add_task: null
  }),

  created() {
    this.$router.replace({
      name: 'project_preview',
      query: { tab: 'Milestones' }
    })
    this.get_dynamic_boxes()
  },

  methods: {
    get_dynamic_boxes() {
      this.loading = true
      request
        .get(`api/project/${this.id}/milestone`)
        .then(({ data }) => (this.boxes = data.data))
        .finally(() => (this.loading = false))
    },

    async add_new_milestone(milestone) {
      this.loading = true
      this.$refs.add_dialog.clear_and_close()
      await request
        .post(`api/project/${this.id}/milestone`, milestone)
        .then(({ data }) => this.boxes.push(data))
        .finally(() => (this.loading = false))
      this.$event.$emit(
        'open_snackbar',
        'New Milestone added successfully',
        'red',
        'success',
        2000
      )
    },

    open_delete_confirmation(id) {
      this.id_to_delete = id
      this.delete_dialog = true
    },

    async delete_milestone() {
      this.loading = true
      this.delete_dialog = false
      await request
        .delete(`api/project/${this.id}/milestone/${this.id_to_delete}`)
        .then(
          () =>
            (this.boxes = this.boxes.filter(
              item => item.id !== this.id_to_delete
            ))
        )
        .finally(() => (this.loading = false))
      this.$event.$emit(
        'open_snackbar',
        'Milestone deleted successfully',
        'red',
        'success',
        2000
      )
      this.id_to_delete = null
    },

    open_edit_dialog(item_to_edit) {
      const { id, title, status, days, started_at, end_at } = item_to_edit
      this.edit_item.id = id
      this.edit_item.fields = { title, status, days, started_at, end_at }
      this.edit_dialog = true
    },

    async update_milestone(updated_fields) {
      this.loading = true
      this.edit_dialog = false
      await request
        .put(
          `api/project/${this.id}/milestone/${this.edit_item.id}`,
          updated_fields
        )
        .then(({ data }) => {
          const index = this.boxes.findIndex(item => item.id === data.id)
          if (~index) this.boxes.splice(index, 1, data)
        })
        .finally(() => (this.loading = false))
      this.$event.$emit(
        'open_snackbar',
        'Milestone updated successfully',
        'red',
        'success',
        2000
      )
      this.edit_item = {
        id: null,
        fields: null
      }
    },

    open_select_template_dialog() {
      if (this.boxes.length > 0) return
      this.select_template_dialog = true
    },

    async add_template(template) {
      this.select_template_dialog = false
      this.loading = true
      await request.post(`api/projects/${this.id}/milestone-import`, {
        template_id: template
      })
      this.get_dynamic_boxes()
    },

    remove_task(box_index, { task_index, task_id }) {
      this.loading = true
      request
        .delete(`api/task/${task_id}`)
        .then(() => {
          let boxes = [...this.boxes]
          boxes[box_index].tasks.splice(task_index, 1)
          this.boxes = boxes
          this.$event.$emit(
            'open_snackbar',
            'Task deleted successfully',
            'red',
            'success',
            2000
          )
        })
        .finally(() => (this.loading = false))
    },

    open_add_task_dialog(box_id) {
      this.box_id_to_add_task = box_id
      this.add_task_dialog = true
    },

    add_new_task(payload) {
      this.loading = true
      this.$refs.add_task_dialog.clear_and_close()
      request
        .post(`api/milestone/${this.box_id_to_add_task}/task`, payload)
        .then(({ data }) => {
          const box_index = this.boxes.findIndex(
            box => box.id === this.box_id_to_add_task
          )
          this.boxes[box_index].tasks.push(data)
          this.$event.$emit(
            'open_snackbar',
            'Task added successfully',
            'red',
            'success',
            2000
          )
        })
        .finally(() => {
          this.loading = false
          this.box_id_to_add_task = null
        })
    }
  }
}
