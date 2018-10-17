export default {
	name: 'MilestoneDialog',

	props: {
		dialog: Boolean,
		title: String,
		isEditDialog: Boolean,
		fieldsToEdit: { type: Object, default: () => {} }
	},

	data: () => ({
		open: false,
		name: null,
		status: null,
	}),
	
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
				name: this.name,
				status: this.status,
			}
			this.$emit('save', fields_to_save)
		},

		update_fields({fields}) {
			const new_fields = Object.assign({}, fields)
			this.name = new_fields.name
			this.status = new_fields.status
		}

	}


}