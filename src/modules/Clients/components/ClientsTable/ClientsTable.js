import { table_functionality } from '@/services/table-functionality'

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
    headers: [
      { text: 'Client', align: 'left', value: 'name' },
      { text: 'Contact No.', value: 'contact' },
      { text: 'Email', value: 'email' },
      { text: 'Status', value: 'status' }
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
  }
}
