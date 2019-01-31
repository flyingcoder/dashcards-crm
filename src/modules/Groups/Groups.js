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
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Groups', disabled: true, router_name: null }
    ],
    headers: [
      { id: 1, text: 'ID', value: 'id' },
      { id: 2, text: 'Group Name', value: 'group_name' },
      { id: 3, text: 'Description', value: 'description' },
      { id: 4, is_action: true }
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

    get_actions() {
      return [
        {
          value: 'edit_settings',
          tooltip: 'Edit Settings',
          icon: require(`@/${'assets/icons/groups/edit.svg'}`)
        },
        {
          value: 'delete_group',
          tooltip: 'Delete Group',
          icon: require(`@/${'assets/icons/groups/delete.svg'}`)
        }
      ]
    }
  }
}
