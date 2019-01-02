import request from '@/services/axios_instance'
import { mapMutations } from 'vuex'
//Components
import Tile from '@/common/Tile.vue'

export default {
  components: {
    Tile
  },
  data: () => ({
    tiles: [
      {
        title: 'Projects',
        value: 'projects',
        color: '#ed8564',
        icon: require('@/assets/icons/sidebar/projects.svg')
      },
      {
        title: 'Open Tasks',
        value: 'tasks',
        color: '#50b4aa',
        icon: require('@/assets/icons/sidebar/templates.svg')
      },
      {
        title: 'Calendar',
        value: 'calendars',
        color: '#a085d5',
        icon: require('@/assets/icons/sidebar/calendar.svg')
      },
      {
        title: 'Timer',
        value: 'timer',
        color: '#1fb868',
        icon: require('@/assets/icons/sidebar/timers.svg')
      },
      {
        title: 'Inbound',
        value: 'inbound',
        color: '#00a7e5',
        icon: require('@/assets/icons/sidebar/templates.svg')
      },
      {
        title: 'Outbound',
        value: 'outbound',
        color: '#ff7f7e',
        icon: require('@/assets/icons/sidebar/templates.svg')
      }
    ],
    counters: null
  }),

  created() {
    request.get('api/dashboard/counts').then(({ data }) => {
      this.counters = data
      this.set_chat(data.chats)
      this.set_notification(data.notification)
    })
  },

  methods: {
    ...mapMutations('headerIcons', ['set_chat', 'set_notification'])
  }
}
