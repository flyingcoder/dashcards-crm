// vue-quill-editor require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
//Components
import AutoComplete from '../AutoComplete'
import makeRequestTo from '@/services/makeRequestTo'
import DatePickers from '../DatePickers/DatePickers.vue' //used for Due Date field
import MembersDropdown from '../MembersDropdown/MembersDropdown.vue'

export default {
	name: 'AddProjectDialog',
	components: {
		quillEditor, AutoComplete, DatePickers, MembersDropdown
	},

	props: {
		dialog: Boolean,
		title: String,
	},

	data: () => ({
		open: false,
		client: {
			selected: null,
			items: [],
			loading: false
		},
		service: {
			selected: null,
			items: [],
			loading: false
		},
		members: [],
		location: '',
		comment: '',
		date_pickers: {
			start_date: '',
			end_date: ''
		},
		project_title: '',
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
				title: this.project_title,
				client_id: this.client.selected.value || null,
				service_id: this.service.selected.value || null,
				start_at: this.date_pickers.start_date,
				end_at: this.date_pickers.end_date,
				location: this.location,
				description: this.quill_editor.content,
				comment: this.comment,
				members: this.members
			}
			this.$emit('save', fields_to_save)
		},

		clear_and_close() {
			this.$data = Object.assign(this.$data, this.$options.data.apply(this))
			this.cancel() //close the modal
		},

		get_searched_items(action, keyword, is_service = false) {
			this[action].loading = true
			makeRequestTo.fill_dropdown(action, keyword)
				.then(response => this.update_items(response.data, action, is_service))
				.finally(() => this[action].loading = false)
		},

		update_items(new_items, action, is_service) {
			if (is_service) {
				this.update_service_items(new_items, action)
				return
			}
			let items = []
			new_items.forEach(({id, first_name, last_name}) => {
				items.push({text: `${first_name} ${last_name}`, value: id})
			})
			this[action].items = items
		},

		update_service_items(new_items, action) {
			let items = []
			new_items.forEach(({id, service_name}) => {
				items.push({text: `${service_name}`, value: id})
			})
			this[action].items = items
		}

	}


}