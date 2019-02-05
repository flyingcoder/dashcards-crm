import { is_screen_medium_and_down } from '@/global_utils/is_screen_medium_and_down'

export default {
  name: 'settings',
  mixins: [is_screen_medium_and_down],
  components: {
    Permissions: () => import('./components/Permissions/Permissions.vue'),
    Groups: () => import('./components/Groups/Groups.vue')
  },

  data: () => ({
    active_tab: 'Permissions',
    tabs: [
      { id: 1, name: 'General' },
      { id: 2, name: 'Company' },
      { id: 3, name: 'Invoice' },
      { id: 4, name: 'Groups' },
      { id: 5, name: 'Permissions' }
    ]
  }),

  created() {
    const query = { ...this.$route.query }
    if ('tab' in query) {
      const tab_found = this.tabs.find(
        tab => tab.name.toLowerCase() === query.tab
      )
      if (tab_found) {
        this.active_tab = query.tab.charAt(0).toUpperCase() + query.tab.slice(1)
      }
    }
    query.tab = this.active_tab.toLowerCase()
    this.$router.replace({ name: 'settings', query: query })
  }
}
