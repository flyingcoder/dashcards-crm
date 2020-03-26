import { list_functionality } from '@/services/list-functionality/list-functionality'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import TableHeader from '@/common/TableHeader.vue'
import MilestoneTemplateDialog from './components/MilestoneTemplateDialog/MilestoneTemplateDialog.vue'
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/Actions.vue'

export default {
  name: 'MilestoneTemplate',
  mixins: [list_functionality],
  components: {
    VueTable,
    Actions,
    MilestoneTemplateDialog,
    DeleteDialog,
    TableHeader
  },
  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Templates', disabled: true, router_name: null }
    ],
    headers: [
      { text: 'Name', value: 'name' },
      { text: 'Status', value: 'status' },
      { text: 'Action', value: 'action' }
    ],
    table_config: {
      route_name: 'templates',
      add_message: 'New Template added successfully!',
      update_message: 'Template updated successfully!',
      delete_message: 'Template deleted successfully!'
    }
  }),
  created() {
    this.fill_table('get_milestone_templates', true)
  },

  methods: {
    navigate_to_milestone_page(item) {
      this.$router.push({
        name: 'templates/milestone',
        params: { id: item.id }
      })
    }
  }
}
