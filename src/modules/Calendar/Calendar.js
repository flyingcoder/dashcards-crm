import moment from 'moment'
import { list_functionality } from '@/services/list-functionality/list-functionality'
import { calendar_utils } from '@/services/calendar/calendar_utils'
import * as apiTo from '@/modules/Calendar/api'
import _cloneDeep from 'lodash/cloneDeep'
import request from '@/services/axios_instance'
//Components
import TableHeader from '@/common/TableHeader.vue'
import CalendarDialog from './components/CalendarDialog/CalendarDialog.vue'
import EventCard from './components/EventCard/EventCard.vue'
import EventDialog from './components/EventDialog/EventDialog.vue'
import EventTypeDialog from './components/EventTypeDialog/EventTypeDialog.vue'
import EventDetailDialog from './components/EventDetailDialog/EventDetailDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import Empty from '@/common/Empty.vue'
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/Actions.vue'
import Avatars from '@/common/Avatars.vue'
import ConfirmDialog from '@/common/ConfirmDialog.vue'
import AddParticipantDialog from './components/AddParticipantDialog/AddParticipantDialog.vue'

export default {
    name: 'Calendar',
    mixins: [list_functionality, calendar_utils],
    components: {
        TableHeader,
        CalendarDialog,
        DeleteDialog,
        ConfirmDialog,
        EventCard,
        EventDialog,
        EventTypeDialog,
        Empty,
        VueTable,
        Actions,
        Avatars,
        EventDetailDialog,
        AddParticipantDialog
    },
    props: {
        hasBreadCrumbs: { type: Boolean, default: true }
    },
    data: () => ({
        paths: [
            { text: 'Dashboard', disabled: false, router_name: 'default-content' },
            { text: 'Calendar', disabled: true, router_name: null }
        ],
        headers: [{
                text: 'Events',
                sortable: false,
                align: 'left'
            },
            {
                text: 'Date & Time',
                sortable: false,
                align: 'left',
                width: '171px'
            },
            {
                text: 'Members',
                sortable: false,
                align: 'left'
            },
            {
                text: 'Action',
                value: 'actions',
                sortable: false,
                align: 'center',
                width: '140px'
            }
        ],
        table_config: {
            add_message: 'New event added successfully!',
            update_message: 'Events updated successfully!',
            delete_message: 'Events deleted successfully!',
            refresh_table_message: 'Table refreshed',
            refresh_table_api_name: 'paginate_clients_table'
        }
    }),
    mounted() {
        apiTo.myCalendar().then(({ data }) => {
            this.calendar = data.calendar
            this.attributes = data.attributes
        })
        this.load_events()
    }
}