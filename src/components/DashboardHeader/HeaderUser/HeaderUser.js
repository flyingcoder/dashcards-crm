export default {
  data: () => ({
    items: [
      { title: 'Profile', icon: require('@/assets/icons/header/user/profile.svg') },
      { title: 'Settings', icon: require('@/assets/icons/header/user/settings.svg') },
      { title: 'Help', icon: require('@/assets/icons/header/user/help.svg') },
      { title: 'Lock', icon: require('@/assets/icons/header/user/lock.svg') },
      { title: 'Logout', icon: require('@/assets/icons/header/user/logout.svg') }
    ]
  }),

  name: 'HeaderUser'

}