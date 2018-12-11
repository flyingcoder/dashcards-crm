import DatePicker from '@/common/DatePicker.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    DatePicker
  },

  computed: {
    ...mapGetters('invoice', ['projects', 'selected_project'])
  },

  created() {
    this.$store.dispatch('invoice/fetch_projects')
  },

  methods: {
    project_changed(new_proj_id) {
      this.$store.commit('invoice/set_selected_project', new_proj_id)
    }
  }
}
