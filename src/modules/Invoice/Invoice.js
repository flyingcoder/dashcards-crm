import { api_to } from './api'
import { list_functionality } from '@/services/list-functionality/list-functionality'
import { mapMutations } from 'vuex'
import _cloneDeep from 'lodash/cloneDeep'
import { global_utils } from '@/global_utils/global_utils'
//Components
import TableHeader from '@/common/TableHeader.vue'
// import CustomTable from '@/common/CustomTable/CustomTable.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import EmailDialog from './components/EmailDialog/EmailDialog.vue'
import InvoiceDialog from './components/InvoiceDialog/InvoiceDialog.vue'
import ViewInvoice from './components/ViewInvoice/ViewInvoice.vue'
import Actions from '@/common/VueTable/Actions.vue'
import VueTable from '@/common/VueTable/VueTable.vue'
import StepperInvoiceDialog from './components/StepperDialog/StepperInvoiceDialog.vue'

export default {
    name: 'Invoice',
    mixins: [list_functionality, global_utils],

    components: {
        TableHeader,
        InvoiceDialog,
        StepperInvoiceDialog,
        VueTable,
        EmailDialog,
        DeleteDialog,
        ViewInvoice,
        Actions
    },

    data: () => ({
        view_invoice_dialog: false,
        paths: [
            { text: 'Dashboard', disabled: false, router_name: 'default-content' },
            { text: 'Invoice', disabled: true, router_name: null }
        ],
        headers: [
            { text: 'Due Date', sortable: false },
            { text: 'Invoice #', sortable: false },
            { text: 'Client', sortable: false },
            { text: 'Status', sortable: false },
            // { text: 'Title', sortable: false },
            { text: 'Amount', sortable: false },
            {
                text: 'Action',
                value: 'actions',
                sortable: false,
                width: '180px',
                align: 'center'
            }
        ],
        view_item: null,
        table_config: {
            add_message: 'New invoice added successfully!',
            update_message: 'Invoice updated successfully!',
            delete_message: 'Invoice deleted successfully!',
            refresh_table_message: 'Table refreshed'
        }
    }),

    created() {
        this.fetch_data()
        this.getInvoices()
    },
    mounted(){
        this.$event.$emit('path-change', this.paths)
    },
    beforeDestroy() {
        this.$store.commit('invoice/reset_state')
    },

    computed: {
        user(){
            return this.$store.getters.user
        }
    },

    methods: {
        ...mapMutations('invoice', [
            'set_dialog',
            'set_toolbar',
            'set_projects',
            'open_invoice_for_editing',
            'set_selected_project',
            'set_props'
        ]),
        can_pay(item){
            return item.billed_to === this.user.id
        },
        navigatePayment(item){
            this.$router.push({ name: 'pay-invoice', params : { id : item.id }})
        },
        open_create_dialog() {
            this.set_toolbar({ title: 'Create Invoice' })
            this.set_dialog({ type: 'create', open: true })
            this.set_props({ send_email: 'no', template: 1 })
            this.$refs.invoiceCreateDialog.openDialog()
        },

        open_edit_dialog(data) {
            this.set_toolbar({ title: 'Edit Dialog' })
            this.open_invoice_for_editing(_cloneDeep(data))
            if (data.project_id !== 0) {
                this.set_selected_project(data.project_id)
            }
            this.set_dialog({ type: 'edit', open: true })
            this.$refs.invoiceEditDialog.openDialog()
        },

        open_view_dialog(data) {
            this.view_item = data
            this.$refs.view_invoice_dialog.open_dialog(data)
        },

        async delete_invoice() {
            this.loading = true
            this.delete_dialog = false
            await api_to.delete_invoice(this.delete_item_id)
            this.loading = false
            const index = this.items.findIndex(
                item => item.id === this.delete_item_id
            )
            if (~index) this.items.splice(index, 1)
        },

        fetch_data() {
            api_to
                .get_all_projects()
                .then(res2 => {
                    this.set_projects(res2.data)
                })
                .finally(() => (this.loading = false))
        },

        invoice_updated(invoice) {
            const index = this.items.findIndex(item => item.id === invoice.id)
            if (~index) {
                this.items.splice(index, 1, invoice)
            }
        },

        getInvoices() {
            this.loading = true
            api_to
                .get_invoices(this.pagination.current, this.rows_per_page)
                .then(({ data }) => {
                    this.items = data.data
                    this.pagination.current = data.current_page
                    this.pagination.total = data.last_page
                    this.hasMoreData()
                })
                .finally(() => {
                    this.loading = false
                    this.$event.$emit('btnloading_off', false)
                })
        },
        load_more() {
            this.loading = true
            api_to
                .get_invoices(this.pagination.current + 1)
                .then(({ data }) => {
                    // console.log(data.data)
                    data.data.forEach(item => {
                        this.items.push(item)
                    })
                    this.pagination.current = data.current_page
                    this.pagination.total = data.last_page
                    this.hasMoreData()
                })
                .finally(() => {
                    this.loading = false
                    this.$event.$emit('btnloading_off', false)
                })
        }
    }
}


