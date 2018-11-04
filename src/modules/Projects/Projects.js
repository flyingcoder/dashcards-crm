import { table_functionality } from "@/services/table-functionality";

//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import Breadcrumb from '@/common/Breadcrumb.vue'

export default {
	name: 'Projects',
	mixins: [table_functionality],
	components: { CustomTable, Breadcrumb },

	data: () => ({
		paths: [
			{text: 'Dashboard', disabled: false},
			{text: 'Projects', disabled: true}
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