import { table_functionality } from '@/services/table-functionality/table-functionality'

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
      { id: 1, text: 'ID', value: 'id', width: '5%' },
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

  watch: {
    api_query(query) {
      this.$router.push({
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
    delete query.tab
    if (isEmpty(query)) {
      this.fill_table('get_groups', true)
    } else {
      this.update_table_actions(query)
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
