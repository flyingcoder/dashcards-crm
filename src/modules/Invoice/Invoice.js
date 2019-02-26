import { api_to } from './api'
import { table_functionality } from '@/services/table-functionality/table-functionality'
import { mapMutations } from 'vuex'
import axios from 'axios'
import _cloneDeep from 'lodash/cloneDeep'
//Components
import TableHeader from '@/common/TableHeader.vue'
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import EmailDialog from './components/EmailDialog/EmailDialog.vue'
import InvoiceDialog from './components/InvoiceDialog/InvoiceDialog.vue'

export default {
  name: 'Invoice',
  mixins: [table_functionality],

  components: {
    TableHeader,
    InvoiceDialog,
    CustomTable,
    EmailDialog,
    DeleteDialog
  },

  data: () => ({
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
    ]
  }),

  created() {
    this.loading = true
    this.fetch_data()
    api_to
      .get_invoices()
      .then(({ data }) => this.add_table_rows(data.data, data))
      .finally(() => (this.loading = false))
  },

  methods: {
    ...mapMutations('invoice', [
      'set_dialog',
      'set_toolbar',
      'set_projects',
      'open_invoice_for_editing'
    ]),

    open_create_dialog() {
      this.set_toolbar({
        title: 'Create Invoice'
      })
      this.set_dialog({ type: 'create', open: true })
    },

    open_edit_dialog(data) {
      this.set_toolbar({ title: 'Edit Dialog' })
      this.open_invoice_for_editing(_cloneDeep(data))
      this.set_dialog({ type: 'edit', open: true })
    },

    open_view_dialog(data) {
      this.set_toolbar({ title: '' })
      this.open_invoice_for_editing(_cloneDeep(data))
      this.set_dialog({ type: 'view', open: true })
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
      axios
        .all([api_to.get_invoices(), api_to.get_all_projects()])
        .then(
          axios.spread((res1, res2) => {
            this.add_table_rows(res1.data.data, res1.data)
            this.set_projects(res2.data)
          })
        )
        .finally(() => (this.loading = false))
    },

    invoice_updated(invoice) {
      const index = this.items.findIndex(item => item.id === invoice.id)
      if (~index) {
        this.items.splice(index, 1, invoice)
      }
    }
  }
}
