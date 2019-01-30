import { is_screen_medium_and_down } from '@/global_utils/is_screen_medium_and_down'

export default {
  name: 'ProfileRight',
  mixins: [is_screen_medium_and_down],

  data: () => ({
    tabs: [
      {
        icon: 'account_circle'
      },
      {
        icon: 'chat'
      },
      {
        icon: 'camera'
      }
    ],
    texts: [
      {
        content: 'This is your Facebook timeline.'
      },
      {
        content: 'This is your Twitter.'
      },
      {
        content: 'This is your Instagram.'
      }
    ]
  })
}
