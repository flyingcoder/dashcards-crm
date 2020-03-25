import { list_functionality } from '@/services/list-functionality/list-functionality'
import isEmpty from 'lodash/isEmpty'
import request from '@/services/axios_instance'

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
  mixins: [list_functionality],
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
        { text: 'Action', is_action: true, sortable : false }
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
    load_services(){
      this.loading = true
      request.get('api/services?page=1').then(({data}) => {
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
    load_more_services(){
      this.loading = true
      request.get(`api/services?page=${this.pagination.current+1}`).then(({data}) => {
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
