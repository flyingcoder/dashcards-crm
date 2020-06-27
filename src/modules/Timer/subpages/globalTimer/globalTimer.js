import { list_functionality } from '@/services/list-functionality/list-functionality'
import isEmpty from 'lodash/isEmpty'
import moment from 'moment'
//Components
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/Actions.vue'
import TableHeader from '@/common/TableHeader.vue'
import DatePicker from '@/common/DatePicker.vue'
import PlayStop from '@/modules/Timer/components/PlayStop.vue'

export default {
    name: 'GlobalTimer',
    mixins: [list_functionality],
    components: {
        VueTable,
        Actions,
        TableHeader,
        DatePicker,
        PlayStop
    },

    data: () => ({
        paths: [
            { text: 'Dashboard', disabled: false, router_name: 'default-content' },
            { text: 'Timer', disabled: true, router_name: null },
            { text: 'Global', disabled: true, router_name: null }
        ],
        sortList: [
            { title: 'Sort by Client' },
            { title: 'Sort by Task' },
            { title: 'Sort by Services' },
            { title: 'Sort by Time' },
            { title: 'Sort by Date' }
        ],
        headers: [
            { text: 'Member', sortable: true, align: 'left' },
            { text: 'Position', sortable: true, align: 'left' },
            {
                text: 'Time Start',
                sortable: true,
                align: 'left'
            },
            { text: 'Time End', value: 'time_end', sortable: true, align: 'left' },
            {
                text: 'Total Time',
                sortable: true,
                align: 'center'
            }
        ],
        timer_tab: 'global-timers',
        currentTab: 'global-timers',
        filter_date: moment().tz('America/Toronto').format('YYYY-MM-DD'),
        today: moment().tz('America/Toronto').format('YYYY-MM-DD')
    }),

    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.fill_table_via_url(this.api)
    },

    computed: {
        loggeduser() {
            return this.$store.getters.user
        },
        dateSelected() {
            return moment(this.filter_date).format('YYYY-MM-DD')
        },
        api() {
            return `api/timer/global?all=true&date=${this.dateSelected}`
        }
    },

    methods: {
        load_more() {
            this.load_more_via_url(this.api)
        },
        can_run_timer(item) {
            if (this.loggeduser.is_admin) {
                return true
            }

            return item.id === this.loggeduser.id
        },
        handleChangeTab(event) {
            if (this.timer_tab === 'task-timers')
                this.$router.push({ name: 'taskTimer' })
            if (this.timer_tab === 'alarm') this.$router.push({ name: 'alarm' })
        },
        handleChangeDate(value) {
            this.resetPagination()
            setTimeout(() => {
                this.fill_table_via_url(this.api)
            }, 1)
        },
        timerEnd(item) {
            if (item.timer.timer_status === 'open') {
                return 'Ongoing'
            }
            if (item.timer.timer_status === 'close') {
                return moment(item.timer.timer_stopped).format('MMM D YYYY HH:mm:ss')
            }
            return '-'
        },
        handleItemUpdated(item) {

        },
        minimize() {
            this.$router.push({ name: 'default-content' })
        }
    }
}