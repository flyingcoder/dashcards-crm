import { table_functionality } from '@/services/table-functionality'
//Components
import TableHeader from '@/common/TableHeader.vue'
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import CreateInvoiceDialog from './components/CreateInvoiceDialog/CreateInvoiceDialog.vue'

export default {
  name: 'Invoice',
  mixins: [table_functionality],

  components: {
    TableHeader,
    CreateInvoiceDialog,
    CustomTable
  },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Invoice', disabled: true, router_name: null }
    ],
    create_dialog: false,
    headers: [
      { id: 1, text: 'Due Date', value: 'due_date' },
      { id: 2, text: 'Invoice', value: 'invoice' },
      { id: 3, text: 'Client', value: 'client' },
      { id: 4, text: 'Amount', value: 'amount' },
      { id: 5, is_action: true }
    ]
  }),

  created() {
    this.fill_table('get_invoices', true)
  }
}
