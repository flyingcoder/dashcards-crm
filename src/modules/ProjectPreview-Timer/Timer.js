import { list_functionality } from '@/services/list-functionality/list-functionality'
import request from '@/services/axios_instance'
//Components
import VueTable from '@/common/VueTable/VueTable.vue'
import Avatars from '@/common/Avatars.vue'
import PlayPause from '@/modules/Timer/components/PlayPause.vue'
import TaskViewDialog from '@/modules/ProjectPreview-Tasks/components/TaskViewDialog/TaskViewDialog.vue'

export default {
    name: 'TimerTab',
    mixins: [list_functionality],
    components: {
        VueTable,
        Avatars,
        PlayPause,
        TaskViewDialog
    },

    props: {
        id: [Number, String]
    },

    data: () => ({
        sortList: [
            { title: 'Sort by Client' },
            { title: 'Sort by Task' },
            { title: 'Sort by Services' },
            { title: 'Sort by Time' },
            { title: 'Sort by Date' }
        ],
        headers: [
            { text: 'Assigned To', sortable: false , width: 150 },
            { text: 'Task', sortable: false },
            { text: 'Milestone', sortable: false },
            { text: 'Status', sortable: false, width: 100},
            { text: 'Total Time', sortable: false , width: 200}
        ],
        task: null,
    }),

    computed: {
        dynamic_api() {
            return `api/projects/${this.id}/project-tasks-timers`
        },
        client() {
            return this.id
        },
        type(){
            return this.$route.params.type || 'project'
        },
        paths() {
            return [
                { text: 'Dashboard', disabled: false, route: {name: 'default-content'}},
                { text: this.type, disabled: false, route: {path: `/dashboard/${this.type}/preview/${this.id}`}},
                { text: 'Timers', disabled: true, route: null }
            ]
        },
        tableTitle(){
            return this.type === 'project' ? `Project Timers` : 'Campaign Timers'
        }
    },

    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.get_timers()
    },

    methods: {
        view_task(id) {
            this.$router.push(`/dashboard/${this.type}/preview/${this.id}/tasks?id=` + id)
        },
        get_timers() {
            this.fill_table_via_url(this.dynamic_api)
        },
        get_more_timers() {
            this.load_more_via_url(this.dynamic_api)
        },
        closeViewDialog() {
            this.$refs.view_task_dialog.$refs.dialog.clear_and_close()
        },
        set_and_view_task(task) {
            this.task = task
            this.$refs.view_task_dialog.open_dialog()
        },
    }
}