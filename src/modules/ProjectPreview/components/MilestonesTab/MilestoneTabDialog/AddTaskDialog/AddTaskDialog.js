import DatePicker from '@/common/DatePicker.vue'

export default {
	name: 'AddTaskDialog',

	components: {
		DatePicker
	},

	props: {
		dialog: Boolean,
		dialogTitle: String,
	},

	data: () => ({
		open: false,
		title: null,
		description: null,
		status: null,
		start_date: null,
		end_date: null,
		days: 1,
	}),

	watch: {
		dialog(new_val) { this.open = new_val },
		open(new_val) { this.$emit('update:dialog', new_val) },
	},

	methods: {

		cancel() { this.open = false },

		save() {
			const fields_to_save = {
				title: this.title,
				description: this.description,
				status: this.status,
				days: this.days,
				started_at: this.start_date,
				end_at: this.end_date
			}
			this.$emit('save', fields_to_save)
		},

	}


}