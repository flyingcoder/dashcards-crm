import {config_utils} from '@/services/configs/config_utils'
import request from '@/services/axios_instance'
import {settings} from '@/variables'
import {list_functionality} from '@/services/list-functionality/list-functionality'
import VueTable from '@/common/VueTable/VueTable.vue'

export default {
    name: 'Logs',
    mixins: [config_utils, list_functionality],
    components: {
        VueTable
    },
    data: () => ({
        paths: [
            {text: 'Admin', disabled: false, router_name: 'admin-dashboard'},
            {text: 'Logs', disabled: false, router_name: 'admin-logs'},
        ],
        panel_items: 10,
        telescope_btn: false,
        statistics: {
            telescope: {
                count: 0
            },
            emails: {
                count: 0
            }
        },
        headers: [
            {text: 'ID', align: 'left', value: 'id', sortable: true},
            {text: 'Description', value: 'description'},
            {text: 'Type', value: 'subject_type'},
            {text: 'Causer', width: 90},
            {text: 'Date', value: 'created_at'},
        ],
        email_items: [],
        email_headers: [
            {text: 'ID', align: 'left', sortable: false},
            {text: 'From', sortable : false},
            {text: 'To', sortable : false},
            {text: 'Subject', sortable : false},
            {text: 'Sent Date', sortable : false},
            {text: 'Body', sortable : false}
        ],
        see_more_email_logs: ''
    }),
    created() {
        this.get_all_statistics()
        this.get_activities()
        this.get_email_logs()
    },
    mounted() {
        this.$event.$emit('path-change', this.paths)
    },
    computed: {
        telescope_view_url() {
            return `${settings.apiHostBaseURL}/admin-api/login`
        },
        server_logs_view_url() {
            return `${settings.apiHostBaseURL}/admin-api/logs`
        },
        noMoreData_emails() {
            return !this.see_more_email_logs
        }
    },
    methods: {
        get_all_statistics() {
            this.loading = true
            request.get('api/logs')
                .then(({data}) => {
                    this.statistics = data
                })
                .finally(() => this.loading = false)
        },

        clear_telescope() {
            this.telescope_btn = true
            request.post('api/logs/clear', {type: 'telescope'})
                .then(({data}) => {
                    this.statistics = data
                })
                .finally(() => this.telescope_btn = false)
        },

        get_activities() {
            this.fill_table_via_url(`api/logs/activities?per_page=100`)
        },

        load_more_activities() {
            this.load_more_via_url(`api/logs/activities?per_page=100`)
        },
        get_email_logs() {
            request.get(`api/logs/emails`)
                .then(({data}) => {
                    this.email_items = data.data
                    this.see_more_email_logs = data.next_page_url
                })
        },
        load_more_emails() {
            request.get(this.see_more_email_logs)
                .then(({data}) => {
                    this.email_items.push(...data.data)
                    this.see_more_email_logs = data.next_page_url
                })
                .finally(() => {
                    this.$event.$emit('btnloading_off', true)
                })
        }
    }
}