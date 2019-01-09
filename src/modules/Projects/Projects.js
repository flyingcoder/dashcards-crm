import { table_functionality } from '@/services/table-functionality/table-functionality'

//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import Breadcrumb from '@/common/Breadcrumb.vue'
import TableHeader from '@/common/TableHeader.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import ProjectDialog from './components/ProjectDialog/ProjectDialog.vue'
import isEmpty from 'lodash/isEmpty'
import moment from 'moment'

export default {
  name: 'Projects',
  mixins: [table_functionality],
  components: {
    CustomTable,
    Breadcrumb,
    TableHeader,
    ProjectDialog,
    DeleteDialog
  },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Projects', disabled: true, router_name: null }
    ],
    headers: [
      {
        id: 1,
        text: 'Service',
        value: 'project',
        sortable: true,
        align: 'left'
      },
      { id: 2, text: 'Client', value: 'client', sortable: true, align: 'left' },
      {
        id: 3,
        text: 'Project Manager',
        value: 'project',
        sortable: true,
        align: 'left'
      },
      {
        id: 4,
        text: 'Start Date',
        value: 'start-date',
        sortable: true,
        align: 'left'
      },
      {
        id: 5,
        text: 'Progress',
        value: 'progress',
        sortable: true,
        align: 'left'
      },
      {
        id: 6,
        text: 'Time Spent',
        value: 'time-spent',
        sortable: true,
        align: 'left'
      },
      { id: 7, text: 'Status', value: 'status', sortable: true, align: 'left' },
      { id: 8, is_action: true }
    ],
    table_config: {
      route_name: 'projects',
      add_message: 'New Project added successfully!',
      update_message: 'Project updated successfully!',
      delete_message: 'Project deleted successfully!',
      refresh_table_message: 'Table refreshed',
      refresh_table_api_name: 'paginate_projects_table'
    }
  }),

  filters: {
    fromNowFormat: function(value) {
      return moment(value).fromNow()
    }
  },

  created() {
    const query = { ...this.$route.query }
    if (isEmpty(query)) this.fill_table('get_projects', true)
    else this.update_table_actions(query)
  },

  methods: {
    navigate_to_view_project(id) {
      this.$router.push({
        name: 'project_preview',
        params: { project_id: id }
      })
    }
  }
}
