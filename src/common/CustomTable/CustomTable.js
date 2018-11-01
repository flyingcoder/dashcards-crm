export default {
	name: 'CustomTable',
	inheritAttrs: false,
	props: [
		'headers',
		'items',
		'loading',
		'has-checkbox',
		'has-header-icon',
		'sort'
	],

	data: () => ({
		selected: [],
	}),

	watch: {

		selected(newVal) {
			const selected_ids = newVal.map(item => item.id)
			this.$emit('items-selected', selected_ids)
		}

	},

	methods: {

		toggleAll () {
			if (this.selected.length) this.selected = []
			else this.selected = this.items.slice()
		},

		changeSort (column) {
			this.$emit('sorted', column)
		}

	},
}