import { list_functionality } from '@/services/list-functionality/list-functionality'
import { global_utils } from '@/global_utils/global_utils'
import apiTo from './api'
import isEmpty from 'lodash/isEmpty'

//Components
import Breadcrumb from '@/common/Breadcrumb.vue'
import TableHeader from '@/common/TableHeader.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
// import ProjectDialog from './components/ProjectDialog/ProjectDialog.vue'
import ServicesAddDialog from '@/modules/Services/components/ServicesAddDialog/ServicesAddDialog.vue'
import ClientsDialog from '@/modules/Clients/components/ClientsDialog/ClientsDialog.vue'
import TeamsDialog from '@/modules/Teams/components/TeamsDialog/TeamsDialog.vue'
import Empty from '@/common/Empty.vue'
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/Actions.vue'
import ProjectModal from './components/ProjectModal/ProjectModal.vue'

export default {
  name: 'Projects',
  mixins: [list_functionality, global_utils],
  components: {
    Breadcrumb,
    TableHeader,
    // ProjectDialog,
    DeleteDialog,
    ServicesAddDialog,
    ClientsDialog,
    TeamsDialog,
    Empty,
    VueTable,
    Actions,
    ProjectModal
  },

  data: () => ({
    add_new_service_dialog: false,
    add_new_client_dialog: false,
    add_new_member_dialog: false,
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Projects', disabled: true, router_name: null }
    ],
    headers: [
      {
        text: 'Project Title',
        value: 'title',
        sortable: true,
        align: 'left'
      },
      {
        text: 'Business',
        value: 'company_name',
        sortable: true,
        align: 'left'
      },
      {
        text: 'Service',
        value: 'service_name',
        sortable: true,
        align: 'left'
      },
      {
        text: 'Manager',
        value: 'manager_name',
        sortable: true,
        align: 'center',
        sortable: false
      },
      {
        text: 'Start Date',
        value: 'started_at',
        sortable: true,
        align: 'left'
      },
      {
        text: 'Progress',
        value: 'progress',
        sortable: true,
        sortable: false,
        align: 'left'
      },
      {
        text: 'Action',
        value: 'actions',
        sortable: false,
        align: 'center',
        width: '140px'
      }
    ],

    table_config: {
      add_message: 'New project added successfully!',
      update_message: 'Project updated successfully!',
      delete_message: 'Project deleted successfully!',
      refresh_table_message: 'Table refreshed',
      refresh_table_api_name: 'paginate_clients_table'
    }
  }),

  created() {
    this.load_projects()
    this.$event.$on(
      'open-new-service-dialog',
      () => (this.add_new_service_dialog = true)
    )
    this.$event.$on(
      'open-new-client-dialog',
      () => (this.add_new_client_dialog = true)
    )
    this.$event.$on(
      'open-new-member-dialog',
      () => (this.add_new_member_dialog = true)
    )
  },
  methods: {
    load_more() {
      this.loading = true
      apiTo
        .get_projects(this.pagination.current + 1)
        .then(({ data }) => {
          data.data.forEach(item => {
            this.items.push(item)
          })
        })
        .finally(() => {
          this.loading = false
          this.$event.$emit('btnloading_off', false)
        })
    },
    load_projects() {
      this.loading = true
      apiTo
        .get_projects(1)
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
    navigate_to_view_project(id) {
      this.$router.push({
        name: 'project_preview',
        params: { id : id }
      })
    },
    save_new_services(datus) {
      apiTo.add_new_services(datus).then(({ data }) => {
        this.$event.$emit('new_services_added', data)
        this.add_new_service_dialog = false
      })
    },
    save_new_client(datus) {
      apiTo
        .add_new_client(datus)
        .then(({ data }) => {
          this.$event.$emit('new_client_added', data)
          this.$refs.add_client_dialog.$refs.dialog.clear_and_close()
        })
        .finally(() => this.$event.$emit('btnloading_off', false))
    },

    save_new_member(datus) {
      apiTo
        .add_new_member(datus)
        .then(({ data }) => {
          this.$event.$emit('new_manager_added', data)
          this.$event.$emit('new_member_added', data)
          this.$refs.add_member_dialog.$refs.dialog.clear_and_close()
        })
        .finally(() => this.$event.$emit('btnloading_off', false))
    },

    filter_projects(filter) {
      //todo
    },
    handleSaveProject(event) {
      this.add_item('add_new_project', event)
      this.$refs.add_dialog.clear_and_close()
    }
  }
}
