import { mapActions, mapGetters } from 'vuex'
//Components
import FriendsList from './components/FriendsList/FriendsList.vue'
import ChatBox from '@/common/ChatBox/ChatBox.vue'

export default {
  components: {
    FriendsList,
    ChatBox
  },
  data: () => ({
    showMessage: false
  }),

  computed: {
    ...mapGetters('chat', ['active_conv']),
    should_show() {
      return this.$store.getters.show_floating_button
    }
  },

  methods: {
    ...mapActions('chat', ['open_conversation'])
  }
}
