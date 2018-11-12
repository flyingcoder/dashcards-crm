export default {
	name: 'DatePickers',

	data: () => ({
		date_picker: {
			menu: false,
			start_date: '',
			end_date: ''
		},
	}),

	computed: {
		text_field_label() {
			if (!this.date_picker.start_date) return ''

			const start_date = this.date_picker.start_date
			const end_date = this.date_picker.end_date
			const date_text = end_date ? `${start_date} until ${end_date}` : `${start_date} until forever`
			return date_text
		}
	},

	methods: {
		save() {
			this.cancel()
		},
		reset() {
			this.date_picker.start_date = ''
			this.date_picker.end_date = ''
		},

		cancel() {
			this.date_picker.menu = false
		}

	},

}