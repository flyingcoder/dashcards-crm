//Components
import TasksCard from '@/common/TasksCard/TasksCard.vue'
import PreviewCard from './components/TaskTabPreviewCard/TaskTabPreviewCard.vue'

export default {
    name: 'TasksTab',
    components: {
        TasksCard,
        PreviewCard
    },

    props: {
        id: [Number, String]
    },

    data: () => ({
        loading: false,
        active_task_id: null,
        page: 'project-preview'
    }),

    created() {
        this.$event.$on('show-task-side-preview', task => {
            this.active_task_id = task.id
        })
    },

    provide() {
        const properties = {}
        Object.defineProperty(properties, 'loading', {
            get: () => this.loading
        })
        return { properties, bodyMaxHeight: 'auto' }
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
    methods: {
        open_new_task_dialog() {
            this.$event.$emit('task-add')
        }
    }
}