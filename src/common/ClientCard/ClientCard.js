import DashCard from '@/common/DashCard.vue'
import request from '@/services/axios_instance'

export default {
  name: 'TasksCard',
  components: {
    DashCard
  },

  props: {
    id: [Number, String],
    viewMoreLink: Object,
    dashboard: Boolean
  },

  data() {
    return {
      loading: true,
      items: [],
      page: 1,
      pagination: {
        current: 1,
        total: 0
      },
      headers: [
        { id: 1, text: 'Company', value: 'company_name' },
        { id: 2, text: 'Contact Name', value: 'full_name' },
        { id: 3, text: 'Status', value: 'status' },
        { id: 4, text: 'Email', value: 'email' }
      ]
    }
  },

  created() {
    this.getClients()
  },

  methods: {
    getClients() {
      this.loading = true
      request
        .get('/api/clients?page=' + this.pagination.current)
        .then(response => {
          this.items = response.data.data
          this.pagination.current = response.data.current_page
          this.pagination.total = response.data.last_page
        })
        .finally(() => (this.loading = false))
    },
    onPageChange() {
      this.getClients()
    }
  }
}
