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
    headers: [
      { id: 1, text: 'Due Date', value: 'due_date' },
      { id: 2, text: 'Invoice', value: 'invoice' },
      { id: 3, text: 'Client', value: 'client' },
      { id: 4, text: 'Amount', value: 'amount' },
      { id: 5, is_action: true }
    ]
  }),

  computed: {
    create_dialog: {
      get() {
        return this.$store.getters['invoice/create_dialog']
      },
      set(val) {
        this.$store.commit('invoice/set_create_dialog', val)
      }
    }
  },

  created() {
    this.fill_table('get_invoices', true)
  },

  methods: {
    create_invoice() {
      this.loading = true
      this.create_dialog = false
      this.$store
        .dispatch('invoice/create_invoice')
        .then(({ data }) => this.items.unshift(data))
        .finally(() => {
          this.loading = false
          this.$store.commit('invoice/reset_state')
        })
    }
  }
}
