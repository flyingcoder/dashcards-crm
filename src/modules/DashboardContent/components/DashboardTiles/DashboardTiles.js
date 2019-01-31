import request from '@/services/axios_instance'
import { mapMutations } from 'vuex'
//Components
import Tile from '@/common/Tile.vue'

export default {
  components: {
    Tile
  },
  data: () => ({
    counters: null
  }),

  computed: {
    user() {
      return this.$store.getters.user
    },
    tiles() {
      if (!this.user) return []
      const user = this.user
      return [
        {
          title: 'Projects',
          value: 'projects',
          color: '#ed8564',
          icon: require('@/assets/icons/sidebar/projects.svg'),
          can_view: () =>
            user.can.projects_own.view ||
            user.can.projects.view ||
            user.is_admin
        },
        {
          title: 'Open Tasks',
          value: 'tasks',
          color: '#50b4aa',
          icon: require('@/assets/icons/sidebar/templates.svg'),
          admin_only: false,
          can_view: () =>
            user.can.tasks.view || user.can.tasks_own.view || user.is_admin
        },
        {
          title: 'Calendar',
          value: 'calendars',
          color: '#a085d5',
          icon: require('@/assets/icons/sidebar/calendar.svg'),
          admin_only: false,
          can_view: () =>
            user.can.calendars.view || user.can.calendars_own.view || user.is_admin
        },
        {
          title: 'Timer',
          value: 'timer',
          color: '#1fb868',
          icon: require('@/assets/icons/sidebar/timers.svg'),
          admin_only: false,
          can_view: () =>
            user.can.timers.view || user.can.timers.view || user.is_admin
        },
        {
          title: 'Inbound',
          value: 'inbound',
          color: '#00a7e5',
          icon: require('@/assets/icons/sidebar/templates.svg'),
          can_view: () => user.is_admin
        },
        {
          title: 'Outbound',
          value: 'outbound',
          color: '#ff7f7e',
          icon: require('@/assets/icons/sidebar/templates.svg'),
          can_view: () => user.is_admin
        }
      ]
    }
  },

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
