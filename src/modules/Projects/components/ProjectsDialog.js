// vue-quill-editor require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
	name: 'ProjectsDialog',
	components: {
		quillEditor
	},

	props: {
		dialog: Boolean,
		title: String,
		isEditDialog: Boolean,
		fieldsToEdit: { type: Object, default: () => {} }
	},

	data: () => ({
		open: false,
		quill_editor: {
			content: '',
			editorOption: {
				placeholder: "Add description",
				modules: {
					toolbar: [
						['bold', 'italic', 'underline', 'strike'],
						['link', 'image'],
						[{ 'align': [] }],
					],
				}
			}
		}
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
			}
			this.$emit('save', fields_to_save)
		},

		update_fields({fields}) {
			const new_fields = {...fields}
		},

		clear_and_close() {
			this.cancel() //close the modal
		}

	}


}