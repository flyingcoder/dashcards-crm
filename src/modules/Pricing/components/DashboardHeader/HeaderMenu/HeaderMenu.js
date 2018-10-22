export default {
    name: 'HeaderMenu',
  
    data: () => ({
      avatarSize: 'auto',
      items: [
        {
          title: 'Profile',
          icon: require('@/assets/icons/header/user/profile.svg')
        },
        {
          title: 'Settings',
          icon: require('@/assets/icons/header/user/settings.svg')
        },
        {
          title: 'Help',
          icon: require('@/assets/icons/header/user/help.svg')
        },
        {
          title: 'Lock',
          icon: require('@/assets/icons/header/user/lock.svg')
        },
        {
          title: 'Logout',
          icon: require('@/assets/icons/header/user/logout.svg'),
          action: 'logout'
        }
      ]
    }),
  
    methods: {
      handle_action (action) {
        this[action]() //i.e the action is logout will call this.logout()
      },
      logout() {
              this.$auth.logout()
      }
    }
  
  }