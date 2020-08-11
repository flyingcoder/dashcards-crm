import PreviewCard from '@/modules/ProjectPreview-Tasks/components/TaskTabPreviewCard/TaskTabPreviewCard.vue'

export default {
    name: 'TaskViewDialog',
    components: {
        PreviewCard
    },
    props: {
        task: Object
    },
    data: () => ({
        dialog: false,
        delete_task_dialog: false,
        confirm_mark_as_complete_dialog: false,
        componentKey: 0
    }),
    watch: {
        task: {
            handler() {
              this.force_render()
            },
            immediate: true,
            deep: true
        }
    },
    methods: {
        force_render() {
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
        },
        open_mark_as_urgent_task_dialog() {
            this.$event.$emit('task-mark-as-urgent', this.task)
        }
    }
}
