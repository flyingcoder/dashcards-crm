import {table_functionality} from "@/services/table-functionality";
import isEmpty from "lodash/isEmpty";
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue';
import Breadcrumb from '@/common/Breadcrumb.vue'
import PermissionsDialog from './components/PermissionsDialog/PermissionsDialog.vue'

export default {
	name: 'PermissionsTable',
	mixins: [table_functionality],
	components: {
		CustomTable, Breadcrumb, PermissionsDialog
	},

	data: () => ({
		paths: [
			{ text: 'Dashboard', disabled: false, router_name: 'default-content' },
			{ text: 'Permissions', disabled: true, router_name: null }
		],
		headers: [
			{ text: 'Name', value: 'name', sortable: true, align: 'left' },
			{ text: 'Description', value: 'description', sortable: true, align: 'left' },
			{ text: 'Capability', value: 'capability', sortable: true, align: 'left' },
		],
		table_config: {
			route_name: 'settings',
			add_message: 'New Permission added successfully!',
			update_message: 'Permission updated successfully!',
			delete_message: 'Permission deleted successfully!',
			refresh_table_message: 'Table refreshed',
			refresh_table_api_name: 'paginate_permissions_table'
		},
	}),

	created () {
		const query = { ...this.$route.query }
		delete query.tab
		if (isEmpty(query)) {
			this.fill_table('get_permissions', true)
		}else {
			this.update_table_actions(query)
		}
	},

	watch: {
		api_query(query) {
			this.$router.push({ name: this.table_config.route_name, query: {
				  tab: 'permissions',
					page: this.page,
					per_page: this.rows_per_page,
					search: this.search,
					sort: this.query_for_sorting
				}})
			this.loading = true
			this.refresh_table(query)
		},
	},

	methods: {

		toggleAll () {
			if (this.selected.length) this.selected = []
			else this.selected = this.items.slice()
		},

	},

}