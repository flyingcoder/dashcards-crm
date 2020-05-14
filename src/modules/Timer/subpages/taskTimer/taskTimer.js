import { list_functionality } from '@/services/list-functionality/list-functionality'
import isEmpty from 'lodash/isEmpty'
//Components
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/Actions.vue'
import TableHeader from '@/common/TableHeader.vue'
import Avatars from '@/common/Avatars'
import PlayPause from '@/modules/Timer/components/PlayPause.vue'
import TaskViewDialog from '@/modules/ProjectPreview-Tasks/components/TaskViewDialog/TaskViewDialog.vue'

export default {
    name: 'TaskTimer',
    mixins: [list_functionality],
    components: {
        VueTable,
        Actions,
        Avatars,
        TableHeader,
        PlayPause,
        TaskViewDialog
    },

    data: () => ({
        paths: [
            { text: 'Dashboard', disabled: false, router_name: 'default-content' },
            { text: 'Timers', disabled: true, router_name: null }
        ],
        sortList: [
            { title: 'Sort by Client' },
            { title: 'Sort by Task' },
            { title: 'Sort by Services' },
            { title: 'Sort by Time' },
            { title: 'Sort by Date' }
        ],
        headers: [
            { text: 'Assigned To', sortable: false, align: 'left', width: 150 },
            { text: 'Task', sortable: false, align: 'left' },
            { text: 'Project', sortable: false, align: 'left' },
            {
                text: 'Time Start',
                sortable: false,
                align: 'left'
            },
            { text: 'Time End', value: 'time_end', sortable: false, align: 'left' },
            {
                text: 'Total Time',
                sortable: false,
                align: 'center'
            }
        ],
        timer_tab: 'task-timers',
        currentTab: 'task-timers',
        task_status: [
            { text: 'All', value: 'all' },
            { text: 'Open', value: 'open' },
            { text: 'Behind', value: 'behind' },
            { text: 'Completed', value: 'completed' }
        ],
        filter_task: 'all',
        task: null
    }),

    created() {
        this.fill_table_via_url(`api/timer/tasks?all=true&filter=${this.filter_task}`)
    },
    computed: {
        loggeduser() {
            return this.$store.getters.user
        }
    },
    methods: {
        load_more() {
            this.load_more_via_url(
                `api/timer/tasks?all=true&filter=${this.filter_task}`
            )
        },
        can_run_timer(item) {
            let find = item.assignee.find(u => u.id === this.loggeduser.id)
            return find ? true : false
        },
        handleChangeTab(event) {
            if (this.timer_tab === 'global-timers')
                this.$router.push({ name: 'globalTimer' })
            if (this.timer_tab === 'alarm') this.$router.push({ name: 'alarm' })
        },
        timerEnd(item) {
            if (item.timer.timer_status === 'ongoing') {
                return 'Ongoing'
            }

            if (item.timer.timer_status === 'pause') {
                return 'Paused'
            }

            return '-'
        },
        filterTask(value) {
            this.filter_task = value
            this.resetPagination()
            this.fill_table_via_url(`api/timer/tasks?&all=true&filter=${value}`)
        },
        closeViewDialog() {
            this.$refs.view_task_dialog.$refs.dialog.clear_and_close()
        },
        set_and_view_task(task) {
            this.task = task
            this.$refs.view_task_dialog.open_dialog()
        },
        minimize() {
            this.$router.push({ name: 'default-content' })
        }
    }
}