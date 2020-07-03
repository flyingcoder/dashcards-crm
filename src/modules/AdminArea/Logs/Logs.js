import { config_utils } from '@/services/configs/config_utils'
import request from '@/services/axios_instance'
import { settings } from '@/variables'
import { list_functionality } from '@/services/list-functionality/list-functionality'
import VueTable from '@/common/VueTable/VueTable.vue'

export default {
    name: 'Logs',
    mixins: [config_utils, list_functionality],
    components: {
        VueTable
    },
    data: () => ({
        paths: [
            { text: 'Admin', disabled: false, router_name: 'admin-dashboard' },
            { text: 'Logs', disabled: false, router_name: 'admin-logs' },
        ],
        panel_items: 10,
        telescope_btn: false,
        statistics: {
            telescope: {
                count: 0
            }
        },
        headers: [
            { text: 'ID', align: 'left', value: 'id', sortable: true },
            { text: 'Description', value: 'description' },
            { text: 'Type', value: 'subject_type' },
            { text: 'Causer' },
            { text: 'Date', value: 'created_at' },
        ],

    }),
    created() {
        this.get_all_statistics()
        this.get_activities()
    },
    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.all()
    },
    computed: {
        telescope_view_url() {
            return `${settings.apiHostBaseURL}/admin-api/login`
        },
        server_logs_view_url() {
            return `${settings.apiHostBaseURL}/admin-api/logs`
        }
    },
    methods: {
        get_all_statistics() {
            this.loading = true
            request.get('api/logs')
                .then(({ data }) => {
                    this.statistics = data
                })
                .finally(() => this.loading = false)
        },

        clear_telescope() {
            this.telescope_btn = true
            request.post('api/logs/clear', { type: 'telescope' })
                .then(({ data }) => {
                    this.statistics = data
                })
                .finally(() => this.telescope_btn = false)
        },

        get_activities() {
            this.fill_table_via_url(`api/logs/activities?per_page=100`)
        },

        load_more() {
            this.load_more_via_url(`api/logs/activities?per_page=100`)
        },
    }
}