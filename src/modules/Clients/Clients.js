//Components
import Breadcrumb from '@/common/Breadcrumb.vue'
import ClientsTable from './components/ClientsTable/ClientsTable.vue'

export default {
	name: 'Clients',
	components: {
		Breadcrumb, ClientsTable
	},

	data: () => ({
		paths: [
			{text: 'Dashboard', disabled: false, router_name: 'default-content'},
			{text: 'Clients', disabled: true, router_name: null}
		],
		add_dialog: false
	}),

}