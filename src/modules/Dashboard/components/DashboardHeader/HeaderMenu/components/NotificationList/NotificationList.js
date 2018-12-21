//Components
import HeaderIcon from '../HeaderIcon.vue'

export default {
  components: {
    HeaderIcon
  },
  data: () => ({
    dataNotify: '5',
    friends: [
      {
        id: 0,
        name: 'Klent Gary',
        activity: 'mention you in a comment.'
      },
      {
        id: 1,
        name: 'Mohammad Alongan',
        activity: 'commented on a task that you are assigned in.'
      },
      {
        id: 2,
        name: 'Roland Doda',
        activity: 'replied to your comment on his task.'
      },
      {
        id: 3,
        name: 'Alvin Pacot',
        activity: 'assigned you in a task.'
      },
      {
        id: 4,
        name: 'Klent Gary',
        activity: 'assigned you in a task.'
      }
    ]
  })
}
