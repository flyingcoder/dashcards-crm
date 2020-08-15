import { list_functionality } from '@/services/list-functionality/list-functionality'
import { calendar_utils } from '@/services/calendar/calendar_utils'
//Components
import TableHeader from '@/common/TableHeader.vue'
import CalendarDialog from './components/CalendarDialog/CalendarDialog.vue'
import EventCard from './components/EventCard/EventCard.vue'
import EventDialogV2 from "./components/EventDialogV2/EventDialogV2";
import EventTypeDialog from './components/EventTypeDialog/EventTypeDialog.vue'
import EventDetailDialog from './components/EventDetailDialog/EventDetailDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/ActionDropdown.vue'
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
        EventDialogV2,
        EventTypeDialog,
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
            { text: 'Dashboard', disabled: false, route: {name: 'default-content'}},
            { text: 'Calendar', disabled: true, route: null }
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
                width: 190
            },
            {
                text: 'Members',
                sortable: false,
                align: 'center',
                width: 150
            },
            {
                text: 'Action',
                value: 'action',
                sortable: false,
                align: 'center',
                width: 20
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
        this.view = this.getPreferredView()
        this.load_events()
        this.$event.$emit('path-change', this.paths)
    }
}