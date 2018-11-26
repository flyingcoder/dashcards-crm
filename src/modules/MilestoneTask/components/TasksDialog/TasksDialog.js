export default {
	name: 'TasksDialog',

	props: {
		dialog: Boolean,
		dialogTitle: String,
		isEditDialog: Boolean,
		fieldsToEdit: { type: Object, default: () => {} }
	},

	data: () => ({
		open: false,
		title: null,
		description: null,
		status: null,
		days_init_value: 1,
	}),

	computed: {
		days: {
			get: function () {
				return this.days_init_value
			},
			set: function (newValue) {
				if (parseInt(newValue) < 1) {
					this.days_init_value = 1
					return
				}
				this.days_init_value = newValue
			}
		}
	},

	watch: {
		dialog(new_val) { this.open = new_val },
		open(new_val) { this.$emit('update:dialog', new_val) },
		fieldsToEdit: {
			handler(new_val) {
				this.isEditDialog && this.update_fields(new_val)
			},
			deep: true
		}
	},

	methods: {

		cancel() { this.open = false },
		save() {
			const fields_to_save = {
				title: this.title,
				description: this.description,
				status: this.status,
				days: this.days,
			}
			this.$emit('save', fields_to_save)
		},

		update_fields({fields}) {
			const new_fields = Object.assign({}, fields)
			this.title = new_fields.title
			this.description = new_fields.description
			this.status = new_fields.status
			this.days = new_fields.days
		}

	}


}