export default {
  name: 'DashboardContent',
  data () {
    return {
      tiles: [
        { title: 'Projects', counter: '33', icon: require('@/assets/icons/sidebar/projects.svg') },
        { title: 'Open Tasks', counter: '12', icon: require('@/assets/icons/sidebar/templates.svg') },
        { title: 'Calendar', counter: '09', icon: require('@/assets/icons/sidebar/calendar.svg') },
        { title: 'Timer', counter: '54', icon: require('@/assets/icons/sidebar/timers.svg') },
        { title: 'Inbound', counter: '799', icon: require('@/assets/icons/sidebar/templates.svg') },
        { title: 'Outbound', counter: '847', icon: require('@/assets/icons/sidebar/templates.svg') },
      ],
    }
}
}