import DatePicker from '@/common/DatePicker.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    DatePicker
  },

  computed: {
    ...mapGetters('invoice', [
      'projects',
      'selected_project',
      'due_date',
      'date'
    ])
  },

  created() {
    this.$store.dispatch('invoice/fetch_projects')
    this.$store.commit('invoice/init_date')
  },

  methods: {
    project_changed(new_proj_id) {
      this.$store.commit('invoice/set_selected_project', new_proj_id)
    },

    update_date(date, field) {
      this.$store.commit('invoice/update_date', { date, field })
    }
  }
}
