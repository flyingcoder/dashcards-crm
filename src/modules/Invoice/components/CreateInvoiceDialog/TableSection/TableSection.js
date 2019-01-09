import { mapGetters } from 'vuex'

export default {
  data: () => ({
    active_row: {
      descriptions: '',
      rate: '',
      hours: ''
    }
  }),

  computed: {
    ...mapGetters('invoice', ['rows', 'selected_project']),
    should_disable() {
      const { descriptions, rate, hours } = this.active_row
      return !descriptions || !rate || !hours
    }
  },

  watch: {
    selected_project(val) {
      val && this.fill_table(val)
    }
  },

  methods: {
    calculate_amount(row) {
      return row.rate * row.hours
    },

    add_new_row() {
      const { descriptions, rate, hours } = this.active_row
      const amount = this.calculate_amount(this.active_row)
      this.$store.commit('invoice/add_new_row', {
        descriptions,
        rate,
        hours,
        amount
      })
      this.active_row = {
        descriptions: '',
        rate: '',
        hours: ''
      }
    },

    delete_row(index) {
      this.$store.commit('invoice/delete_row', index)
    },

    row_updated(key, value, index) {
      let row = { ...this.rows[index] }
      row[key] = Number(value)
      row.amount = row.hours * row.rate
      this.$store.commit('invoice/update_row', { row, index })
    },

    fill_table(pro_id) {
      this.$store.dispatch(
        'invoice/fetch_tasks',
        `api/projects/${pro_id}/tasks-for-invoice`
      )
    }
  }
}
