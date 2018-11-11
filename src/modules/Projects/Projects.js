import { table_functionality } from "@/services/table-functionality";

//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import Breadcrumb from '@/common/Breadcrumb.vue'
import TableHeader from '@/common/TableHeader.vue'
import AddProjectDialog from './components/AddProjectDialog/AddProjectDialog.vue'

export default {
	name: 'Projects',
	mixins: [table_functionality],
	components: {
		CustomTable, Breadcrumb, TableHeader, AddProjectDialog
	},

	data: () => ({
		paths: [
			{ text: 'Dashboard', disabled: false, router_name: 'default-content' },
			{ text: 'Projects', disabled: true, router_name: null }
		],
		headers: [
			{text: 'Service', value: 'project', sortable: true, align: 'left'},
			{text: 'Client', value: 'client', sortable: true, align: 'left'},
			{ text: 'Project Manager', value: 'project', sortable: true, align: 'left'},
			{text: 'Start Date', value: 'start-date', sortable: true, align: 'left'},
			{text: 'Progress', value: 'progress', sortable: true, align: 'left'},
			{text: 'Time Spent', value: 'time-spent', sortable: true, align: 'left'},
			{text: 'Status', value: 'status', sortable: true, align: 'left'},
		],
	}),
}