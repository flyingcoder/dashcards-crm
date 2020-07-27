import {list_functionality} from "@/services/list-functionality/list-functionality";
//Components
import VueTable from "@/common/VueTable/VueTable.vue";
import Actions from "@/common/VueTable/Actions.vue";

export default {
    name: 'Invoice',
    mixins: [list_functionality],

    components: {
        VueTable,
        Actions
    },

    props: {
        user_id: [Number, String]
    },

    data: () => ({
        headers: [
            {text: 'Due Date', sortable: false},
            {text: 'Invoice #', sortable: false},
            {text: 'Billed From', sortable: false},
            {text: 'Billed To', sortable: false},
            {text: 'Status', sortable: false},
            // { text: 'Title', sortable: false },
            {text: 'Amount', sortable: false},
            /*{
                text: 'Action',
                value: 'actions',
                sortable: false,
                width: '180px',
                align: 'center'
            }*/
        ],
        filter: {
            status: 'all'
        },
    }),
    created() {
        this.getInvoices()
    },
    methods: {
        showInvoice(status) {
            this.filter.status = status
            this.getInvoices()
        },
        getInvoices() {
            this.fill_table_via_url(`api/clients/${this.user_id}/invoices?status=${this.filter.status}`)
        },
        load_more() {
            this.load_more_via_url(`api/clients/${this.user_id}/invoices?status=${this.filter.status}`)
        }

    }
}
