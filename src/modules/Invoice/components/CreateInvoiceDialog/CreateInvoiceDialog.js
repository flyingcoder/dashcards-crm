import _cloneDeep from 'lodash/cloneDeep'
//Components
import DatePicker from '@/common/DatePicker.vue'

export default {
	components: {
		DatePicker
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
		rows: [],
		active_row: {
			descriptions: '',
			rate: '',
			hours: ''
		}
	}),

	computed: {
		should_disable() {
			const { descriptions, rate, hours } = this.active_row
			return !descriptions || !rate || !hours
		},
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
		calculate_amount(row) {
			return row.rate * row.hours
		},
		add_new_row() {
			const { descriptions, rate, hours } = this.active_row
			const amount = this.calculate_amount(this.active_row)
			this.rows.push({ descriptions, rate, hours, amount })
			this.active_row = {
				descriptions: '',
				rate: '',
				hours: ''
			}
		},
		delete_row(index) {
			let rows = _cloneDeep(this.rows)
			rows.splice(index, 1)
			this.rows = rows
		},
		row_updated(row, index) {
			let rows = _cloneDeep(this.rows)
			const new_amount = row.hours * row.rate
			rows[index].amount = new_amount
			this.rows = rows
		}
	},

}