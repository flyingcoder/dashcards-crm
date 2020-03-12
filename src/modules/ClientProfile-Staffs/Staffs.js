import CustomTable from '@/common/CustomTable/CustomTable.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import StaffDialog from './StaffDialog/StaffDialog.vue'
import { table_functionality } from '@/services/table-functionality/table-functionality'

export default {
  name: 'MembersTab',
  mixins: [table_functionality],
  components: {
    CustomTable,
    StaffDialog,
    DeleteDialog
  },
  inheritAttrs: false,

  props: {
    id: [Number, String]
  },

  data: () => ({
    add_dialog: false,
    staff_id: '',
    headers: [
      { text: 'Member', value: 'member' },
      { text: 'Email', value: 'email' },
      { text: 'Telephone', value: 'telephone' },
      { text: 'Position', value: 'position' },
      { text: 'Tasks', value: 'tasks' },
      { id: 4, is_action: true }
    ],
    table_config: {
      route_name: 'client_profile',
      add_message: 'New Members(s) added successfully!',
      delete_message: 'Members deleted successfully!',
      refresh_table_message: 'Table refreshed',
      refresh_table_api_name: 'paginate_tab_members_table'
    }
  }),

  computed: {
    dynamic_api() {
      return `api/clients/${this.id}/staffs`
    }
  },

  created() {
    this.$router.replace({
      name: 'client_profile',
      query: { tab: 'Staffs' }
    })
    this.fill_table('get_members', true, this.dynamic_api)
  },

  methods: {
    can_be_deleted(item) {
      return !(
        item.job_title === 'Administrator' || item.job_title === 'Client'
      )
    },

    navigate_to_view_profile(id) {
      this.$router.push({
        name: 'client_profile',
        params: { user_id: id }
      })
    }
  }
}
