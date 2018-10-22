export default {
	name: 'CustomTable',
	props: [
		'headers',
		'items',
		'loading',
		'total-items',
		'rows-per-page-items',
		'has-checkbox',
		'table-action-disabled',
		'has-header-icon',
		'pagination'
	],

	data: () => ({
		table_pagination: {},
		selected: [],
	}),

	watch: {

		table_pagination(new_val) { this.$emit('update:pagination', new_val) }

	},

	methods: {

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