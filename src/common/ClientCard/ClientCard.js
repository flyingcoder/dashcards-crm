import DashCard from '@/common/DashCard.vue'
import request from '@/services/axios_instance'
import { global_utils } from '@/global_utils/global_utils'

export default {
  name: 'TasksCard',
  mixins: [global_utils],
  components: {
    DashCard
  },

  props: {
    id: [Number, String],
    viewMoreLink: Object,
    dashboard: Boolean,
    md: { type: Number, default: 6 }
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
        { text: 'Company',  sortable: false },
        { text: 'Contact' , sortable: false },
        { text: 'Email', sortable: false },
        { text: 'Status', sortable: false },
      ],

      value: this.generate_random(10, 0, 10),
      radius: 0,
      padding: 8,
      width: 2,
      autoLineWidth: false,
      lineCap: 'round',
      fill: false,
      type: 'trend',
      total_sales : (Math.random() * (99 - 1) + 1).toFixed(0),
      new_orders : (Math.random() * (99 - 1) + 1).toFixed(0),
      total_earnings : `$`+(Math.random() * (999 - 1) + 1).toFixed(2),
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
    },
    expand() {
      this.$router.push({ name: 'expanded-clients' })
    }
  }
}
