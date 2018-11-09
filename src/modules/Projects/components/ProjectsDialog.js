export default {
	name: 'ProjectsDialog',

	props: {
		dialog: Boolean,
		title: String,
		isEditDialog: Boolean,
		fieldsToEdit: { type: Object, default: () => {} }
	},

	data: () => ({
		open: false,
		name: null,
		description: null,
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
				description: this.description,
			}
			this.$emit('save', fields_to_save)
		},

		update_fields({fields}) {
			const new_fields = {...fields}
			this.name = new_fields.name
			this.description = new_fields.description
			this.slug = new_fields.slug
		},

		clear_and_close() {
			this.name = ''
			this.description = ''
			this.cancel() //close the modal
		}

	}


}