import { list_functionality } from '@/services/list-functionality/list-functionality'
import isEmpty from 'lodash/isEmpty'
import moment from 'moment'
import { calendar_utils } from '@/services/calendar/calendar_utils'

//Components
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/Actions.vue'
import TableHeader from '@/common/TableHeader.vue'
import DatePicker from '@/common/DatePicker.vue'
import Avatars from '@/common/Avatars.vue'
import CalendarDialog from '@/modules/Calendar/components/CalendarDialog/CalendarDialog.vue'
import EventDialog from '@/modules/Calendar/components/EventDialog/EventDialog.vue'
import EventTypeDialog from '@/modules/Calendar/components/EventTypeDialog/EventTypeDialog.vue'
import EventDetailDialog from '@/modules/Calendar/components/EventDetailDialog/EventDetailDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import Empty from '@/common/Empty.vue'
import ConfirmDialog from '@/common/ConfirmDialog.vue'
import AddParticipantDialog from '@/modules/Calendar/components/AddParticipantDialog/AddParticipantDialog.vue'
import EventCard from '@/modules/Calendar/components/EventCard/EventCard.vue'

export default {
    name: 'Alarm',
    mixins: [list_functionality, calendar_utils],
    components: {
        VueTable,
        Actions,
        TableHeader,
        DatePicker,
        CalendarDialog,
        DeleteDialog,
        ConfirmDialog,
        EventCard,
        EventDialog,
        EventTypeDialog,
        Empty,
        Avatars,
        EventDetailDialog,
        AddParticipantDialog
    },

    data: () => ({
        paths: [
            { text: 'Dashboard', disabled: false, router_name: 'default-content' },
            { text: 'Timers', disabled: true, router_name: null },
            { text: 'Alarm', disabled: true, router_name: null }
        ],
        sortList: [
            { title: 'Sort by Client' },
            { title: 'Sort by Task' },
            { title: 'Sort by Services' },
            { title: 'Sort by Time' },
            { title: 'Sort by Date' }
        ],
        headers: [
            { text: 'Events', sortable: true, align: 'left' },
            { text: 'Participants', sortable: true, align: 'left' },
            { text: 'Type', sortable: true, align: 'left' },
            {
                text: 'Date',
                sortable: true,
                align: 'left'
            },
            { text: 'Time', value: 'time_end', sortable: true, align: 'left' },
            {
                text: 'Action',
                sortable: false,
                align: 'center',
                width: '100px;'
            }
        ],
        timer_tab: 'alarm',
        currentTab: 'alarm',
        filter_date: moment().format('YYYY-MM-DD'),
        today: moment().format('YYYY-MM-DD')
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
            return `/api/events?alarm=true&page=${this.pagination.current}`
        }
    },

    methods: {
        load_more() {
            this.load_more_via_url(this.api)
        },

        handleChangeTab(event) {
            if (this.timer_tab === 'task-timers')
                this.$router.push({ name: 'taskTimer' })
            if (this.timer_tab === 'global-timers')
                this.$router.push({ name: 'globalTimer' })
        },

        is_event_owner(item) {
            return item.properties.creator === this.loggeduser.id
        },

        handleAction() {
            this.$event.$emit('open_snackbar', 'Coming soon, working on it!')
        },
        minimize() {
            this.$router.push({ name: 'default-content' })
        }
    }
}