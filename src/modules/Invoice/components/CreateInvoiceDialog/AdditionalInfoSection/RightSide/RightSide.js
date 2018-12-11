import Field from './Field'
import { mapGetters } from 'vuex'

export default {
  components: {
    Field
  },

  data: () => ({
    show_discount: false,
    show_tax: false,
    show_shipping: false,
    discount_symbol: '%',
    discount: '',
    tax_symbol: '%',
    tax: '',
    shipping: ''
  }),

  computed: {
    ...mapGetters('invoice', ['rows']),
    subtotal() {
      if (!this.rows.length) return '0'
      return this.rows.reduce((acc, cur) => {
        return (acc += cur.amount)
      }, 0)
    },
    total() {
      let total = Number(this.subtotal)
      if (this.show_discount) {
        if (this.discount_symbol === '%') {
          total -= Number((this.subtotal * this.discount) / 100)
        } else {
          total -= Number(this.discount)
        }
      }
      if (this.show_tax) {
        if (this.tax_symbol === '%') {
          total += Number((this.subtotal * this.tax) / 100)
        } else {
          total += Number(this.tax)
        }
      }
      if (this.show_shipping) {
        total += Number(this.shipping)
      }
      return total
    }
  },

  methods: {
    toggle_field(field_name) {
      if (this[field_name] === '%') this[field_name] = '$'
      else this[field_name] = '%'
    }
  }
}
