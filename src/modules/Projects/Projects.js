import { table_functionality } from '@/services/table-functionality/table-functionality'
import { global_utils } from '@/global_utils/global_utils'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import Breadcrumb from '@/common/Breadcrumb.vue'
import TableHeader from '@/common/TableHeader.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import ProjectDialog from './components/ProjectDialog/ProjectDialog.vue'
import isEmpty from 'lodash/isEmpty'

export default {
  name: 'Projects',
  mixins: [table_functionality, global_utils],
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
        text: 'Project Title',
        value: 'title',
        sortable: true,
        align: 'left'
      },
      {
        id: 2,
        text: 'Business Name',
        value: 'company_name',
        sortable: true,
        align: 'left'
      },
      {
        id: 3,
        text: 'Service',
        value: 'service',
        sortable: true,
        align: 'left'
      },
      {
        id: 4,
        text: 'Created By',
        value: 'created_by',
        sortable: true,
        align: 'left'
      },
      {
        id: 5,
        text: 'Start Date',
        value: 'start-date',
        sortable: true,
        align: 'left'
      },
      {
        id: 6,
        text: 'Progress',
        value: 'progress',
        sortable: true,
        align: 'left'
      },
      { id: 7, is_action: true }
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

  created() {
    const query = { ...this.$route.query }
    if (isEmpty(query)) this.fill_table('get_projects', true)
    else this.update_table_actions(query)
  },

  methods: {
    navigate_to_view_project(id) {
      this.$router.push({
        name: 'project_preview',
        params: { id }
      })
    }
  }
}
