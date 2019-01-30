import { table_functionality } from '@/services/table-functionality/table-functionality'
import isEmpty from 'lodash/isEmpty'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import Breadcrumb from '@/common/Breadcrumb.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import TableHeader from '@/common/TableHeader.vue'
import PermissionsDialog from './components/PermissionsDialog/PermissionsDialog.vue'

export default {
  name: 'PermissionsTable',
  mixins: [table_functionality],
  components: {
    CustomTable,
    Breadcrumb,
    PermissionsDialog,
    DeleteDialog,
    TableHeader
  },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Permissions', disabled: true, router_name: null }
    ],
    headers: [
      { id: 1, text: 'Name', value: 'name', sortable: true, align: 'left' },
      {
        id: 2,
        text: 'Description',
        value: 'description',
        sortable: true,
        align: 'left'
      },
      {
        id: 3,
        text: 'Capability',
        value: 'capability',
        sortable: false,
        align: 'left'
      },
      { id: 4, is_action: true }
    ],
    table_config: {
      route_name: 'settings',
      add_message: 'New Permission added successfully!',
      update_message: 'Permission updated successfully!',
      delete_message: 'Permission deleted successfully!',
      refresh_table_message: 'Table refreshed',
      refresh_table_api_name: 'paginate_permissions_table'
    }
  }),

  watch: {
    api_query(query) {
      this.$router.push({
        name: this.table_config.route_name,
        query: {
          tab: 'permissions',
          page: this.page,
          per_page: this.rows_per_page,
          search: this.search,
          sort: this.query_for_sorting
        }
      })
      this.loading = true
      this.refresh_table(query)
    }
  },

  created() {
    const query = { ...this.$route.query }
    delete query.tab
    if (isEmpty(query)) {
      this.fill_table('get_permissions', true)
    } else {
      this.update_table_actions(query)
    }
  },

  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = []
      else this.selected = this.items.slice()
    },

    capability_column(slug) {
      switch (true) {
        case slug.view && !slug.create && !slug.update && !slug.delete:
          return 1
        case slug.view && slug.create && !slug.update && !slug.delete:
          return 2
        case slug.view && slug.create && slug.update && !slug.delete:
          return 3
        case slug.view && slug.create && slug.update && slug.delete:
          return 4
        default:
          return 0
      }
    }
  }
}
