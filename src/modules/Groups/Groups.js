import {table_functionality} from "@/services/table-functionality";

//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import TableHeader from '@/common/TableHeader.vue'
import GroupsDialog from './components/GroupsDialog/GroupsDialog.vue'

export default {
	name: 'Groups',
	mixins: [table_functionality],
	components: {
		PermissionsDialog: () => import('./components/PermissionsDialog/PermissionsDialog.vue'),
		CustomTable, GroupsDialog, TableHeader
	},

	data: () => ({
		permissions_dialog: '',
		paths: [
			{text: 'Dashboard', disabled: false, router_name: 'default-content'},
			{text: 'Groups', disabled: true, router_name: null}
		],
		headers: [
			{id: 1, text: 'ID', value: 'id', width: '5%'},
			{id: 2, text: 'Group Name', value: 'group_name', width: '5%'},
			{id: 3, text: 'Description', value: 'description', width: '5%'},
			{id: 4, is_action: true, width: '85%'},
		],
		table_config: {
			route_name: 'team/groups',
			add_message: 'New Group added successfully!',
			update_message: 'Group updated successfully!',
			delete_message: 'Group deleted successfully!',
			refresh_table_message: 'Table refreshed',
			refresh_table_api_name: 'paginate_groups_table'
		},
	}),

	created() {
		this.fill_table('get_groups', true)
	},

	methods: {

		action_clicked(action, {id, name, description}) {
			console.log(action)
			if (action === 'edit_settings') {
				this.open_edit_dialog({ id, name, description })
			} else if (action === 'delete_group') {
				this.delete_item_id = id
				this.delete_group_dialog = true
			} else if (action === 'permissions') {
				this.permissions_dialog = 'PermissionsDialog'
			}
		},

		get_actions(group_slug) {
			if (group_slug.includes('default-admin'))
				return [{
					text: 'Group',
					value: 'group_members',
					tooltip: 'Group Members'
				},]
			else
				return [
					{
						text: 'Permissions',
						value: 'permissions',
						tooltip: 'Permissions',
						icon: require(`@/${'assets/icons/groups/permissions.svg'}`)
					},
					{
						text: 'Migrate',
						value: 'migrate_members',
						tooltip: 'Migrate Members',
						icon: require(`@/${'assets/icons/groups/migrate.svg'}`)
					},
					{
						text: 'Group',
						value: 'group_members',
						tooltip: 'Group Members',
						icon: require(`@/${'assets/icons/groups/members.svg'}`)
					},
					{
						text: 'Edit',
						value: 'edit_settings',
						tooltip: 'Edit Settings',
						icon: require(`@/${'assets/icons/groups/edit.svg'}`)
					},
					{
						text: 'Delete',
						value: 'delete_group',
						tooltip: 'Delete Group',
						icon: require(`@/${'assets/icons/groups/delete.svg'}`)
					},
				]
		},

	},

}





