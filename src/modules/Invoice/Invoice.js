import { api_to } from './api'
import { table_functionality } from '@/services/table-functionality/table-functionality'
import { mapMutations } from 'vuex'
//Components
import TableHeader from '@/common/TableHeader.vue'
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import EmailDialog from './components/EmailDialog/EmailDialog.vue'

export default {
  name: 'Invoice',
  mixins: [table_functionality],

  components: {
    TableHeader,
    InvoiceDialog: () => import('./components/InvoiceDialog/InvoiceDialog.vue'),
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

  computed: {
    invoice_dialog() {
      const is_open = this.$store.getters['invoice/dialog']
      return is_open ? 'InvoiceDialog' : null
    }
  },

  created() {
    this.loading = true
    api_to
      .get_invoices()
      .then(({ data }) => this.add_table_rows(data.data, data))
      .finally(() => (this.loading = false))
  },

  methods: {
    ...mapMutations('invoice', ['set_dialog', 'set_toolbar']),
    open_create_dialog() {
      this.set_toolbar({
        title: 'Create Invoice',
        submit_disable: false
      })
      this.set_dialog('create')
    }
  }
}
