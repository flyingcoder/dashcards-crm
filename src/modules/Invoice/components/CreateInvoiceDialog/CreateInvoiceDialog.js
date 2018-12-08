import { mapGetters } from 'vuex'
//Components
import DialogToolbar from './DialogToolbar.vue'
import InfoSection from './InfoSection/InfoSection.vue'
import TableSection from './TableSection/TableSection.vue'

export default {
	components: {
		DialogToolbar, InfoSection, TableSection
	},

	props: {
		open: Boolean,
	},

	data: () => ({
		show_discount: false,
		show_tax: false,
		show_shipping: false,
		discount_symbol: '%',
		discount: '',
		tax_symbol: '%',
		tax: '',
		shipping: '',
	}),

	computed: {
		...mapGetters('invoice', [
			'rows'
		]),
		subtotal() {
			if (!this.rows.length) return '0'
			return this.rows.reduce((acc, cur) => {
				return acc += cur.amount
			}, 0)
		},
		total() {
			let total = this.subtotal
			if (this.show_discount) {
				if (this.discount_symbol === '%') {
					total -= this.subtotal * this.discount / 100
				}else {
					total -= this.discount
				}
			}
			if (this.show_tax) {
				if (this.tax_symbol === '%') {
					total += this.subtotal * this.tax / 100
				}else {
					total += this.tax
				}
			}
			if (this.show_shipping) {
				total += this.shipping
			}
			return total
		}
	},

	methods: {
		toggle_field(field_name) {
			if (this[field_name] === '%')
				this[field_name] = '$'
			else
				this[field_name] = '%'
		},
	},

}