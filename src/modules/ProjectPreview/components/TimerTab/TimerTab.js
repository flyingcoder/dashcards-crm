import { table_functionality } from "@/services/table-functionality";
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'

export default {
	name: 'TimerTab',
	mixins: [table_functionality],
	components: {
		CustomTable
	},

	data: () => ({
		sortList: [
			{ title: 'Sort by Client', },
			{ title: 'Sort by Task', },
			{ title: 'Sort by Services', },
			{ title: 'Sort by Time', },
			{ title: 'Sort by Date', }
		],
		headers: [
			{text: 'Client', value: 'client', sortable: true, align: 'left'},
			{text: 'Task', value: 'task', sortable: true, align: 'left'},
			{text: 'Service', value: 'service', sortable: true, align: 'left'},
			{text: 'Time Start', value: 'time_start', sortable: true, align: 'left'},
			{text: 'Time End', value: 'time_end', sortable: true, align: 'left'},
			{text: 'Total Time', value: 'total_time', sortable: true, align: 'left'},
			{is_action: true},
		],
    }),
    
    created() {
		this.$router.replace({ name: 'project_preview', query: { tab: 'Timer' }})
	},

}