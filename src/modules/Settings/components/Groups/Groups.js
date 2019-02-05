import { table_functionality } from '@/services/table-functionality/table-functionality'
import _cloneDeep from 'lodash/cloneDeep'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import TableHeader from '@/common/TableHeader.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import GroupsDialog from './components/GroupsDialog/GroupsDialog.vue'
import isEmpty from 'lodash/isEmpty'

export default {
  name: 'Groups',
  mixins: [table_functionality],
  components: {
    PermissionsDialog: () =>
      import('./components/PermissionsDialog/PermissionsDialog.vue'),
    CustomTable,
    GroupsDialog,
    TableHeader,
    DeleteDialog
  },

  data: () => ({
    permissions_dialog: '',
    group_id: null,
    paths: [
      { text: 'Settings', disabled: false, router_name: null },
      { text: 'Groups', disabled: true, router_name: null }
    ],
    headers: [
      { id: 1, text: 'Index', value: 'index', width: '5%' },
      { id: 2, text: 'Group Name', value: 'group_name', width: '5%' },
      { id: 3, text: 'Description', value: 'description', width: '5%' },
      { id: 4, is_action: true, width: '85%' }
    ],
    table_config: {
      route_name: 'settings',
      add_message: 'New Group added successfully!',
      update_message: 'Group updated successfully!',
      delete_message: 'Group deleted successfully!',
      refresh_table_message: 'Table refreshed',
      refresh_table_api_name: 'paginate_groups_table'
    }
  }),

  computed: {
    indexes_items() {
      let items = _cloneDeep(this.items)
      return items.map((item, index) => {
        item.index = index + 1
        return item
      })
    }
  },

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
          tab: 'groups',
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
    if (query.tab === 'groups') {
      delete query.tab
      if (isEmpty(query)) {
        this.fill_table('get_groups', true)
      } else {
        this.update_table_actions(query)
      }
    } else {
      this.$router.replace({
        name: this.table_config.route_name,
        query: {
          tab: 'groups'
        }
      })
      this.fill_table('get_groups', true)
    }
  },

  methods: {
    action_clicked(action, { id, name, description }) {
      if (action === 'edit_settings')
        this.open_edit_dialog({ id, name, description })
      else if (action === 'delete_group')
        this.open_delete_dialog({ id, name, description })
      else if (action === 'permissions') {
        this.group_id = id
        this.permissions_dialog = 'PermissionsDialog'
      }
    },

    get_actions(group_slug) {
      if (group_slug.includes('default-admin'))
        return [
          {
            text: 'Group',
            value: 'group_members',
            tooltip: 'Group Members'
          }
        ]
      else
        return [
          {
            text: 'Permissions',
            value: 'permissions',
            tooltip: 'Permissions',
            icon: require(`@/${'assets/icons/groups/permissions.svg'}`)
          },
          {
            text: 'Migrate',
            value: 'migrate_members',
            tooltip: 'Migrate Members',
            icon: require(`@/${'assets/icons/groups/migrate.svg'}`)
          },
          {
            text: 'Group',
            value: 'group_members',
            tooltip: 'Group Members',
            icon: require(`@/${'assets/icons/groups/members.svg'}`)
          },
          {
            text: 'Edit',
            value: 'edit_settings',
            tooltip: 'Edit Settings',
            icon: require(`@/${'assets/icons/groups/edit.svg'}`)
          },
          {
            text: 'Delete',
            value: 'delete_group',
            tooltip: 'Delete Group',
            icon: require(`@/${'assets/icons/groups/delete.svg'}`)
          }
        ]
    },

    is_edit_or_delete_action(action) {
      return action === 'edit_settings' || action === 'delete_group'
    }
  }
}
