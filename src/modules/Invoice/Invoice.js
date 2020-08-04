import {api_to} from './api'
import {list_functionality} from '@/services/list-functionality/list-functionality'
import {mapMutations} from 'vuex'
import _cloneDeep from 'lodash/cloneDeep'
import {global_utils} from '@/global_utils/global_utils'
//Components
import TableHeader from '@/common/TableHeader.vue'
// import CustomTable from '@/common/CustomTable/CustomTable.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import EmailDialog from './components/EmailDialog/EmailDialog.vue'
import InvoiceDialog from './components/InvoiceDialog/InvoiceDialog.vue'
import ViewInvoice from './components/ViewInvoice/ViewInvoice.vue'
import Actions from '@/common/VueTable/ActionDropdown.vue'
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
            {text: 'Dashboard', disabled: false, route: {name: 'default-content'}},
            {text: 'Invoice', disabled: true, route: null}
        ],
        headers: [
            {text: 'Due Date', sortable: false},
            {text: 'Invoice #', sortable: false},
            {text: 'Billed From', sortable: false},
            {text: 'Billed To', sortable: false},
            {text: 'Status', sortable: false},
            {text: 'Amount', sortable: false},
            {text: 'Action', sortable: false, value: 'action', width: '40px', align: 'center'}
        ],
        view_item: null,
        table_config: {
            add_message: 'New invoice added successfully!',
            update_message: 'Invoice updated successfully!',
            delete_message: 'Invoice deleted successfully!',
            refresh_table_message: 'Table refreshed'
        },
        filter: {
            status: 'all'
        },
        btn_reminding: false,
    }),

    created() {
        this.fetch_data()
        this.getInvoices()
    },
    mounted() {
        this.$event.$emit('path-change', this.paths)
    },
    beforeDestroy() {
        this.$store.commit('invoice/reset_state')
    },

    computed: {
        user() {
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
        can_pay(item) {
            return item.billed_to.id === this.user.id
        },
        navigatePayment(item) {
            this.$router.push({name: 'pay-invoice', params: {id: item.id}})
        },
        open_create_dialog() {
            this.set_toolbar({title: 'Create Invoice'})
            this.set_dialog({type: 'create', open: true})
            this.set_props({send_email: 'no', template: 1})
            this.$refs.invoiceCreateDialog.openDialog()
        },

        open_edit_dialog(data) {
            this.set_toolbar({title: 'Edit Dialog'})
            this.open_invoice_for_editing(_cloneDeep(data))
            if (data.project_id !== 0) {
                this.set_selected_project(data.project_id)
            }
            this.set_dialog({type: 'edit', open: true})
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
        showInvoice(status) {
            this.filter.status = status
            this.getInvoices()
        },
        getInvoices() {
            this.fill_table_via_url(`api/invoice?status=${this.filter.status}`)
        },
        load_more() {
            this.load_more_via_url(`api/invoice?status=${this.filter.status}`)
        },
        remind_invoice(item) {
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
        remind_invoices() {
            if (this.selected.length <= 0) {
                this.$event.$emit('open_snackbar', 'Please select invoice(s)', 'error')
                return;
            }
            this.btn_reminding = true
            let payload = {
                invoice_ids: this.selected.map((value, index) => {
                    return value.id
                })
            }
            api_to.bulk_remind(payload)
                .then(({data}) => {
                    this.$event.$emit('open_snackbar', 'Invoice reminders sent!')
                    this.$event.$emit('clear_selected')
                })
                .finally(() => {
                    this.btn_reminding = false
                })
        }
    }
}


