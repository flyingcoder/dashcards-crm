import { list_functionality } from '@/services/list-functionality/list-functionality'
import isEmpty from 'lodash/isEmpty'
import request from '@/services/axios_instance'

//Components
import VueGrid from '@/common/VueGrid/VueGrid.vue'
import VueTable from '@/common/VueTable/VueTable.vue'
import TableHeader from '@/common/TableHeader.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import TeamsDialog from './components/TeamsDialog/TeamsDialog.vue'
import Actions from '@/common/VueTable/Actions.vue'
import GroupsDialog from '@/modules/Settings-Groups/components/GroupsDialog/GroupsDialog.vue'

export default {
  name: 'Teams',
  mixins: [list_functionality],
  components: {
    VueTable,
    TeamsDialog,
    TableHeader,
    DeleteDialog,
    Actions,
    VueGrid,
    GroupsDialog
  },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Teams', disabled: true, router_name: null }
    ],
    sortList: [
      { title: 'Sort by member' },
      { title: 'Sort by position' },
      { title: 'Sort by location' },
      { title: 'Sort by total hours' },
      { title: 'Sort by total amount' }
    ],

    headers: [
      { text: 'Member', align: 'left', value: 'name', sortable: false },
      { text: 'Position', value: 'position' },
      { text: 'Location', value: 'location' },
      { text: 'Tasks', value: 'tasks' },
      { text: 'Projects', value: 'projects' },
      {
        text: 'Action',
        value: 'actions',
        sortable: false,
        align: 'center',
        width: '140px'
      }
    ],
    table_config: {
      route_name: 'team',
      add_message: 'New Member added successfully!',
      update_message: 'Member updated successfully!',
      delete_message: 'Member deleted successfully!',
      refresh_table_message: 'Table refreshed',
      refresh_table_api_name: 'paginate_teams_table'
    }
  }),

  created() {
    this.view = this.getPreferredView()
    this.load_users()
  },
  computed: {
    logged_user() {
      return this.$store.getters.user
    },
    permissions() {
      return this.$_permissions.get('hq_members')
    }
  },
  methods: {
    can_delete(item) {
      if (this.logged_user.is_admin) {
        return true
      }
      return this.permissions && this.permissions.delete
    },
    can_edit(item) {
      if (this.logged_user.is_admin) {
        return true
      }
      if (this.logged_user.id === item.id) {
        return true
      }
      return this.permissions && this.permissions.update
    },
    load_users() {
      this.fill_table_via_url(`api/company/teams?no-clients=true&per_page=12`)
    },
    load_more_users() {
      this.load_more_via_url(`api/company/teams?no-clients=true&per_page=12`)
    },
    toggleAll() {
      if (this.selected.length) this.selected = []
      else this.selected = this.items.slice()
    },

    tasks_text(member) {
      return !member.tasks.length ? 'No tasks assigned' : member.tasks.length
    },

    projects_text(member) {
      return !member.projects.length
        ? 'No projects assigned'
        : member.projects.length
    },

    go_to_groups_page() {
      this.$router.push({ path: 'settings?tab=groups' })
    },

    navigate_to_view_profile(user) {
      this.$router.push(`/dashboard/team/profile/${user.id}`)
    },

    show_add_group_dialog() {
      this.$refs.add_group_dialog.openDialog()
    },

    save_new_user_group(item) {
      if (!item) {
        this.$event.$emit('open_snackbar', 'Cant create user group.')
        this.$refs.add_group_dialog.cancel()
        return
      }
      request
        .post('api/groups', item)
        .then(({ data }) => {
          this.$event.$emit('new-user-group-added', data)
          this.$event.$emit('open_snackbar', 'New user group created')
        })
        .finally(() => {
          this.$refs.add_group_dialog.cancel()
        })
    }
  }
}
