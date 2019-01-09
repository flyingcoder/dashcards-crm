import { mapGetters } from 'vuex'

export default {
  data: () => ({}),

  computed: {
    ...mapGetters('invoice', ['notes', 'terms'])
  },

  methods: {
    update_textarea(new_val, field) {
      this.$store.commit('invoice/set_textarea', { new_val, field })
    }
  }
}
