import {list_functionality} from '@/services/list-functionality/list-functionality'
import {global_utils} from '@/global_utils/global_utils'
import {api_to} from "../../../Invoice/api"
import {mapGetters} from "vuex"
//Components
import DashCard from '@/common/DashCard.vue'
import VueTable from '@/common/VueTable/VueTable.vue'
import ViewInvoice from "@/modules/Invoice/components/ViewInvoice/ViewInvoice.vue"

export default {
    mixins: [list_functionality, global_utils],
    components: {
        DashCard,
        VueTable,
        ViewInvoice
    },

    props: {
        id: [Number, String],
        dashboard: Boolean,
        viewMoreLink: Object,
        type: {type: String, default: 'projects'} //or services or projects-services
    },

    data: () => ({
        enableViewMore: true,
        headers: [
            {text: 'Due Date', sortable: false},
            {text: 'Status', sortable: false},
            {text: 'Billed From', sortable: false},
            {text: 'Billed To', sortable: false},
            {text: 'Amount', sortable: false},
            {text: 'Actions', sortable: false}
        ],
        filter: {
            status: 'all'
        },
        view_item: null
    }),
    computed: {
        ...mapGetters(['user'])
    },
    created() {
        this.get_invoices()
    },
    methods: {
        get_invoices() {
            this.fill_table_via_url(`api/projects/${this.id}/invoice?status=${this.filter.status}`)
        },
        load_more() {
            this.load_more_via_url(`api/projects/${this.id}/invoice?status=${this.filter.status}`)
        },
        showInvoice(status) {
            this.filter.status = status
            this.get_invoices()
        },
        view_invoice(item) {
            this.view_item = item
            this.$refs.view_invoice_dialog.open_dialog(item)
        },
        remind(item) {
            item.extra.btnloading = true
            api_to.bulk_remind({invoice_ids: [item.id]})
                .then(({data}) => {
                    this.$event.$emit('open_snackbar', 'Invoice reminder sent!')
                    this.$event.$emit('clear_selected')
                })
                .finally(() => {
                    item.extra.btnloading = false
                })
        },
        can_pay(item) {
            return (item.billed_to.id === this.user.id)
        },
        pay(item) {
            this.$router.push({name: 'pay-invoice', params: {id: item.id}})
        },
    }
}