// import makeRequestTo from '@/services/makeRequestTo'
// import debounce from 'lodash/debounce'
// import isEmpty from 'lodash/isEmpty'
// //Compoenents
// import CustomTable from '@/common/CustomTable/CustomTable.vue'
// import DeleteDialog from '@/common/DeleteDialog.vue'
// import Breadcrumb from '@/common/Breadcrumb.vue'
// import GroupsDialog from './components/GroupsDialog/GroupsDialog'
//
//
// export default {
//   name: 'Groups',
// 	components: {
//   	CustomTable,
// 		GroupsDialog,
// 		DeleteDialog,
// 		Breadcrumb,
// 		PermissionsDialog: () => import('./components/PermissionsDialog/PermissionsDialog.vue')
// 	},
//
// 	data () {
// 		return {
// 			permissions_dialog: '',
// 			add_new_group_dialog: false,
// 			edit_group_dialog: false,
// 			delete_group_dialog: false,
// 			paths: [
// 				{ text: 'Dashboard', disabled: false, router_name: 'default-content' },
// 				{ text: 'Groups', disabled: true, router_name: null }
// 			],
// 			loading: false,
// 		  headers: [
//         { id: 1, text: 'ID', value: 'id', width: '5%' },
//         { id: 2, text: 'Group Name', value: 'group_name', width: '5%' },
//         { id: 3, text: 'Description', value: 'description', width: '5%' },
//         { id: 4, is_action: true, width: '85%' },
//       ],
// 			groups: null,
// 			pagination: {
// 				sortBy: 'id',
// 				page: 1
// 			},
// 			edit_item: {
// 				id: null,
// 				name: null,
// 				description: null
// 			},
// 			delete_item_id: null,
// 			current_page: null,
// 			search: null,
// 		}
// 	},
//
// 	watch: {
//
// 		current_page(new_page) {
//   		let query = { page: new_page }
//   		if (this.search) query.search = this.search
//
// 			this.$router.push({ name: 'team/groups', query: query })
// 			this.get_data_from_api(new_page)
// 		},
// 		search: 'debounce',
//
// 		'pagination.page'(new_val) {
// 			this.$router.replace({ name: 'team/groups', query: { page: new_val } })
// 		},
//
// 		'$route.query': {
// 			handler(query) {
// 				if (isEmpty(query)) //if we don't have query
// 					this.get_data_from_api('page=1')
//
// 				const query_fe = Object.assign({}, query)
// 				let query_api = {}
//
// 				if ('page' in query_fe)
// 					query_api.page = query_fe.page
// 				if ('sort' in query_fe)
// 					query_api.sort = query_fe.sort
// 				if ('search' in query_fe) {
// 					this.search = query_fe.search
// 					query_api.search = query_fe.search
// 				}
//
// 				if (isEmpty(query_api)) //if query does not have page or sort or search
// 					return
//
// 				const api_url = this.get_api_url_from_query(query_api)
// 				this.get_data_from_api(api_url)
// 			},
// 			immediate: true
// 		}
//
// 	},
//
//   computed: {
// 		rows() {
// 			if (this.groups)
// 				return this.groups.data
// 		},
// 		total_items() {
// 			if (this.groups)
// 				return this.groups.total
// 			return 0
// 		},
// 	  //Note don't delete until make sure it is not needed anymore
// 		// rows_per_page() {
// 		// 	if (this.total_items > 10) {
// 		// 		let items = [10]
// 		// 		if (this.total_items / 15 >= 1) items.push(15)
// 		// 		if (this.total_items < 25 && this.total_items > 15) items.push(this.total_items)
// 		// 		if (this.total_items > 25) items.push(25)
// 		//
// 		// 		return items
// 		// 	}
// 		// 	return [5]
// 		// },
// 	},
//
//   methods: {
//
// 		debounce: debounce(function(value) {
// 			this.$router.push({ name:'team/groups', query: { search: value } })
// 		}, 500),
//
// 	  get_api_url_from_query(query) {
// 		  return Object.keys(query).reduce((api_url, current_key, index) => {
// 			  if (index > 0)
// 				  api_url += '&'
// 			  api_url += `${current_key}=${query[current_key]}`
// 			  return api_url
// 		  }, '')
// 	  },
//
//   	get_data_from_api(api_url) {
//   		this.loading = true
// 			makeRequestTo.get_groups(api_url)
// 				.then(response => {
// 					this.loading = false
// 					this.groups = response.data
// 				})
// 		},
//
//     get_actions(group_slug) {
//       if (group_slug.includes('default-admin'))
//         return [{ text: 'Group', value: 'group_members', tooltip: 'Group Members' },]
//       else
//         return [
//           { text: 'Permissions', value: 'permissions', tooltip: 'Permissions', icon: require(`@/${'assets/icons/groups/permissions.svg'}`) },
//           { text: 'Migrate', value: 'migrate_members', tooltip: 'Migrate Members', icon: require(`@/${'assets/icons/groups/migrate.svg'}`) },
//           { text: 'Group', value: 'group_members', tooltip: 'Group Members', icon: require(`@/${'assets/icons/groups/members.svg'}`)  },
//           { text: 'Edit', value: 'edit_settings', tooltip: 'Edit Settings', icon: require(`@/${'assets/icons/groups/edit.svg'}`) },
//           { text: 'Delete', value: 'delete_group', tooltip: 'Delete Group', icon: require(`@/${'assets/icons/groups/delete.svg'}`) },
//         ]
//     },
//
// 		changeSort (column) {
// 			if (this.pagination.sortBy === column) {
// 				this.pagination.descending = !this.pagination.descending
// 			} else {
// 				this.pagination.sortBy = column
// 				this.pagination.descending = false
// 			}
// 		},
//
// 		action_clicked(action, { id, name, description }) {
// 			if (action === 'edit_settings') {
// 				this.edit_group_dialog = true
// 				this.edit_item.id = id
// 				this.edit_item.name = name
// 				this.edit_item.description = description
// 			}else if (action === 'delete_group') {
// 				this.delete_item_id = id
// 				this.delete_group_dialog = true
// 			}else if (action === 'permissions') {
// 				this.permissions_dialog = 'PermissionsDialog'
// 			}
//
// 		},
//
// 	  add_new_group(payload) {
// 		  makeRequestTo.add_new_group(payload)
// 			  .then(response => {
// 				  this.groups.data.unshift(response.data)
// 				  this.$event.$emit('open_snackbar', 'Group Added Successfully!')
// 				  this.$refs.add_group_dialog.clear_fields()
// 			  })
// 	  },
//
// 	  update_group(payload) {
// 		  makeRequestTo.update_group(this.edit_item.id, payload)
// 			  .then(response => {
// 				  const groups = this.groups.data.map(item => {
// 				  	if (item.id === this.edit_item.id)
// 				  		item = response.data
// 					  return item
// 				  })
// 				  this.groups.data = groups
// 				  this.$event.$emit('open_snackbar', 'Group updated successfully!')
// 				  this.$refs.edit_group_dialog.clear_fields()
// 			  })
// 	  },
//
// 	  delete_group() {
// 			makeRequestTo.delete_group(this.delete_item_id)
// 				.then(response => {
// 					const groups = this.groups.data.filter(group => group.id !== this.delete_item_id)
// 					this.groups.data = groups
// 					this.$event.$emit('open_snackbar', 'Group Deleted Successfully!')
// 					this.delete_group_dialog = false
// 					this.delete_item_id = null
// 				})
// 	  }
//
//   },
// }