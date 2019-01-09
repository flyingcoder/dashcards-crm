import CustomTable from '@/common/CustomTable/CustomTable.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import AddDialog from './AddDialog/AddDialog.vue'
import { table_functionality } from '@/services/table-functionality/table-functionality'

export default {
  name: 'MembersTab',
  mixins: [table_functionality],
  components: {
    CustomTable,
    AddDialog,
    DeleteDialog
  },
  inheritAttrs: false,

  props: {
    id: [Number, String]
  },

  data: () => ({
    add_dialog: false,
    headers: [
      { text: 'Member', value: 'member' },
      { text: 'Email', value: 'email' },
      { text: 'Telephone', value: 'telephone' },
      { text: 'Position', value: 'position' },
      { text: 'Tasks', value: 'tasks' },
      { id: 4, is_action: true }
    ],
    sortList: [
      { title: 'Sort by member' },
      { title: 'Sort by email' },
      { title: 'Sort by telephone' },
      { title: 'Sort by position' },
      { title: 'Sort by tasks' }
    ],
    table_config: {
      route_name: 'project_preview',
      add_message: 'New Members(s) added successfully!',
      delete_message: 'Members deleted successfully!',
      refresh_table_message: 'Table refreshed',
      refresh_table_api_name: 'paginate_tab_members_table'
    }
  }),

  computed: {
    dynamic_api() {
      return `api/projects/${this.id}/member`
    }
  },

  created() {
    this.$router.replace({
      name: 'project_preview',
      query: { tab: 'Members' }
    })
    this.fill_table('get_members', true, this.dynamic_api)
  },

  methods: {
    can_be_deleted(item) {
      return !(
        item.job_title === 'Administrator' || item.job_title === 'Client'
      )
    }
  }
}
