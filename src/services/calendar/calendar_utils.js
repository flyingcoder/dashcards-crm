import moment from 'moment'
import {list_functionality} from '@/services/list-functionality/list-functionality'
import * as apiTo from '@/modules/Calendar/api'
import request from '@/services/axios_instance'

export const calendar_utils = {
    mixin: [list_functionality],

    data: () => ({
        icon: 'M29 26l32 0c1,0 1,1 2,1 1,0 2,1 3,2 0,0 1,1 1,2 1,1 1,2 1,3 0,1 0,1 -1,2 0,1 -1,2 -1,3l0 0c-1,0 -2,1 -3,1 -1,1 -1,1 -2,1l-32 0c-1,0 -2,0 -3,0 -1,0 -1,0 -2,1 -1,0 -2,1 -3,1 -1,1 -1,1 -2,2l0 0c-1,1 -1,1 -2,2 0,1 -1,2 -1,3 -1,1 -1,1 -1,2 0,1 0,2 0,3l0 115c0,1 0,2 0,3 0,1 0,1 1,2 0,1 1,2 1,3 1,1 1,1 2,2 1,1 1,1 2,2 1,0 2,1 3,1 1,1 1,1 2,1 1,0 2,0 3,0l80 0 0 0c1,0 1,1 2,1 1,0 2,1 2,1l0 0c1,1 1,2 2,3 0,1 0,1 0,2 0,1 0,2 0,3 -1,1 -1,2 -2,2l0 1c-1,0 -1,1 -2,1 -1,0 -2,1 -3,1l-79 0c-2,0 -4,-1 -5,-1 -2,0 -4,-1 -6,-2 -1,0 -3,-1 -5,-2 -1,-1 -3,-3 -4,-4 -1,-1 -3,-3 -4,-4 -1,-2 -2,-3 -2,-5 -1,-2 -2,-4 -2,-6 0,-1 -1,-3 -1,-5l0 -115c0,-2 1,-4 1,-5 0,-2 1,-4 2,-6 0,-2 1,-3 2,-5 1,-1 3,-3 4,-4 1,-1 3,-3 4,-4 2,-1 4,-2 5,-2 2,-1 4,-2 6,-2 1,0 3,-1 5,-1zm42 159l7 0 0 0 14 0c-7,0 -14,0 -21,0zm125 -18c1,1 2,2 3,4 0,1 1,3 1,4 0,3 -2,6 -4,8 -2,2 -4,3 -7,3l-18 22c-1,1 -3,2 -5,2 -1,0 -3,0 -5,-1 -1,-2 -2,-3 -2,-5 0,-2 0,-4 1,-5l18 -22 0 0c0,-1 0,-1 0,-2 0,-1 0,-3 1,-5 1,-1 2,-3 3,-4l0 -23c0,-2 1,-3 2,-5 1,-1 3,-2 5,-2 2,0 4,1 5,2 1,2 2,3 2,5l0 24zm-9 -54c8,0 17,2 24,5 8,3 14,8 20,14 6,5 11,12 14,20 3,7 5,15 5,24 0,8 -2,16 -5,24 -3,7 -8,14 -14,20 -6,6 -12,10 -20,14 -7,3 -16,4 -24,4 -8,0 -16,-1 -24,-4 -8,-4 -14,-8 -20,-14 -6,-6 -11,-13 -14,-20 -3,-8 -4,-16 -4,-24 0,-9 1,-17 4,-24 3,-8 8,-15 14,-20 6,-6 12,-11 20,-14 8,-3 16,-5 24,-5zm34 29c-9,-9 -21,-14 -34,-14 -7,0 -13,1 -18,3 -6,3 -12,6 -16,11 -5,4 -8,9 -11,15 -2,6 -3,12 -3,19 0,6 1,13 3,18 3,6 6,12 11,16 4,5 10,8 16,11 5,2 11,3 18,3 7,0 13,-1 19,-3 5,-3 11,-6 15,-11 5,-4 8,-10 11,-16 2,-5 3,-12 3,-18 0,-7 -1,-13 -3,-19 -3,-6 -6,-11 -11,-15zm5 -41c0,0 0,1 0,2 -1,1 -1,2 -2,3l0 0c-1,0 -1,1 -2,1 -1,0 -2,1 -3,1 -1,0 -2,-1 -3,-1 -1,0 -1,-1 -2,-1l0 -1c-1,0 -1,-1 -2,-2 0,-1 0,-2 0,-2l0 -46c0,-1 0,-2 0,-3 -1,-1 -1,-1 -1,-2 -1,-1 -1,-2 -2,-3 0,-1 -1,-1 -1,-2 -1,-1 -2,-1 -3,-2 0,0 -1,-1 -2,-1 -1,-1 -2,-1 -3,-1 -1,0 -2,0 -3,0 -2,0 -6,0 -9,0 -8,0 -16,0 -21,0 -1,0 -2,-1 -3,-1 -1,0 -1,-1 -2,-1 -1,-1 -1,-2 -1,-3 -1,-1 -1,-1 -1,-2 0,-1 0,-2 1,-3 0,-1 0,-2 1,-2l0 0c1,-1 1,-2 2,-2 1,0 2,0 3,-1 5,0 14,0 21,0 3,0 7,0 9,0 2,0 4,1 6,1 2,0 4,1 5,2 2,0 4,1 5,2 2,1 3,3 5,4 1,1 2,3 3,4 1,2 2,3 3,5 1,2 1,4 2,6 0,1 0,3 0,5l0 46zm-187 -11c-1,0 -1,0 -2,-1 -1,0 -2,0 -3,-1 0,-1 -1,-1 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-3 0,-1 1,-1 1,-2l0 0c1,-1 2,-1 3,-2 1,0 1,0 2,0l79 0c1,0 2,0 3,0 1,1 2,1 3,2l0 0c0,1 1,1 1,2 0,1 1,2 1,3 0,1 -1,2 -1,3 0,1 -1,1 -1,2l-1 0c0,1 -1,1 -2,2 -1,0 -2,0 -3,0l-79 0zm0 66c-1,0 -1,0 -2,0 -1,-1 -2,-1 -3,-2l0 0c0,-1 -1,-2 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-3 0,-1 1,-1 1,-2 1,-1 2,-1 3,-2 1,0 1,0 2,0l22 0c1,0 2,0 3,0 1,1 1,1 2,2l0 0c1,1 1,1 2,2 0,1 0,2 0,3 0,1 0,2 0,3 -1,1 -1,1 -2,2l0 0c-1,1 -1,1 -2,2 -1,0 -2,0 -3,0l-22 0zm0 -34c-1,0 -1,0 -2,0 -1,-1 -2,-1 -3,-2l0 0c0,0 -1,-1 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-2 0,-1 1,-2 1,-3l0 0c1,0 2,-1 3,-1 1,-1 1,-1 2,-1l49 0c1,0 2,0 3,1 1,0 1,1 2,1 1,1 1,2 2,3 0,0 0,1 0,2 0,1 0,2 0,3 -1,1 -1,2 -2,2 -1,1 -1,1 -2,2 -1,0 -2,0 -3,0l-49 0zm115 -74c0,1 -1,2 -1,3 0,1 -1,2 -1,2l-1 0c0,1 -1,2 -2,2 -1,0 -2,1 -3,1 0,0 -1,-1 -2,-1 -1,0 -2,-1 -3,-2l0 0c0,0 -1,-1 -1,-2 0,-1 -1,-2 -1,-3l0 -29c0,-1 1,-2 1,-3 0,-1 1,-2 1,-2 1,-1 2,-1 3,-2 1,0 2,0 2,0 1,0 2,0 3,0 1,1 2,1 3,2l0 0c0,0 1,1 1,2 0,1 1,2 1,3l0 29zm-67 0c0,1 0,2 -1,3 0,1 -1,2 -1,2l0 0c-1,1 -2,2 -3,2 0,0 -1,1 -2,1 -1,0 -2,-1 -3,-1 -1,0 -2,-1 -2,-2l0 0c-1,0 -1,-1 -2,-2 0,-1 0,-2 0,-3l0 -29c0,-1 0,-2 0,-3 1,-1 1,-2 2,-2l0 0c0,-1 1,-1 2,-2 1,0 2,0 3,0 1,0 2,0 3,0 0,1 1,1 2,2 0,0 1,1 1,2 1,1 1,2 1,3l0 29zm10 -7c-1,0 -2,0 -2,-1 -1,0 -2,-1 -3,-1 0,-1 -1,-2 -1,-3 -1,-1 -1,-1 -1,-2 0,-1 0,-2 1,-3 0,-1 1,-2 1,-2l0 -1c1,0 2,-1 3,-1 0,0 1,-1 2,-1l30 0c1,0 2,1 3,1 1,0 1,1 2,2l0 0c1,0 1,1 2,2 0,1 0,2 0,3 0,1 0,1 0,2 -1,1 -1,2 -2,3 -1,0 -1,1 -2,1 -1,1 -2,1 -3,1l-30 0z',
        isEventEditDialog: false,
        open_event_dialog: false,
        event_dialog_title: 'Add New Event',
        eventToEdit: null,
        selected_date: 'All Events',
        today: moment().format('MMMM D, YYYY'),
        start: moment().format('YYYY-MM-DD'),
        type: 'month',
        active_tab: 'all',
        attributes: [],
        events: [],
        view: 'grid',
        filters: {},
        activeEvent: null,
        calendar: null,
        next_page_url: null
    }),
    created() {
        this.load_calendar()

        this.$event.$on('add-participant', (event) => {
            this.open_add_participant_dialog(event)
        })
        this.$event.$on('delete-event', (event) => {
            this.open_delete_dialog(event)
        })
        this.$event.$on('edit-event', (event) => {
            this.open_add_event_dialog(true, event)
        })
        this.$event.$on('add-event', () => {
            this.open_add_event_dialog(false, null)
        })
    },
    computed: {
        date() {
            return moment(this.start, 'YYYY-MM-DD').format('MMMM YYYY')
        },
        logged_user() {
            return this.$store.getters.user
        }
    },
    watch: {
        next_page_url: {
            handler(val) {
                this.noMoreData = !val
            },
            immediate: true
        }
    },
    methods: {
        load_calendar() {
            apiTo.myCalendar()
                .then(({data}) => {
                    this.calendar = data.calendar
                    this.attributes = data.attributes
                })
        },
        load_attributes() {
            apiTo.myCalendarAttributes().then(({data}) => {
                this.attributes = data
            })
        },
        load_events() {
            this.loading = true
            let payload = Object.assign({page: this.pagination.current, per_page: 15},
                this.filters
            );
            request
                .get(`api/events`, {params: payload})
                .then(({data}) => {
                    this.items_response = data
                    this.items = data.data
                    this.next_page_url = data.next_page_url
                })
                .finally(() => {
                    this.loading = false
                    this.$event.$emit('btnloading_off', false)
                })
        },
        load_more_events() {
            this.loading = true
            request
                .get(`${this.next_page_url}`)
                .then(({data}) => {
                    this.items_response = data.data
                    this.items.push(...data.data)
                    this.next_page_url = data.next_page_url
                })
                .finally(() => {
                    this.loading = false
                    this.scrollToBottom()
                    this.$event.$emit('btnloading_off', false)
                })
        },
        open_add_event_dialog(is_edit, item) {
            this.isEventEditDialog = is_edit
            this.event_dialog_title = is_edit ? 'Edit Event' : 'Add New Event'
            this.open_event_dialog = true
            if (is_edit)
                this.eventToEdit = item
        },
        open_add_event_type_dialog() {
            this.$refs.event_type_dialog.openDialog()
        },

        insert_new_event(item) {
            this.items.unshift(item)
            this.load_attributes()
        },

        updated_event(item) {
            let inx = this.items.findIndex(iii => iii.id === item.id)
            if (~inx) {
                this.items.splice(inx, 1, item)
                this.load_attributes()
            }
        },
        insert_new_event_type(items) {
            items.forEach(item => {
                this.calendar.event_types.push(item)
            })
        },
        dayclick(event) {
            this.filters = {
                date: moment(event.date).format('YYYY-MM-DD'),
                page: 1
            }
            this.selected_date = moment(event.date).format('MMMM D, YYYY')
            this.load_events()
        },
        tabFilter(event) {
            if (event === 'today') {
                this.filters = {
                    date: moment().format('YYYY-MM-DD'),
                    page: 1
                }
                this.selected_date = moment().format('MMMM D, YYYY')
            } else if (event === 'all') {
                this.filters = {}
                this.selected_date = 'All Events'
            }
            this.load_events()
        },
        datetimedisplay(event) {
            let s = moment(event.start);
            let e = moment(event.end);
            if (event.all_day) {
                return `${s.format('MMM D YYYY')}`
            }
            let x = moment(event.start).format('MMM D YYYY');
            let y = moment(event.end).format('MMM D YYYY');

            let start_time = moment(event.start).format('HH:mm A');
            if (x === y) {
                let time = start_time === '00:00 AM' ? false : start_time
                return time ? `${x} - ${time}` : x
            } else {
                return s.format('MMM D YYYY H:mm A')
            }
        },
        open_confirm_leave_dialog(event) {
            this.activeEvent = event
            this.$refs.confirm_leave_event.showDialog()
        },
        confirmed_leave() {
            this.leaveEvent(this.activeEvent, this.logged_user.id)
        },
        leaveEvent(event, user_id) {
            apiTo
                .leaveEvent(event.id, user_id)
                .then(({data}) => {
                    let index = this.items.findIndex(item => item.id === event.id)
                    if (~index) {
                        this.items.splice(index, 1)
                        this.$event.$emit('open_snackbar', data.message)
                    }
                })
                .finally(() => {
                    this.$event.$emit('btnloading_off', false)
                    this.$refs.confirm_leave_event.closeDialog()
                })
        },
        open_event_detail_dialog(event) {
            this.eventToEdit = event
            if (this.$refs.event_detail_dialog)
                this.$refs.event_detail_dialog.openDialog()
        },
        open_add_participant_dialog(event) {
            this.eventToEdit = event
            if (this.$refs.add_participant_dialog)
                this.$refs.add_participant_dialog.openDialog()
        },
        refreshParticipants(payload) {
            this.eventToEdit.users = payload.data
            let index = this.items.findIndex(item => item.id === payload.event_id)
            if (~index) {
                this.items[index].users = payload.data
            }
        },
        closeDialogAndDelete() {
            this.delete_item('delete_event')
            this.$event.$emit('close-all-dialog')
        }
    }
}