import { config_utils } from '@/services/configs/config_utils'
import request from '@/services/axios_instance'
import { settings } from '@/variables'
import { list_functionality } from '@/services/list-functionality/list-functionality'
import VueTable from '@/common/VueTable/VueTable.vue'

export default {
    name: 'Database',
    mixins: [config_utils, list_functionality],
    components: {
        VueTable
    },
    data: () => ({
        paths: [
            { text: 'Admin', disabled: false, router_name: 'admin-dashboard' },
            { text: 'Database', disabled: false, router_name: 'admin-logs' },
        ]
    }),
    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.all()
    },
}