import * as apiTo from './api'
import { table_functionality } from '@/services/table-functionality/table-functionality'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'

export default {
  name: 'Invoice',
  mixins: [table_functionality],

  components: {
    CustomTable
  },

  props: {
    user_id: [Number, String]
  },

  data: () => ({
    headers: [
      { id: 1, text: 'Invoice', value: 'invoice' },
      { id: 2, text: 'Due Date', value: 'due_date' },
      { id: 3, text: 'Client', value: 'client' },
      { id: 4, text: 'Amount', value: 'amount' },
      { id: 5, is_action: false }
    ]
  }),

  created() {
    this.loading = true
    apiTo
      .getInvoices(this.user_id)
      .then(({ data }) => this.add_table_rows(data, null))
      .finally(() => (this.loading = false))
  }
}
