import PreviewCard from '@/modules/ProjectPreview-Tasks/components/TaskTabPreviewCard/TaskTabPreviewCard.vue'
import TasksCard from '@/common/TasksCard/TasksCard.vue'
import TaskDialog from '@/modules/ProjectPreview-Tasks/components/TaskDialog/TaskDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import ConfirmDialog from '@/common/ConfirmDialog.vue'

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
        task: {type: Object, default: null}
    },
    created() {
        if (this.task) {
            this.id = this.task.id
        }
    },
    data: () => ({
        dialog: false,
        delete_task_dialog: false,
        confirm_mark_as_complete_dialog: false,
        id: null,
        componentKey: 0
    }),

    methods: {
        forcerender() {
            this.componentKey += 1
        },
        open_dialog() {
            this.dialog = true
        },
        close_dialog() {
            this.dialog = false
        },
        handle_dropdown_action(action) {
            const method = `open_${action}_task_dialog`
            this[method]()
        },
        open_delete_task_dialog() {
            this.$event.$emit('task-delete', this.task)
        },
        open_edit_task_dialog() {
            this.$event.$emit('task-edit', this.task)
        },
        open_mark_as_complete_task_dialog() {
            this.$event.$emit('task-mark-as-complete', this.task)
        }
    }
}
