import { list_functionality } from '@/services/list-functionality/list-functionality'
import isEmpty from 'lodash/isEmpty'
import request from '@/services/axios_instance'
import { global_utils } from '@/global_utils/global_utils'
//Components
import VueTable from '@/common/VueTable/VueTable.vue'
import Breadcrumb from '@/common/Breadcrumb.vue'
import ServicesAddDialog from './components/ServicesAddDialog/ServicesAddDialog.vue'
import ServicesEditDialog from './components/ServicesEditDialog/ServicesEditDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import TableHeader from '@/common/TableHeader.vue'
import Actions from '@/common/VueTable/Actions.vue'

export default {
  name: 'Services',
  mixins: [list_functionality, global_utils],
  components: {
    VueTable,
    Breadcrumb,
    ServicesAddDialog,
    ServicesEditDialog,
    DeleteDialog,
    TableHeader,
    Actions
  },

  data() {
    return {
      paths: [
        { text: 'Dashboard', disabled: false, router_name: 'default-content' },
        { text: 'Services', disabled: true, router_name: null }
      ],
      headers: [
        { text: 'Service', value: 'service_name', sortable: true },
        { text: 'Created By', value: 'name', sortable: true },
        {
          text: 'Date Created',
          value: 'service_created_at',
          sortable: true
        },
        {
          text: 'Actions',
          is_action: true,
          sortable: false,
          align: 'center',
          width: '140px'
        }
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
    this.load_services()
  },

  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = []
      else this.selected = this.items.slice()
    },
    load_services() {
      this.fill_table_via_url(`api/services`)
    },
    load_more_services() {
      this.load_more_via_url(`api/services`)
    }
  }
}
