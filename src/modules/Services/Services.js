import makeRequestTo from '@/services/makeRequestTo'
import { table_functionality } from "@/services/table-functionality";
import isEmpty from 'lodash/isEmpty'

//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import Breadcrumb from '@/common/Breadcrumb.vue'
import ServicesAddDialog from './components/ServicesAddDialog/ServicesAddDialog.vue'
import ServicesEditDialog from './components/ServicesEditDialog/ServicesEditDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'

export default {
	name: 'Services',
	mixins: [table_functionality],
	components: { CustomTable, Breadcrumb, ServicesAddDialog, ServicesEditDialog, DeleteDialog },

	data () {
		return {
			paths: [
				{text: 'Dashboard', disabled: false, router_name: 'default-content'},
				{text: 'Services', disabled: true, router_name: null}
			],
			headers: [
				{ id: 1, text: 'Service', value: 'service', sortable: true, align: 'left' },
				{ id: 2, text: 'Created By', value: 'created_by', sortable: true, align: 'left' },
				{ id: 3, text: 'Date Created', value: 'date_created', sortable: true, align: 'left' },
			],
			table_config: {
				route_name: 'services',
				add_message: 'New Service(s) added successfully!',
				update_message: 'Service updated successfully!',
				delete_message: 'Service deleted successfully!'
			},
		}
	},

	created () {
		this.fill_table('get_services', true)
  },

	methods: {

		toggleAll () {
			if (this.selected.length) this.selected = []
			else this.selected = this.items.slice()
		},

	},
}