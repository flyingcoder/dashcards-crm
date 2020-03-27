import { list_functionality } from '@/services/list-functionality/list-functionality'

//Components
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/Actions.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import TableHeader from '@/common/TableHeader.vue'
import TaskDialog from './components/TasksDialog/TasksDialog.vue'

export default {
  mixins: [list_functionality],
  components: { VueTable, DeleteDialog, TaskDialog, TableHeader, Actions },

  props: {
    template_id: [Number, String], //route param
    milestone_id: [Number, String] //route param
  },

  data: () => ({
    headers: [
      { text: 'Title', value: 'title' },
      { text: 'Description', value: 'description' },
      { text: 'Status', value: 'status' },
      { text: 'Days', value: 'days' },
      { text: 'Action', value: 'action', width : '140px', align :'center' }
    ],
    table_config: {
      route_name: 'templates/milestone/task',
      add_message: 'New Task added successfully!',
      update_message: 'Task updated successfully!',
      delete_message: 'Task deleted successfully!'
    }
  }),

  computed: {
    dynamic_api() {
      return `api/milestone/${this.milestone_id}/task`
    },
    dynamic_bulk_delete_api() {
      return `api/milestone/${this.milestone_id}/task/bulk-delete`
    },
    paths() {
      return [
        { text: 'Dashboard', disabled: false, router_name: 'default-content' },
        { text: 'Templates', disabled: false, router_name: 'templates' },
        {
          text: 'Milestones',
          disabled: false,
          router_name: null,
          path: `/dashboard/templates/${this.template_id}/milestone`
        },
        { text: 'Tasks', disabled: true, router_name: null }
      ]
    }
  },

  created() {
    this.fill_table_via_url(this.dynamic_api, true)
  },

  methods: {
    short_description_text(text) {
      return text.length > 12 ? text.slice(0, 11) + '...' : text
    },
    load_more(){
      this.load_more_via_url(this.dynamic_api)
    }
  }
}
