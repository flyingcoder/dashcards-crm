import { config_utils } from '@/services/configs/config_utils'
import request from '@/services/axios_instance'
import { settings } from '@/variables'
import { list_functionality } from '@/services/list-functionality/list-functionality'
import Avatars from '@/common/Avatars'
export default {
    name: 'Subscribers',
    mixins: [config_utils, list_functionality],
    components: {
        Avatars,
    },
    data: () => ({
        paths: [
            { text: 'Admin', disabled: false, router_name: 'admin-dashboard' },
            { text: 'Subscribers', disabled: false, router_name: 'admin-logs' },
        ],
        panel_items: 1000,
        statistics: {
            active_companies: 0,
            inactive_companies: 0,
            active_users: 0,
            inactive_users: 0
        },
        btnloading: false,

    }),
    created() {
        this.get_companies()
        this.get_statistics()
        this.$event.$on('btnloading_off', ()=> { this.btnloading = false })
    },
    mounted() {
        this.$event.$emit('path-change', this.paths)
    },

    methods: {
        get_companies() {
            this.fill_table_via_url(`api/companies`)
        },

        load_more_companies() {
            var _this = this
            this.btnloading = true
            this.load_more_via_url(`api/companies`)
        },

        get_statistics() {
            request.get(`api/subscribers/statistics`)
                .then(({ data }) => {
                    this.statistics = data
                })
        },
        enable_disable_company(company){
            request.post(`api/companies/${company.id}/status`)
                .then(({ data }) => {
                    let index = this.items.findIndex(i => i.id === company.id)
                    if (~index) {
                        this.items.splice(index, 1, data)
                        this.$event.$emit('open_snackbar', 'Company updated!')
                    }
                })
        }
    }
}