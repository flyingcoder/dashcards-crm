import { table_functionality } from '@/services/table-functionality/table-functionality'
import isEmpty from 'lodash/isEmpty'

//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import Breadcrumb from '@/common/Breadcrumb.vue'
import ServicesAddDialog from './components/ServicesAddDialog/ServicesAddDialog.vue'
import ServicesEditDialog from './components/ServicesEditDialog/ServicesEditDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import TableHeader from '@/common/TableHeader.vue'

export default {
  name: 'Services',
  mixins: [table_functionality],
  components: {
    CustomTable,
    Breadcrumb,
    ServicesAddDialog,
    ServicesEditDialog,
    DeleteDialog,
    TableHeader
  },

  data() {
    return {
      paths: [
        { text: 'Dashboard', disabled: false, router_name: 'default-content' },
        { text: 'Services', disabled: true, router_name: null }
      ],
      headers: [
        { id: 1, text: 'Service', value: 'service_name', sortable: true },
        { id: 2, text: 'Created By', value: 'name', sortable: true },
        {
          id: 3,
          text: 'Date Created',
          value: 'service_created_at',
          sortable: true
        },
        { id: 4, is_action: true }
      ],
      table_config: {
        route_name: 'services',
        add_message: 'New Service(s) added successfully!',
        update_message: 'Service updated successfully!',
        delete_message: 'Service deleted successfully!',
        refresh_table_message: 'Table refreshed',
        refresh_table_api_name: 'paginate_services_table'
      }
    }
  },

  created() {
    const query = this.$route.query
    if (isEmpty(query)) {
      this.fill_table('get_services', true)
    } else {
      this.update_table_actions(query)
    }
  },

  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = []
      else this.selected = this.items.slice()
    }
  }
}
