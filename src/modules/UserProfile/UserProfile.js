import TableHeader from '@/common/TableHeader.vue'
import Upper from './components/Upper/Upper.vue'

export default {
  name: 'UserProfile',

  props: {
    user_id: [Number, String] //from route
  },

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
  }),

  created() {
    this.$store.commit('memberProfile/set_user_id', this.user_id)
  }
}
