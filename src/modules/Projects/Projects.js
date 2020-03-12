import { table_functionality } from '@/services/table-functionality/table-functionality'
import { global_utils } from '@/global_utils/global_utils'
import apiTo from './api'
import isEmpty from 'lodash/isEmpty'

//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import Breadcrumb from '@/common/Breadcrumb.vue'
import TableHeader from '@/common/TableHeader.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import ProjectDialog from './components/ProjectDialog/ProjectDialog.vue'
import ServicesAddDialog from '@/modules/Services/components/ServicesAddDialog/ServicesAddDialog.vue'
import ClientsDialog from '@/modules/Clients/components/ClientsDialog/ClientsDialog.vue'
import TeamsDialog from '@/modules/Teams/components/TeamsDialog/TeamsDialog.vue'

export default {
  name: 'Projects',
  mixins: [table_functionality, global_utils],
  components: {
    CustomTable,
    Breadcrumb,
    TableHeader,
    ProjectDialog,
    DeleteDialog,
    ServicesAddDialog,
    ClientsDialog,
    TeamsDialog
  },

  data: () => ({
    add_new_service_dialog : false,
    add_new_client_dialog : false,
    add_new_member_dialog : false,
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

    this.$event.$on('open-new-service-dialog', () => this.add_new_service_dialog = true)
    this.$event.$on('open-new-client-dialog', () => this.add_new_client_dialog = true)
    this.$event.$on('open-new-member-dialog', () => this.add_new_member_dialog = true)
  },
  methods: {
    navigate_to_view_project(id) {
      this.$router.push({
        name: 'project_preview',
        params: { id }
      })
    },
    save_new_services (datus) {
      apiTo.add_new_services(datus)
      .then(({data}) => {
        this.$event.$emit('new_services_added', data)
        this.add_new_service_dialog = false
      })
    },
    save_new_client(datus) {
      apiTo.add_new_client(datus)
      .then(({data}) => {
        this.$event.$emit('new_client_added', data)
        this.$refs.add_client_dialog.$refs.dialog.clear_and_close()
      })
      .finally(() => this.$event.$emit('btnloading_off', false))
    },

    save_new_member(datus) {
      apiTo.add_new_member(datus)
      .then(({data}) => {
        this.$event.$emit('new_member_added', data)
        this.$refs.add_member_dialog.$refs.dialog.clear_and_close()
      })
      .finally(() => this.$event.$emit('btnloading_off', false))
    }
  }
}
