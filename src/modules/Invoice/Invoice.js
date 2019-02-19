import { api_to } from './api'
import { table_functionality } from '@/services/table-functionality/table-functionality'
import { mapMutations } from 'vuex'
import axios from 'axios'
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
    ...mapMutations('invoice', ['set_dialog', 'set_toolbar', 'set_projects']),
    open_create_dialog() {
      this.set_toolbar({
        title: 'Create Invoice',
        submit_disable: false
      })
      this.set_dialog({ type: 'create', open: true })
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
    }
  }
}
