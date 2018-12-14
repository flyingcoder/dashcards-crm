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
      'date',
      'create_dialog'
    ]),
    title: {
      get() {
        return this.$store.getters['invoice/title']
      },
      set(new_title) {
        this.$store.commit('invoice/set_title', new_title)
      }
    }
  },

  watch: {
    create_dialog(val) {
      if (val) {
        this.$store.dispatch('invoice/fetch_projects')
        this.$store.commit('invoice/init_date')
      }
    }
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
