import { table_functionality } from '@/services/table-functionality/table-functionality'

//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import ClientsDialog from '../ClientsDialog/ClientsDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'

export default {
  name: 'ClientsCustomTable',
  mixins: [table_functionality],
  components: { CustomTable, ClientsDialog, DeleteDialog },

  props: {
    dialog: Boolean
  },

  data: () => ({
    items: [],
    headers: [
      { id: 1, text: 'Business Name', align: 'left', value: 'name' },
      { id: 2, text: 'Contact No.', value: 'contact' },
      { id: 3, text: 'Email', value: 'email' },
      { id: 4, text: 'Status', value: 'status' },
      { id: 5, is_action: true }
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
    this.fill_table('get_clients', true)
  },

  methods: {
    navigate_to_view_profile(id) {
      this.$router.push(`/dashboard/clients/profile/${id}`)
    }
  }
}
