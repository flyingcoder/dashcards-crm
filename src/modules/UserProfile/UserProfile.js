import TableHeader from '@/common/TableHeader.vue'
import Upper from './components/Upper/Upper.vue'

export default {
  name: 'UserProfile',

  components: {
    TableHeader,
    Upper
  },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Team', disabled: false, router_name: 'team' },
      { text: 'Profile', disabled: true, router_name: null }
    ]
  })
}
