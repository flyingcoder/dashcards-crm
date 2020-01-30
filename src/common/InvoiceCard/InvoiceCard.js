import DashCard from '@/common/DashCard.vue'
import request from '@/services/axios_instance'

export default {
  name: 'InvoiceCard',
  components: {
    DashCard
  },

  props: { 
    id: [Number, String], 
    viewMoreLink: Object ,
    dashboard: Boolean 
  },

  data() {
    return {
        loading : true,
        items: [],
        page : 1,
        pagination: {
            current: 1,
            total: 0
        },
        headers: [
          { id: 1, text: 'Invoice', value: 'title' },
          { id: 2, text: 'Due Date', value: 'due_date' },
          { id: 3, text: 'Client', value: 'billed_to' },
          { id: 4, text: 'Amount', value: 'total_amount' }
        ]
    }
  },

  created () {
    this.getInvoices()
  },

  methods : {
    getInvoices() {
      this.loading = true
        request.get('/api/company/invoices?page=' + this.pagination.current)
            .then(response => {
                this.items = response.data.data;
                this.pagination.current = response.data.current_page;
                this.pagination.total = response.data.last_page;
            })
            .finally(() => (this.loading = false))
    },
    onPageChange() {
        this.getInvoices();
    }
  }
}