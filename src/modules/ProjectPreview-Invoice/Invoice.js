import { apiTo } from './api'
import { table_functionality } from '@/services/table-functionality/table-functionality'
import { mapMutations } from 'vuex'
import _cloneDeep from 'lodash/cloneDeep'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import ViewInvoice from '@/modules/Invoice/components/ViewInvoice/ViewInvoice.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import InvoiceDialog from '@/modules/Invoice/components/InvoiceDialog/InvoiceDialog.vue'

export default {
  name: 'Invoice',
  mixins: [table_functionality],

  components: {
    CustomTable,
    DeleteDialog,
    ViewInvoice,
    InvoiceDialog
  },

  props: {
    id: [Number, String]
  },

  data: () => ({
    headers: [
      { id: 1, text: 'Invoice', value: 'invoice', width: '30%' },
      { id: 2, text: 'Client', value: 'client', width: '30%' },
      { id: 3, text: 'Due Date', value: 'due_date', width: '10%' },
      { id: 4, text: 'Amount', value: 'amount', width: '10%' },
      { id: 5, is_action: true, width: '20%' }
    ],
    view_invoice_dialog: false,
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

  methods: {
    ...mapMutations('invoice', [
      'set_dialog',
      'set_toolbar',
      'set_projects',
      'open_invoice_for_editing',
      'set_selected_project'
    ]),
    async delete_invoice() {
      this.loading = true
      this.delete_dialog = false
      await apiTo.delete_invoice(this.delete_item_id)
      this.loading = false
      const index = this.items.findIndex(
        item => item.id === this.delete_item_id
      )
      if (~index) this.items.splice(index, 1)
    },
    open_view_dialog(data) {
      this.view_item = data
      this.view_invoice_dialog = true
    },
    open_edit_dialog(data) {
      this.set_toolbar({ title: 'Edit Dialog' })
      this.open_invoice_for_editing(_cloneDeep(data))
      this.set_selected_project(data.project_id)
      this.set_dialog({ type: 'edit', open: true })
    },
    fetch_data() {
      apiTo
        .get_all_projects()
        .then(res2 => {
          this.set_projects(res2.data)
        })
        .finally(() => (this.loading = false))
    },
    getInvoices() {
      this.loading = true
      apiTo
        .getInvoices(this.id, this.pagination.current, this.rows_per_page)
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
    },
    invoice_updated(invoice) {
      const index = this.items.findIndex(item => item.id === invoice.id)
      if (~index) {
        this.items.splice(index, 1, invoice)
      }
    }
  }
}
