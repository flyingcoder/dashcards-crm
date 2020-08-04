import request from '@/services/axios_instance'
import makeRequestTo from '@/services/makeRequestTo'
import DeleteDialog from '@/common/DeleteDialog.vue'
import DynamicBox from './components/DynamicBox/DynamicBox.vue'
import MilestoneTabDialog from './components/MilestoneTabDialog/MilestoneTabDialog.vue'
import SelectTemplateDialog from './components/SelectTemplateDialog/SelectTemplateDialog.vue'
import AddTaskDialog from './components/AddTaskDialog/AddTaskDialog.vue'
import _cloneDeep from 'lodash/cloneDeep'

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
        edit_task_dialog: false,
        delete_dialog: false,
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
        edit_task_item: {
            id: null,
            index: null,
            fields: null,
            box_id: null
        },
        box_id_to_add_task: null,
        add_task_start_date: null,
        boxIdInProgress: null
    }),
    computed: {
        type() {
            return this.$route.params.type || 'project'
        },
        paths() {
            return [
                {text: 'Dashboard', disabled: false, route: {name: 'default-content'}},
                { text: this.type, disabled: false, route: {path: `/dashboard/${this.type}/preview/${this.id}`}},
                {text: 'Milestones', disabled: true, route: null}
            ]
        }
    },
    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.get_dynamic_boxes()
    },

    methods: {
        get_dynamic_boxes() {
            this.loading = true
            request
                .get(`api/project/${this.id}/milestone?all=true`)
                .then(({data}) => (this.boxes = data))
                .finally(() => (this.loading = false))
        },

        async add_new_milestone(milestone) {
            this.loading = true
            this.$refs.add_dialog.clear_and_close()
            await request
                .post(`api/project/${this.id}/milestone`, milestone)
                .then(({data}) => {
                    this.boxes.push(data)
                    this.$event.$emit('open_snackbar', 'New Milestone added successfully')
                })
                .finally(() => {
                    this.loading = false
                    this.$event.$emit('btnloading_off', false)
                })
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
            this.$event.$emit('open_snackbar', 'Milestone deleted successfully')
            this.id_to_delete = null
            this.$event.$emit('btnloading_off', false)
        },

        open_edit_dialog(item_to_edit) {
            const {id, title, status, days, started_at, end_at} = item_to_edit
            this.edit_item.id = id
            this.edit_item.fields = {title, status, days, started_at, end_at}
            this.edit_dialog = true
        },

        async update_milestone(updated_fields) {
            this.boxIdInProgress = this.edit_item.id
            this.edit_dialog = false
            await request
                .put(
                    `api/project/${this.id}/milestone/${this.edit_item.id}`,
                    updated_fields
                )
                .then(({data}) => {
                    const index = this.boxes.findIndex(item => item.id === data.id)
                    if (~index) this.boxes.splice(index, 1, data)
                })
                .finally(() => (this.boxIdInProgress = null))
            this.$event.$emit('open_snackbar', 'Milestone updated successfully')
            this.$event.$emit('btnloading_off', false)
            this.edit_item = {
                id: null,
                fields: null
            }
        },

        open_select_template_dialog() {
            // if (this.boxes.length > 0) return
            this.$refs.select_template_dialog.open()
        },

        add_template(templates) {
            this.$store.commit('set_custom_loader', true)
            request.post(`api/projects/${this.id}/milestone-import`, {
                milestone_ids: templates.map(i => i.id)
            })
                .then(({data}) => {
                    this.get_dynamic_boxes()
                })
                .finally(() => {
                    this.$refs.select_template_dialog.cancel()
                    this.$event.$emit('btnloading_off', false)
                    this.$store.commit('set_custom_loader', false)
                })
        },

        edit_task({task, index, box_id}) {
            this.edit_task_dialog = true
            this.edit_task_item = {
                id: task.id,
                index,
                fields: task,
                box_id
            }
        },

        remove_task(box_index, {task_index, task_id}) {
            this.boxIdInProgress = this.boxes[box_index].id
            request
                .delete(`api/task/${task_id}`)
                .then(() => {
                    let boxes = [...this.boxes]
                    boxes[box_index].tasks.splice(task_index, 1)
                    this.boxes = boxes
                    this.$event.$emit('open_snackbar', 'Task deleted successfully')
                })
                .finally(() => {
                    this.boxIdInProgress = null
                    this.$event.$emit('btnloading_off', false)
                })
        },

        update_task(task) {
            this.boxIdInProgress = this.edit_item.box_id
            makeRequestTo
                .edit_milestone_task(this.edit_task_item.id, task, `api/task`)
                .then(res => {
                    const {index, box_id} = this.edit_task_item
                    let boxes = _cloneDeep(this.boxes)
                    const box_index = boxes.findIndex(box => box.id === box_id)
                    if (~box_index) {
                        this.edit_task_dialog = false
                        boxes[box_index].tasks[index] = res.data
                        this.boxes = boxes
                        this.edit_task_item = {
                            id: null,
                            index: null,
                            task: null,
                            box_id: null
                        }
                        this.$event.$emit('open_snackbar', 'Task updated successfully')
                    }
                })
                .finally(() => {
                    this.boxIdInProgress = null
                    this.$event.$emit('btnloading_off', false)
                })
        },

        open_add_task_dialog(box_id) {
            this.box_id_to_add_task = box_id
            this.add_task_start_date = this.boxes.find(
                box => box.id === box_id
            ).started_at
            this.add_task_dialog = true
        },

        add_new_task(payload) {
            this.boxIdInProgress = this.box_id_to_add_task
            this.$refs.add_task_dialog.clear_and_close()
            request
                .post(`api/milestone/${this.box_id_to_add_task}/task`, payload)
                .then(({data}) => {
                    const box_index = this.boxes.findIndex(
                        box => box.id === this.box_id_to_add_task
                    )
                    this.boxes[box_index].tasks.push(data)
                    this.$event.$emit('open_snackbar', 'Task added successfully')
                })
                .finally(() => {
                    this.boxIdInProgress = null
                    this.box_id_to_add_task = null
                    this.$event.$emit('btnloading_off', false)
                })
        }
    }
}