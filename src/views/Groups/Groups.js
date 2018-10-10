//TODO refactor this component
import makeRequestTo from '@/services/makeRequestTo'
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import GroupsDialog from '@/common/GroupsDialog/GroupsDialog.vue'
import _ from 'lodash'

export default {
  name: 'Groups',
	components: {CustomTable, GroupsDialog},

	data () {
		return {
			add_new_group_dialog: false,
			edit_group_dialog: false,
			delete_group_dialog: false,
			loading: false,
		  headers: [
        { id: 1, text: 'ID', value: 'id', width: '5%' },
        { id: 2, text: 'Group Name', value: 'group_name', width: '5%' },
        { id: 3, text: 'Description', value: 'description', width: '5%' },
        { id: 4, is_action: true, width: '85%' },
      ],
			groups: null,
			pagination: {
				sortBy: 'id',
			},
			edit_item: {
				id: null,
				name: null,
				description: null
			},
			delete_item_id: null,
			current_page: null,
			search: null,
		}
	},

	watch: {
		current_page(new_page) {
  		let query = { page: new_page }
  		if (this.search) query.search = this.search

			this.$router.push({ name: 'team/groups', query: query })
			this.get_data_from_api(new_page)
		},
		search(new_value) {
			this.$router.push({ name:'team/groups', query: { search: new_value } })
			this.debounce(new_value)
		},
		'$route.query': {
  		handler(query) {
				if(query.page || query.search) {
					
					if (query.page)	{
						this.current_page = Number(query.page)
					}
					
					if (query.search) {
						this.search = query.search
					}
					
				}else {
					this.get_data_from_api()
				}
			},
			deep: true,
			immediate: true
		},
	},

  computed: {
		rows() {
			if (this.groups)
				return this.groups.data
		},
		total_items() {
			if (this.groups)
				return this.groups.total
			return 0
		},
		rows_per_page() {
			if (this.total_items > 10) {
				let items = [10]
				if (this.total_items / 15 >= 1) items.push(15)
				if (this.total_items < 25 && this.total_items > 15) items.push(this.total_items)
				if (this.total_items > 25) items.push(25)

				return items
			}
			return [5]
		},
	},

  methods: {

		debounce: _.debounce(function(value) {
			if (!value) {
				this.get_data_from_api()
				return
			}
			this.loading = true
			makeRequestTo.get_searched_groups(value)
				.then(response => {
					this.loading = false
					this.groups = response.data
				})
		}, 500),

  	get_data_from_api(page = 1) {
  		this.loading = true
			makeRequestTo.get_groups(page)
				.then(response => {
					this.loading = false
					this.groups = response.data
				})
		},

    get_actions(group_slug) {
      if (group_slug.includes('default-admin'))
        return [{ text: 'Group', value: 'group_members', tooltip: 'Group Members' },]
      else
        return [
          { text: 'Permissions', value: 'permissions', tooltip: 'Permissions', icon: require(`@/${'assets/icons/groups/permissions.svg'}`) },
          { text: 'Migrate', value: 'migrate_members', tooltip: 'Migrate Members', icon: require(`@/${'assets/icons/groups/migrate.svg'}`) },
          { text: 'Group', value: 'group_members', tooltip: 'Group Members', icon: require(`@/${'assets/icons/groups/members.svg'}`)  },
          { text: 'Edit', value: 'edit_settings', tooltip: 'Edit Settings', icon: require(`@/${'assets/icons/groups/edit.svg'}`) },
          { text: 'Delete', value: 'delete_group', tooltip: 'Delete Group', icon: require(`@/${'assets/icons/groups/delete.svg'}`) },
        ]
    },

		changeSort (column) {
			if (this.pagination.sortBy === column) {
				this.pagination.descending = !this.pagination.descending
			} else {
				this.pagination.sortBy = column
				this.pagination.descending = false
			}
		},

		action_clicked(action, { id, name, description }) {
			if (action === 'edit_settings') {
				this.edit_group_dialog = true
				this.edit_item.id = id
				this.edit_item.name = name
				this.edit_item.description = description
			}else if (action === 'delete_group') {
				this.delete_item_id = id
				this.delete_group_dialog = true
			}

		},

	  add_new_group(payload) {
		  makeRequestTo.add_new_group(payload)
			  .then(response => {
				  this.groups.data.push(response.data)
				  this.$event.$emit('open_snackbar', 'Group Added Successfully!')
				  this.$refs.add_group_dialog.clear_fields()
			  })
	  },

	  update_group(payload) {
		  makeRequestTo.update_group(this.edit_item.id, payload)
			  .then(response => {
				  const groups = this.groups.data.map(item => {
				  	if (item.id === this.edit_item.id)
				  		item = response.data
					  return item
				  })
				  this.groups.data = groups
				  this.$event.$emit('open_snackbar', 'Group updated successfully!')
				  this.$refs.edit_group_dialog.clear_fields()
			  })
	  },

	  delete_group() {
			makeRequestTo.delete_group(this.delete_item_id)
				.then(response => {
					const groups = this.groups.data.filter(group => group.id !== this.delete_item_id)
					this.groups.data = groups
					this.$event.$emit('open_snackbar', 'Group Deleted Successfully!')
					this.$refs.delete_group_dialog.clear_fields()
				})
	  }

  },
}