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
      { id: 3, name: 'Invoices' },
      { id: 4, name: 'Groups' },
      { id: 5, name: 'Permissions' },
      { id: 6, name: 'Email Templates' },
      { id: 7, name: 'Support' },
      { id: 8, name: 'Form Fields' },
      { id: 9, name: 'Cron' },
      { id: 10, name: 'DB Backup' },
      { id: 11, name: 'Updates' }
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
    query.tab = this.active_tab
    this.$router.replace({ name: 'settings', query: query })
  }
}
