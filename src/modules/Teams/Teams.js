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

export default {
  name: 'Teams',
  mixins: [list_functionality],
  components: {
    VueTable,
    TeamsDialog,
    TableHeader,
    DeleteDialog,
    Actions,
    VueGrid
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
      { text: 'Member', align: 'left', value: 'name' },
      { text: 'Position', value: 'position' },
      { text: 'Location', value: 'location' },
      { text: 'Tasks', value: 'tasks' },
      { text: 'Projects', value: 'projects' },
      { text: 'Action', value: 'actions', sortable: false, align: 'center' }
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

  methods: {
    load_users() {
      this.loading = true
      request
        .get(`api/company/teams?page=1`)
        .then(({ data }) => {
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
    load_more_users() {
      this.loading = true
      request
        .get(`api/company/teams?page=${this.pagination.current + 1}`)
        .then(({ data }) => {
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
      let item = Object.values(user.user_roles)
      if (item[0].indexOf('client') >= 0 || item[0].indexOf('agent') >= 0) {
        this.$router.push(`/dashboard/clients/profile/${user.user_id}`)
      } else {
        this.$router.push(`/dashboard/team/profile/${user.user_id}`)
      }
    }
  }
}
