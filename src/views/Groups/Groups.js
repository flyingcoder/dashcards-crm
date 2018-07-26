import makeRequestTo from '@/services/makeRequestTo'

export default {
  name: 'Groups',
	data () {
		return {
			loading: false,
		  headers: [
        { id: 1, text: 'ID', value: 'id', width: '5%' },
        { id: 2, text: 'Group Name', value: 'group_name', width: '5%' },
        { id: 3, is_action: true, width: '90%' },
      ],
			groups: null,
			pagination: {
				sortBy: 'id',
			}
		}
	},

  created() {
		this.get_data_from_api()
  },

	watch: {
  	'pagination.page'(new_page) {
			this.$router.push({ name: 'team/groups', query: { page: new_page }})
			this.get_data_from_api(new_page)
		},
		'$route.query'(query) {
			if(query && query.page) {
				this.pagination.page = query.page
			}
		}
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
    	let config = {"text":"$vuetify.dataIterator.rowsPerPageAll","value":-1}
    	if (this.total_items < 10)
    		return [8, {"text":"$vuetify.dataIterator.rowsPerPageAll","value":-1}]
			else
				return [10, {"text":"$vuetify.dataIterator.rowsPerPageAll","value":-1}]
		}
  },

  methods: {
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
		}
  }
}