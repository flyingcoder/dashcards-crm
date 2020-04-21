import { table_functionality } from '@/services/table-functionality/table-functionality'
import { is_screen_medium_and_down } from '@/global_utils/is_screen_medium_and_down'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import UsersList from './components/UsersList.vue'

export default {
  name: 'MessagesTab',
  mixins: [table_functionality, is_screen_medium_and_down],
  components: {
    CustomTable,
    UsersList
  },

  props: {
    id: [Number, String]
  },

  data() {
    return {
      active_tab: null,
      tabs: [
        {
          id: 1,
          name: 'Client Messages',
          route: `/dashboard/project-preview/${this.id}/messages`
        },
        {
          id: 2,
          name: 'Team Messages',
          route: `/dashboard/project-preview/${this.id}/messages/team-messages`
        }
      ],
      texts: [
        { title: 'Client Messages', content: 'Client messages ...' },
        { title: 'Team Messages', content: 'Team messages ...' }
      ],
      sortList: [
        { title: 'Sort by Client' },
        { title: 'Sort by Task' },
        { title: 'Sort by Services' },
        { title: 'Sort by Time' },
        { title: 'Sort by Date' }
      ],
      headers: [
        { text: 'Client', value: 'client', sortable: true, align: 'left' },
        { text: 'Subject', value: 'subject', sortable: true, align: 'left' },
        { text: 'Date', value: 'date', sortable: true, align: 'left' },
        { is_action: true }
      ],
      friends: []
    }
  }
}
