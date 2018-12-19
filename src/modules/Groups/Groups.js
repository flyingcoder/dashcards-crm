import { table_functionality } from '@/services/table-functionality'

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
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Groups', disabled: true, router_name: null }
    ],
    headers: [
      { id: 1, text: 'ID', value: 'id', width: '5%' },
      { id: 2, text: 'Group Name', value: 'group_name', width: '5%' },
      { id: 3, text: 'Description', value: 'description', width: '5%' },
      { id: 4, is_action: true, width: '85%' }
    ],
    table_config: {
      route_name: 'team/groups',
      add_message: 'New Group added successfully!',
      update_message: 'Group updated successfully!',
      delete_message: 'Group deleted successfully!',
      refresh_table_message: 'Table refreshed',
      refresh_table_api_name: 'paginate_groups_table'
    }
  }),

  created() {
    const query = { ...this.$route.query }
    if (isEmpty(query)) this.fill_table('get_groups', true)
    else this.update_table_actions(query)
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
    }
  }
}
