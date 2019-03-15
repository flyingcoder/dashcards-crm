import { table_functionality } from '@/services/table-functionality/table-functionality'
import { is_screen_medium_and_down } from '@/global_utils/is_screen_medium_and_down'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'

export default {
  name: 'MessagesTab',
  mixins: [table_functionality, is_screen_medium_and_down],
  components: {
    CustomTable
  },

  data: () => ({
    tabs: [
      { title: 'Client Messages', counter: '250' },
      { title: 'Team Messages', counter: '120' }
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
    friends: [
      { id: 0, name: 'Friend One', status: 'online' },
      { id: 1, name: 'Friend Two', status: 'offline' },
      { id: 2, name: 'Friend Three', status: 'dnd' },
      { id: 3, name: 'Friend Four', status: 'online' },
      { id: 4, name: 'Friend Five', status: 'offline' },
      { id: 5, name: 'Friend Six', status: 'dnd' },
      { id: 6, name: 'Friend Seven', status: 'online' },
      { id: 7, name: 'Friend Eight', status: 'online' },
      { id: 8, name: 'Friend Nine', status: 'offline' },
      { id: 9, name: 'Friend Ten', status: 'offline' }
    ]
  }),
}
