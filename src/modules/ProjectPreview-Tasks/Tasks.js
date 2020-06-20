import request from '@/services/axios_instance'
//Components
import TasksCard from '@/common/TasksCard/TasksCard.vue'
import PreviewCard from './components/TaskTabPreviewCard/TaskTabPreviewCard.vue'
import Avatars from '@/common/Avatars'
import Empty from '@/common/Empty.vue'

export default {
    name: 'TasksTab',
    components: {
        TasksCard,
        PreviewCard,
        Avatars,
        Empty
    },

    props: {
        id: [Number, String]
    },

    data: () => ({
        loading: false,
        active_task_id: null,
        page: 'project-preview',
        searchbox: null,
        search: null,
        showSearchbox: true,
        isFetching: false,
        searchResult: [],
        timeout: null
    }),
    computed: {
        type() {
            return this.$route.params.type || 'project'
        },
        paths() {
            return [
                { text: 'Dashboard', disabled: false, router_name: 'default-content' },
                { text: this.type, disabled: true, router_name: null },
                { text: 'Tasks', disabled: true, router_name: null }
            ]
        }
    },
    mounted() {
        this.$event.$emit('path-change', this.paths)
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
        },
        search(val) {
            if (!val || val.length < 2 || this.isFetching) return
            this.isFetching = true
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                this.fetchEntries(val)
            }, 500)
        },
    },
    methods: {
        fetchEntries(val) {
            this.searchResult = []
            request.get(`api/projects/${this.id}/tasks/search?keyword=${val}`)
                .then(({ data }) => {
                    this.searchResult = data.data
                })
                .finally(() => (this.isFetching = false))
        },
        open_new_task_dialog() {
            this.$event.$emit('task-add')
        },
        showTask(item) {
            this.$event.$emit('show-task-side-preview', item)
        }
    }
}