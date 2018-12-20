import { mapGetters, mapMutations, mapActions } from 'vuex'
//Components
import DatePicker from '@/common/DatePicker.vue'

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
      'create_dialog',
      'edit_dialog',
      'invoice_id',
      'type'
    ]),
    title: {
      get() {
        return this.$store.getters['invoice/title']
      },
      set(new_title) {
        this.$store.commit('invoice/set_title', new_title)
      }
    },
    type: {
      get() {
        return this.$store.getters['invoice/type']
      },
      set(newVal) {
        this.set_type(newVal)
      }
    }
  },

  watch: {
    create_dialog(val) {
      if (val) {
        if (this.type === 'hourly') this.fetch_projects()
        this.init_date()
      }
    },
    edit_dialog(val) {
      if (val && this.type === 'hourly') {
        this.fetch_projects()
      }
    },
    type(val) {
      if (val === 'monthly') {
        this.type_changed_to_monthly()
      } else {
        // val = 'hourly'
        this.fetch_projects()
      }
    }
  },

  methods: {
    ...mapActions('invoice', ['fetch_projects', 'type_changed_to_monthly']),

    ...mapMutations('invoice', [
      'init_date',
      'set_type',
      'set_selected_project',
      'update_date'
    ])
  }
}
