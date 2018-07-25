import makeRequestTo from '@/services/makeRequestTo'

export default {
  name: 'Groups',
	data () {
		return {
			loading: false,
		  headers: [
        { id: 1, text: 'ID', value: 'id', width: '5%' },
        { id: 2, text: 'Group Name', value: 'group_name', width: '5%' },
        { id: 4, is_action: true, width: '90%' },
      ],
			groups: null,
			pagination: {
				sortBy: 'id'
			}
		}
	},

  created() {
		this.get_data_from_api()
  },

	watch: {
  	pagination: {
  		handler() {
  			//do pagination
			},
			deep: true
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
    }
  },

  methods: {
  	get_data_from_api() {
  		this.loading = true
			makeRequestTo.get_groups()
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