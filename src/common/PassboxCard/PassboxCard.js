import DashCard from '@/common/DashCard.vue'

export default {
  name: 'PassboxCard',
  components: { DashCard },
  props: {
    id: [Number, String],
    viewMoreLink: Object,
    dashboard: Boolean
  },
  data: () => ({
    show_password: false,
    password: '',
    items: ['Category A', 'Category B', 'Category C', 'Category D'],
    accounts: [
      {
        name: 'Gmail',
        email: 'test@buzzooka.com'
      },
      {
        name: 'Facebook',
        email: 'test@buzzooka.com'
      },
      {
        name: 'Twitter',
        email: 'test@buzzooka.com'
      },
      {
        name: 'Instagram',
        email: 'test@buzzooka.com'
      }
    ]
  })
}
