import makeRequestTo from '@/services/makeRequestTo'
import CustomTable from '@/common/CustomTable/CustomTable.vue'

export default {
	name: 'Services',
	components: { CustomTable },

	data () {
		return {
			loading: false,
			headers: [
				{ id: 1, text: 'Service', value: 'service', sortable: true, align: 'left' },
				{ id: 2, text: 'Created By', value: 'created_by', sortable: true, align: 'left' },
				{ id: 3, text: 'Company', value: 'company', sortable: true, align: 'left' },
				{ id: 4, text: 'Date Created', value: 'date_created', sortable: true, align: 'left' },
				{ id: 5, text: 'Icon', value: 'delete', sortable: false, align: 'center' },
			],
			items:[ //TODO dynamic fill the items
				{
					id: 1,
					service: 'Service',
					created_by: { text: 'John Doe', icon: require(`@/assets/temp/user.png`) },
					company: 'Company',
					date_created: 'Date Created',
				}
			],
			services: [],
			pagination: {},

			search: '',
			selected: [],
		}
	},
	
	created() {
		this.get_data_from_api()
	},

	computed: {
		total_items() {
			return this.services.total
		},
		table_action_disabled() {
			return this._.isEmpty(this.selected)
		}
	},

	methods: {

		get_data_from_api() {
			this.loading = true
			makeRequestTo.get_services()
				.then(response => {
					this.loading = false
					//TODO fill the table with api data
					console.log(response.data)
				})
		},

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
		}

	},
}