import { list_functionality } from '@/services/list-functionality/list-functionality'
import isEmpty from 'lodash/isEmpty'
import moment from 'moment'
//Components
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/Actions.vue'
import TableHeader from '@/common/TableHeader.vue'
import DatePicker from '@/common/DatePicker.vue'
import Avatars from '@/common/Avatars.vue'

export default {
  name: 'Alarm',
  mixins: [list_functionality],
  components: {
    VueTable,
    Actions,
    TableHeader,
    DatePicker,
    Avatars
  },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Alarm', disabled: true, router_name: null }
    ],
    sortList: [
      { title: 'Sort by Client' },
      { title: 'Sort by Task' },
      { title: 'Sort by Services' },
      { title: 'Sort by Time' },
      { title: 'Sort by Date' }
    ],
    headers: [
      { text: 'Events', sortable: true, align: 'left' },
      { text: 'Participants', sortable: true, align: 'left' },
      { text: 'Type', sortable: true, align: 'left' },
      {
        text: 'Date',
        sortable: true,
        align: 'left'
      },
      { text: 'Time', value: 'time_end', sortable: true, align: 'left' },
      {
        text: 'Action',
        sortable: false,
        align: 'center',
        width: '100px;'
      }
    ],
    timer_tab: 'alarm',
    currentTab: 'alarm',
    filter_date: moment().format('YYYY-MM-DD'),
    today: moment().format('YYYY-MM-DD')
  }),

  created() {
    this.fill_table_via_url(this.api)
  },

  computed: {
    loggeduser() {
      return this.$store.getters.user
    },
    dateSelected() {
      return moment(this.filter_date).format('YYYY-MM-DD')
    },
    api() {
      return `/api/events?alarm=true&page=${this.pagination.current}`
    }
  },

  methods: {
    load_more() {
      this.load_more_via_url(this.api)
    },
    can_run_timer(item) {
      if (this.loggeduser.is_admin) {
        return true
      }

      return item.id === this.loggeduser.id
    },
    handleChangeTab(event) {
      if (this.timer_tab === 'task-timers')
        this.$router.push({ name: 'taskTimer' })
      if (this.timer_tab === 'global-timers')
        this.$router.push({ name: 'globalTimer' })
    },
    handleChangeDate(value) {
      this.resetPagination()
      setTimeout(() => {
        this.fill_table_via_url(this.api)
      }, 1)
    },
    is_event_owner(item) {
      //todo
      return true
    },
    handleAction() {
      this.$event.$emit('open_snackbar', 'Coming soon, working on it!')
    }
  }
}
