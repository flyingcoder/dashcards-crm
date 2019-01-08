import FriendsList from './components/FriendsList/FriendsList.vue'

export default {
  components: {
    FriendsList
  },
  data: () => ({
    showMessage: false
  }),

  computed: {
    should_show() {
      return this.$store.getters.show_floating_button
    }
  }
}
