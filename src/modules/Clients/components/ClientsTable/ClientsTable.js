import { list_functionality } from '@/services/list-functionality/list-functionality'
import request from '@/services/axios_instance'

//Components
import VueTable from '@/common/VueTable/VueTable.vue'
import ClientsDialog from '../ClientsDialog/ClientsDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import Actions from '@/common/VueTable/Actions.vue'

export default {
  name: 'ClientsVueTable',
  mixins: [list_functionality],
  components: { VueTable, ClientsDialog, DeleteDialog, Actions },

  props: {
    dialog: Boolean
  },

  data: () => ({
    headers: [
      { text: 'Business Name', align: 'left', value: 'company_name' },
      { text: 'Contact No.', value: 'contact' },
      { text: 'Email', value: 'email' },
      { text: 'Status', value: 'status' },
      {
        text: 'Action',
        value: 'actions',
        sortable: false,
        align: 'center',
        width: '140px'
      }
    ],
    table_config: {
      route_name: 'clients',
      add_message: 'New Client added successfully!',
      update_message: 'Client updated successfully!',
      delete_message: 'Client deleted successfully!',
      refresh_table_message: 'Table refreshed',
      refresh_table_api_name: 'paginate_clients_table'
    }
  }),

  filters: {
    phoneDisplayForm: function(value) {
      return value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 $3')
    }
  },

  watch: {
    dialog(new_val) {
      this.add_dialog = new_val
    },
    add_dialog(new_val) {
      this.$emit('update:dialog', new_val)
    }
  },

  created() {
    this.loadClients()
  },

  methods: {
    navigate_to_view_profile(id) {
      this.$router.push(`/dashboard/clients/profile/${id}`)
    },
    loadClients() {
      this.loading = true
      request
        .get('api/clients?page=1')
        .then(({ data }) => {
          this.items = data.data
          this.pagination.current = data.current_page
          this.pagination.total = data.last_page
          this.hasMoreData()
        })
        .finally(() => {
          this.loading = false
          this.$event.$emit('btnloading_off', false)
        })
    },
    load_more() {
      request
        .get(`api/clients?page=${this.pagination.current + 1}`)
        .then(({ data }) => {
          data.data.forEach(item => {
            this.items.push(item)
          })
          this.pagination.current = data.current_page
          this.pagination.total = data.last_page
          this.hasMoreData()
        })
        .finally(() => {
          this.loading = false
          this.$event.$emit('btnloading_off', false)
        })
    }
  }
}
