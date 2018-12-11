import { table_functionality } from '@/services/table-functionality'

//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import TableHeader from '@/common/TableHeader.vue'
import MilestoneDialog from './components/MilestoneDialog/MilestoneDialog.vue'

export default {
  name: 'Milestone',
  mixins: [table_functionality],
  components: { CustomTable, MilestoneDialog, DeleteDialog, TableHeader },

  props: {
    id: [Number, String] //route param
  },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Milestone', disabled: true, router_name: null }
    ],
    headers: [
      { text: 'Title', value: 'title' },
      { text: 'Status', value: 'status' },
      { text: 'Days', value: 'days' },
      { text: 'Action', value: 'action' }
    ],
    table_config: {
      route_name: 'templates/milestone',
      add_message: 'New Milestone added successfully!',
      update_message: 'Milestone updated successfully!',
      delete_message: 'Milestone deleted successfully!'
    }
  }),

  computed: {
    dynamic_api() {
      return `api/template/${this.id}/milestone`
    }
  },

  created() {
    this.fill_table('get_milestones', true, this.dynamic_api)
  },

  methods: {
    navigate_to_milestone_page(item) {
      this.$router.push({
        name: 'templates/milestone/task',
        params: {
          milestone_id: item.id,
          template_id: this.id
        }
      })
    }
  }
}
