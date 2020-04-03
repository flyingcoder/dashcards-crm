import { list_functionality } from '@/services/list-functionality/list-functionality'
import isEmpty from 'lodash/isEmpty'
import { api_to } from './api'
//Components
import Breadcrumb from '@/common/Breadcrumb.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import TableHeader from '@/common/TableHeader.vue'
import PermissionsDialog from './components/PermissionsDialog/PermissionsDialog.vue'
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/Actions.vue'

export default {
  name: 'PermissionsTable',
  mixins: [list_functionality],
  components: {
    VueTable,
    Breadcrumb,
    PermissionsDialog,
    DeleteDialog,
    TableHeader,
    Actions
  },

  data: () => ({
    paths: [
      { text: 'Settings', disabled: false, router_name: 'settings' },
      { text: 'Permissions', disabled: true, router_name: null }
    ],
    headers: [
      {
        text: 'Name',
        value: 'name',
        sortable: true,
        align: 'left'
      },
      {
        text: 'Description',
        value: 'description',
        sortable: true,
        align: 'left'
      },
      {
        text: 'Capability',
        value: 'capability',
        sortable: false,
        align: 'left'
      },
      {
        text: 'Action',
        sortable: false,
        width: '120px',
        align: 'center'
      }
    ],
    table_config: {
      route_name: 'settings',
      add_message: 'New Permission added successfully!',
      update_message: 'Permission updated successfully!',
      delete_message: 'Permission deleted successfully!',
      refresh_table_message: 'Table refreshed',
      refresh_table_api_name: 'paginate_permissions_table'
    },
    groups: [],
    selected_group: null
  }),

  watch: {
    api_query(query, old_query) {
      const new_per_page = Number(this.extract_per_page(query))
      const old_per_page = Number(this.extract_per_page(old_query)) || null

      if (
        this.items_response &&
        this.rows_per_page === this.items.length &&
        new_per_page !== old_per_page
      )
        return

      this.$router.replace({
        name: this.table_config.route_name,
        query: {
          tab: 'permissions',
          page: this.page,
          per_page: this.rows_per_page,
          search: this.search,
          sort: this.query_for_sorting,
          role: this.selected_group
        }
      })
      this.loading = true
      this.refresh_table(query)
    },
    selected_group(role_id) {
      this.fill_table('get_role_permissions', true, role_id)
    }
  },

  created() {
    this.fill_groups()

    const query = { ...this.$route.query }
    if (!isEmpty(query)) {
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
    },

    fill_groups() {
      api_to
        .get_company_roles()
        .then(({ data }) => {
          this.groups = data.map(function(item) {
            return { value: item.id, text: item.name }
          })
        })
        .finally(() => {
          this.selected_group = this.groups[0].value
        })
    }
  },

  filters: {
    removeSlug: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.split('.')[0]
    }
  }
}
