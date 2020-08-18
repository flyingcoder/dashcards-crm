import request from '@/services/axios_instance'
//Components
import TasksCard from '@/common/TasksCard/TasksCard.vue'
import PreviewCard from './components/TaskTabPreviewCard/TaskTabPreviewCard.vue'
import Avatars from '@/common/Avatars'
import TasksContent from "@/common/TasksCard/TasksContent";
import {mapMutations} from "vuex";

export default {
    name: 'TasksTab',
    components: {
        TasksCard,
        PreviewCard,
        Avatars,
        TasksContent
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
                {text: 'Dashboard', disabled: false, route: {name: 'default-content'}},
                { text: this.type, disabled: false, route: {path: `/dashboard/${this.type}/preview/${this.id}`}},
                {text: 'Tasks', disabled: true, route: null}
            ]
        },
    },
    beforeRouteUpdate (to, from, next) {
        this.active_task_id = to.params.task_id
        //next()
    },
    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.$event.$on('show-task-side-preview', task => {
            this.active_task_id = task.id
        })
        this.set_page(this.page)
        this.set_id(this.id)
    },
    provide() {
        const properties = {}
        Object.defineProperty(properties, 'loading', {
            get: () => this.loading
        })
        return {properties, bodyMaxHeight: 'auto'}
    },

    watch: {
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
        ...mapMutations('taskCards', ['set_page', 'set_id']),
        fetchEntries(val) {
            this.searchResult = []
            request.get(`api/projects/${this.id}/tasks/search?keyword=${val}`)
                .then(({data}) => {
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