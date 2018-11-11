// vue-quill-editor require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
//Components
import AutoComplete from './AutoComplete'
import makeRequesTo from '@/services/makeRequestTo'

export default {
	name: 'ProjectsDialog',
	components: {
		quillEditor, AutoComplete
	},

	props: {
		dialog: Boolean,
		title: String,
	},

	data: () => ({
		open: false,
		client: {
			selected: null,
			items: []
		},
		is_autocomplete_loading: false,
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
		},
	}),

	watch: {
		dialog(new_val) { this.open = new_val },
		open(new_val) { this.$emit('update:dialog', new_val) },
	},

	methods: {

		cancel() { this.open = false },
		save() {
			const fields_to_save = {
			}
			this.$emit('save', fields_to_save)
		},

		clear_and_close() {
			this.cancel() //close the modal
		},

		get_searched_items(action, keyword) {
			this.is_autocomplete_loading = true
			makeRequesTo.fill_dropdown(action, keyword)
				.then(response => this.update_items(response.data, action))
				.finally(() => this.is_autocomplete_loading = false)
		},

		update_items(new_items, action) {
			let items = []
			new_items.forEach(({id, first_name, last_name}) => {
				items.push({text: `${first_name} ${last_name}`, value: id})
			})
			this[action].items = items
		}

	}


}