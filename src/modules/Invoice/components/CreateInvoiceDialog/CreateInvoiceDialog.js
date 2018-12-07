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
		discount: '%',
		tax: '%',
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