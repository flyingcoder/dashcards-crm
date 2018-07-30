export default {
	name: 'CustomTable',

	data: () => ({
		pagination: {
			sortBy: 'name'
		},
		selected: [],
	}),

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
	}
}