import { list_functionality } from '@/services/list-functionality/list-functionality'
import isEmpty from 'lodash/isEmpty'
//Components
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/Actions.vue'
import TableHeader from '@/common/TableHeader.vue'
import Avatars from '@/common/Avatars'

export default {
  name: 'TaskTimer',
  mixins: [list_functionality],
  components: {
    VueTable,
    Actions,
    Avatars,
    TableHeader
  },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Timers', disabled: true, router_name: null }
    ],
    sortList: [
      { title: 'Sort by Client' },
      { title: 'Sort by Task' },
      { title: 'Sort by Services' },
      { title: 'Sort by Time' },
      { title: 'Sort by Date' }
    ],
    headers: [
      { text: 'Assigned To',  sortable: false, align: 'left', width: 150 },
      { text: 'Task',  sortable: false, align: 'left' },
      { text: 'Service', sortable: false, align: 'left' },
      {
        text: 'Time Start',
        sortable: false,
        align: 'left'
      },
      { text: 'Time End', value: 'time_end', sortable: false, align: 'left' },
      {
        text: 'Total Time',
        sortable: false,
        align: 'left'
      },
      { 
        text: 'Action',
        sortable: false,
        align: 'center',
        width: '50px' 
      },
    ],
    timer_tab: 'task-timers',
    currentTab : 'task-timers'
  }),

  created() {
    // const query = this.$route.query
    // if (isEmpty(query)) {
      this.fill_table_via_url('api/timer/tasks?all=true')
    /*} else {
      this.update_table_actions(query)
    }*/
  },
  computed: {
    loggeduser() {
      return this.$store.getters.user
    }
  },
  methods: {
    load_more() {
      this.load_more_via_url('api/timer/tasks?all=true')
    },
    can_run_timer(item){
      let find = item.assignee.find(u => u.id === this.loggeduser.id )
      return find ? true : false
    },
    handleChangeTab(event){
      if (this.timer_tab === 'global-timers') 
        this.$router.push({ name : 'globalTimer' })
      if (this.timer_tab === 'alarm')
        this.$router.push({ name : 'alarm' })
    },
    timerEnd(item) {
      if (item.timer.timer_status === 'open') {
        return 'Ongoing'
      }
      return item.timer.timer_stats.format
    },
    handleActionClick(item){
      this.$event.$emit('open_snackbar', 'Coming soon, working on it!')
    }
  }
}
