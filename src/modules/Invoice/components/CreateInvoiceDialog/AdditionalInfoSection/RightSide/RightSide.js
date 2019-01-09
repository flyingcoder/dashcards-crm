import Field from './Field'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    Field
  },

  computed: {
    ...mapGetters('invoice', ['rows', 'tax', 'discount', 'shipping']),
    subtotal() {
      if (!this.rows.length) return '0'
      return this.rows.reduce((acc, cur) => {
        return (acc += cur.amount)
      }, 0)
    },
    total() {
      let total = Number(this.subtotal)
      if (this.discount.show) {
        if (this.discount.symbol === '%') {
          total -= Number((this.subtotal * this.discount.value) / 100)
        } else {
          total -= Number(this.discount.value)
        }
      }
      if (this.tax.show) {
        if (this.tax.symbol === '%') {
          total += Number((this.subtotal * this.tax.value) / 100)
        } else {
          total += Number(this.tax.value)
        }
      }
      if (this.shipping.show) {
        total += Number(this.shipping.value)
      }
      return total
    }
  },

  watch: {
    total(val) {
      this.$store.commit('invoice/set_total_amount', val)
    }
  },

  methods: {
    ...mapMutations('invoice', [
      'toggle_visibility',
      'set_field',
      'toggle_symbol'
    ])
  }
}
