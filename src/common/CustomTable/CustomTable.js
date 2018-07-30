export default {
	name: 'CustomTable',

	data: () => ({
		pagination: null,
		selected: [],
	}),

	methods: {
		toggleAll () {
			if (this.selected.length) this.selected = []
			else this.selected = this.items.slice()
		},
	}
}