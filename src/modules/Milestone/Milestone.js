import { list_functionality } from '@/services/list-functionality/list-functionality'

//Components
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/Actions.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import TableHeader from '@/common/TableHeader.vue'
import MilestoneDialog from './components/MilestoneDialog/MilestoneDialog.vue'
import makerequest from '@/services/makeRequestTo'

export default {
  name: 'Milestone',
  mixins: [list_functionality],
  components: { VueTable, MilestoneDialog, DeleteDialog, TableHeader, Actions },

  props: {
    id: [Number, String] //route param
  },

  data: () => ({
    template_name: '',
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Templates', disabled: false, router_name: 'templates' },
      { text: 'Milestones', disabled: true, router_name: null }
    ],
    headers: [
      { text: 'Title', value: 'title' },
      { text: 'Status', value: 'status' },
      { text: 'Days', value: 'days' },
      { text: 'Action', value: 'action', align: 'center' }
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
    this.fill_table_via_url(this.dynamic_api)
    makerequest
      .get_milestones(`api/template/${this.id}`)
      .then(({ data }) => (this.template_name = data.name))
      .finally(() => (this.loading = false))
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
    },
    load_more() {
      this.load_more_via_url(this.dynamic_api)
    }
  }
}
