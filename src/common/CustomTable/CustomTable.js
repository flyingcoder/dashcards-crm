export default {
	name: 'CustomTable',
	props: ['headers', 'items', 'loading', 'total-items', 'rows-per-page-items', 'has-checkbox'],

	data: () => ({
		pagination: {},
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

	},
}


// export default {
// 	name: 'CustomTable',
//
// 	data: () => ({
// 		pagination: null,
// 		selected: [],
// 	}),
//
// 	methods: {
// 		toggleAll () {
// 			if (this.selected.length) this.selected = []
// 			else this.selected = this.items.slice()
// 		},
// 	}
// }