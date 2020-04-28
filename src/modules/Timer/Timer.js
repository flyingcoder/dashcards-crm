import { table_functionality } from '@/services/table-functionality/table-functionality'
import { is_screen_medium_and_down } from '@/global_utils/is_screen_medium_and_down'
import isEmpty from 'lodash/isEmpty'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import Breadcrumb from '@/common/Breadcrumb.vue'

export default {
  name: 'Timer',
  mixins: [table_functionality, is_screen_medium_and_down],
  components: {
    CustomTable,
    Breadcrumb
  },

  data: () => ({
    active_tab: null,
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Timer', disabled: true, router_name: null }
    ],
    tabs: [
      {
        id: 1,
        name: 'Global Timer',
        route: `/dashboard/timer`
      },
      {
        id: 2,
        name: 'Task Timer',
        route: `/dashboard/timer/task`
      },
      {
        id: 3,
        name: 'Alarm',
        route: `/dashboard/alarm`
      }
    ],
    texts: [
      { title: 'Global Timer', content: 'Global timer ...' },
      { title: 'Task Timer', content: 'Task timer ...' },
      { title: 'Alarms', content: 'Alarms ...' }
    ]
  })
}
