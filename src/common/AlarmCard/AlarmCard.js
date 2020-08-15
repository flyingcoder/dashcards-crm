import {mapGetters} from 'vuex'
import request from '@/services/axios_instance'
import moment from 'moment'
import {calendar_utils} from '@/services/calendar/calendar_utils'
import {list_functionality} from '@/services/list-functionality/list-functionality'
import * as apiTo from '@/modules/Calendar/api'

import DashCard from '@/common/DashCard.vue'
import Avatars from '@/common/Avatars.vue'
import EventDialogV2 from '@/modules/Calendar/components/EventDialogV2/EventDialogV2.vue'
import EventTypeDialog from '@/modules/Calendar/components/EventTypeDialog/EventTypeDialog.vue'
import EventDetailDialog from '@/modules/Calendar/components/EventDetailDialog/EventDetailDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import ConfirmDialog from '@/common/ConfirmDialog.vue'
import AddParticipantDialog from '@/modules/Calendar/components/AddParticipantDialog/AddParticipantDialog.vue'

export default {
    name: 'AlarmCard',
    mixins: [list_functionality, calendar_utils],
    components: {
        DashCard,
        Avatars,
        DeleteDialog,
        ConfirmDialog,
        EventDialogV2,
        EventTypeDialog,
        EventDetailDialog,
        AddParticipantDialog
    },

    props: {
        id: [Number, String],
        viewMoreLink: Object,
        dashboard: Boolean
    },

    data() {
        return {
            loading: true,
            items: [],
            timeNow: new Date().toLocaleTimeString(),
            dayNow: moment().format('ddd'),
            dateNow: moment().format('LL')
        }
    },
    created() {
        this.getTimers();
        apiTo.myCalendar()
            .then(({data}) => {
            this.calendar = data.calendar
        });
        setInterval(() => {
            this.timeNow = new Date().toLocaleTimeString()
        }, 1000)

        this.$event.$on('add-participant', (event) => {
            this.open_add_participant_dialog(event)
        })
        this.$event.$on('delete-event', (event) => {
            this.open_delete_dialog(event)
        })
        this.$event.$on('edit-event', (event) => {
            this.open_add_event_dialog(true, event)
        })
        this.$event.$on('add-event', (event) => {
            this.open_add_event_dialog(false, null)
        })
    },
    computed: {
        ...mapGetters(['user'])
    },
    filters: {
        format(value, format) {
            const forms = format || 'MMM D YYYY | HH:mm A';
            return moment(value).format(forms)
        }
    },
    methods: {
        getTimers() {
            this.loading = true;
            request
                .get(`/api/events?alarm=true&page=${this.pagination.current}`)
                .then(response => {
                    this.items = response.data.data;
                    this.pagination.current = response.data.current_page;
                    this.pagination.total = response.data.last_page
                })
                .finally(() => (this.loading = false))
        },
        onPageChange() {
            this.getTimers()
        },
        is_owner(item) {
            return item.properties.creator === this.user.id
        },
        expand() {
            this.$router.push({  name: 'alarm'  })
        }
    }
}