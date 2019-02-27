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
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Client', disabled: false, router_name: 'clients' },
      { text: 'Profile', disabled: true, router_name: null }
    ]
  }),

  watch: {
    $route: {
      handler(val) {
        this.set_user_id(val.params.user_id)
        this.get_single_client(val.params.user_id)
      },
      immediate: true
    }
  },

  methods: {
    ...mapMutations('memberProfile', ['set_user_id']),
    ...mapActions('memberProfile', ['get_single_client'])
  }
}
