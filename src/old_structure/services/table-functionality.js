import makeRequestTo from '@/services/makeRequestTo'

export const table_functionality = {

	data: () => ({
		edit_dialog: false,
		add_dialog: false,
		delete_dialog: false,
		loading: false,
		items: [],
		total_items: 0,
		items_response: null,
		edit_item: {
			id: null,
			fields: null
		},
		delete_item_id: null,
	}),

	methods: {

		add_item(api_name, item, dynamic_api = null) {
			makeRequestTo[api_name](item, dynamic_api)
				.then(response => {
					this.items.unshift(response.data)
					this.add_dialog = false
					this.$event.$emit('open_snackbar', this.table_config.add_message, 'red', 'success')
				})
		},
		
		update_item(api_name, item, dynamic_api = null) {
			makeRequestTo[api_name](this.edit_item.id, item, dynamic_api)
				.then(response => {
					const index = this.items.findIndex(data_item => data_item.id === response.data.id)
					if (~index)
					 this.items.splice(index, 1, response.data)
					this.edit_item = {
						id: null,
						fields: null
					}
					this.edit_dialog = false
					this.$event.$emit('open_snackbar', this.table_config.update_message, 'red', 'success')
				})
		},

		delete_item(api_name, dynamic_api = null) {
			makeRequestTo[api_name](this.delete_item_id, dynamic_api)
				.then(response => {
					const index = this.items.findIndex(data_item => data_item.id === this.delete_item_id)
					console.log(index)
					if (~index)
						this.items.splice(index, 1)
					this.delete_item_id = null
					this.delete_dialog = false
					this.$event.$emit('open_snackbar', this.table_config.delete_message, 'red', 'success')
				})
		},

		open_edit_dialog(item) {
			this.edit_dialog = true
			this.$set(this.edit_item, 'id', item.id)
			this.$set(this.edit_item, 'fields', item)
		},

		open_delete_dialog(item) {
			this.delete_dialog = true
			this.delete_item_id = item.id
		},


		fill_table(api_name, nested_response = false, dynamic_api = null) {
			this.loading = true
			makeRequestTo[api_name](dynamic_api)
				.then(response => {
					this.loading = false
					if (nested_response) {
						this.items = this.items_response = response.data.data
					}else {
						this.items = this.items_response = response.data
					}
				})
		},

	}

}