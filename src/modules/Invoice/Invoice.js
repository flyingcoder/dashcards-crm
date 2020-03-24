import { api_to } from './api'
import { table_functionality } from '@/services/table-functionality/table-functionality'
import { mapMutations } from 'vuex'
import _cloneDeep from 'lodash/cloneDeep'
//Components
import TableHeader from '@/common/TableHeader.vue'
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import EmailDialog from './components/EmailDialog/EmailDialog.vue'
import InvoiceDialog from './components/InvoiceDialog/InvoiceDialog.vue'
import ViewInvoice from './components/ViewInvoice/ViewInvoice.vue'

export default {
  name: 'Invoice',
  mixins: [table_functionality],

  components: {
    TableHeader,
    InvoiceDialog,
    CustomTable,
    EmailDialog,
    DeleteDialog,
    ViewInvoice
  },

  data: () => ({
    view_invoice_dialog: false,
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Invoice', disabled: true, router_name: null }
    ],
    headers: [
      { id: 1, text: 'Invoice', value: 'invoice' },
      { id: 2, text: 'Due Date', value: 'due_date' },
      { id: 3, text: 'Client', value: 'client' },
      { id: 4, text: 'Amount', value: 'amount' },
      { id: 5, is_action: true }
    ],
    view_item: null,
    items: [],
    page: 1,
    rows_per_page: 10,
    pagination: {
      current: 1,
      total: 0
    }
  }),

  created() {
    this.loading = true
    this.fetch_data()
    this.getInvoices()
  },

  beforeDestroy() {
    this.$store.commit('invoice/reset_state')
  },

  methods: {
    ...mapMutations('invoice', [
      'set_dialog',
      'set_toolbar',
      'set_projects',
      'open_invoice_for_editing',
      'set_selected_project'
    ]),

    open_create_dialog() {
      this.set_toolbar({ title: 'Create Invoice' })
      this.set_dialog({ type: 'create', open: true })
    },

    open_edit_dialog(data) {
      this.set_toolbar({ title: 'Edit Dialog' })
      this.open_invoice_for_editing(_cloneDeep(data))
      this.set_selected_project(data.project_id)
      this.set_dialog({ type: 'edit', open: true })
    },

    open_view_dialog(data) {
      // console.log(data)
      this.view_item = data
      this.view_invoice_dialog = true
      // this.set_toolbar({ title: '' })
      // this.open_invoice_for_viewing(_cloneDeep(data))
      // this.set_dialog({ type: 'view', open: true })
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
        .then(response => {
          this.items = response.data.data
          this.pagination.current = response.data.current_page
          this.pagination.total = response.data.last_page
          this.rows_per_page = response.data.per_page
        })
        .finally(() => (this.loading = false))
    },
    onPageChange() {
      this.getInvoices()
    }
  }
}
