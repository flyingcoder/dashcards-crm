import { table_functionality } from '@/services/table-functionality/table-functionality'
import isEmpty from 'lodash/isEmpty'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import TableHeader from '@/common/TableHeader.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import TeamsDialog from './components/TeamsDialog/TeamsDialog.vue'

export default {
  name: 'Teams',
  mixins: [table_functionality],
  components: {
    CustomTable,
    TeamsDialog,
    TableHeader,
    DeleteDialog
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
      { id: 1, text: 'Member', align: 'left', value: 'name' },
      { id: 2, text: 'Position', value: 'position' },
      { id: 3, text: 'Tasks', value: 'tasks' },
      { id: 4, text: 'Projects', value: 'projects' },
      { id: 5, is_action: true }
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
    const query = { ...this.$route.query }
    if (isEmpty(query)) this.fill_table('get_teams', true)
    else this.update_table_actions(query)
  },

  methods: {
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
      this.$router.push({ path: './team/groups' })
    },

    navigate_to_view_profile(id) {
      this.$router.push({
        name: 'team/profile',
        params: { user_id: id }
      })
    }
  }
}
