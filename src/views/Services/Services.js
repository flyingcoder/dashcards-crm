import makeRequestTo from '@/services/makeRequestTo'
import CustomField from '@/common/CustomField/CustomField.vue'
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import {validations} from "./local-mixins/validations"

export default {
	name: 'Services',
	mixins: [validations],
	components: { CustomTable, CustomField },

	data () {
		return {
			dialog: false,
			loading: false,
			page: 1,
				paths: [
				{ text: 'Dashboard', disabled: false },
				{ text: 'Services', disabled: true }
			],
			headers: [
				{ id: 1, text: 'Service', value: 'service', sortable: true, align: 'left' },
				{ id: 2, text: 'Created By', value: 'created_by', sortable: true, align: 'left' },
				{ id: 3, text: 'Company', value: 'company', sortable: true, align: 'left' },
				{ id: 4, text: 'Date Created', value: 'date_created', sortable: true, align: 'left' },
				// { id: 5, text: 'Icon', value: 'delete', sortable: false, align: 'center' },
			],
			services: [],
			pagination: {},

			form_edit: -1,
			name: {
				text: '',
					is_valid: true,
					error_messages: ['Service Name is required'],
					validations: ['required']
				},
			form:{
				name: '',
			},

			search: '',
			selected: [],
		}
	},

	computed: {
		
	  },
	
	created () {
		makeRequestTo.get_services()
		  .then(response => {
			this.services = response.data.data
		  })
	  },

	computed: {
		form_title () {
			return this.form_edit === -1 ? 'New Service' : 'Edit Service'
		},

		total_items() {
			return this.services.total
		},
		table_action_disabled() {
			return this._.isEmpty(this.selected)
		}
	},

	methods: {

		// get_data_from_api() {
		// 	this.loading = true
		// 	makeRequestTo.get_services()
		// 		.then(response => {
		// 			this.loading = false
		// 			//TODO fill the table with api data
		// 			console.log(response.data)
		// 		})
		// },

		toggleAll () {
			if (this.selected.length) this.selected = []
			else this.selected = this.items.slice()
		},

		changeSort (column) {
			if (this.pagination.sortBy === column) {
				this.pagination.descending = !this.pagination.descending
			} else {
				this.pagination.sortBy = column
				this.pagination.descending = false
			}
		},

		editItem (item) {
			this.form_edit = this.services.indexOf(item)
			this.form = Object.assign({}, item)
			this.dialog = true
		},

		deleteItem (item) {
			const index = this.services.indexOf(item)
			confirm('Are you sure you want to delete this item?') && this.services.splice(index, 1)
		},

		close () {
			this.dialog = false
			setTimeout(() => {
			  this.form = Object.assign({}, this.form)
			  this.form_edit = -1
			}, 300)
		},

		save () {

			if (this.all_validations_passed()) {
				const fields = {
					name: this.name.text,
				}
				makeRequestTo.post_services(fields)
				console.log(fields)
				console.log('pass')
			}
			else{
				console.log('fail')
			}
		}

	},
}