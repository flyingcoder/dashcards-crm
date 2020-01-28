import { mapMutations, mapActions } from 'vuex'
//Components
import TableHeader from '@/common/TableHeader.vue'
import Upper from './components/Upper/Upper.vue'
import Lower from './components/Lower/Lower.vue'

export default {
  props: {
    user_id: [Number, String] //from route
  },

  components: {
    TableHeader,
    Upper,
    Lower
  },

  data: () => ({
    user: '',
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Teams', disabled: false, router_name: 'team' },
      { text: 'Profile', disabled: true, router_name: null }
    ]
  }),

  created() {
    this.set_user_id(this.user_id)
    this.get_single_member(this.user_id)
  },

  methods: {
    ...mapMutations('memberProfile', ['set_user_id']),
    ...mapActions('memberProfile', ['get_single_member'])
  }
}
