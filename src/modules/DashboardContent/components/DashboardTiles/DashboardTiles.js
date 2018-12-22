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
        icon: require('@/assets/icons/sidebar/projects.svg')
      },
      {
        title: 'Open Tasks',
        value: 'tasks',
        icon: require('@/assets/icons/sidebar/templates.svg')
      },
      {
        title: 'Calendar',
        value: 'calendars',
        icon: require('@/assets/icons/sidebar/calendar.svg')
      },
      {
        title: 'Timer',
        value: 'timer',
        icon: require('@/assets/icons/sidebar/timers.svg')
      },
      {
        title: 'Inbound',
        value: 'inbound',
        icon: require('@/assets/icons/sidebar/templates.svg')
      },
      {
        title: 'Outbound',
        value: 'outbound',
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
