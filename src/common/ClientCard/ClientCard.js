import request from '@/services/axios_instance'
import { global_utils } from '@/global_utils/global_utils'
import { list_functionality } from '@/services/list-functionality/list-functionality'
//components
import DashCard from '@/common/DashCard.vue'
export default {
    name: 'ClientCard',
    mixins: [global_utils, list_functionality],
    components: {
        DashCard
    },

    props: {
        id: [Number, String],
        viewMoreLink: Object,
        dashboard: Boolean,
        md: { type: Number, default: 6 }
    },

    data() {
        return {
            headers: [
                { text: 'Client', sortable: false, width: '90px' },
                { text: 'Company', sortable: false },
                { text: 'Email', sortable: false },
                { text: 'Status', sortable: false }
            ],
            value: this.generate_random(10, 0, 10),
            radius: 0,
            padding: 8,
            width: 2,
            autoLineWidth: false,
            lineCap: 'round',
            fill: false,
            type: 'trend',
            total_sales: (Math.random() * (99 - 1) + 1).toFixed(0),
            new_orders: (Math.random() * (99 - 1) + 1).toFixed(0),
            total_earnings: `$` + (Math.random() * (999 - 1) + 1).toFixed(2)
        }
    },

    mounted() {
        this.load_clients()
    },

    methods: {
        load_clients() {
            this.fill_table_via_url(`api/clients`)
        },
        load_more() {
            this.load_more_via_url(`api/clients`)
        },
        expand() {
            this.$router.push({ name: 'expanded-clients' })
        }
    }
}