import CustomTable from '@/common/CustomTable/CustomTable.vue'
import { table_functionality } from "@/services/table-functionality"
import MilestoneDialog from '@/common/MilestoneDialog/MilestoneDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'

export default {
	name: 'Milestone',
	mixins: [table_functionality],
	components: { CustomTable, MilestoneDialog, DeleteDialog },
	data: () => ({
		headers: [
			{ text: 'Name', value: 'name' },
			{ text: 'Status',  value: 'status' },
			{ text: 'Action',  value: 'action' },
		],
		table_config: {
			route_name: 'milestones',
			add_message: 'New Milestone added successfully!',
			update_message: 'Milestone updated successfully!',
			delete_message: 'Milestone deleted successfully!'
		}
	}),
	created() {
		this.fill_table('get_milestones', true)
	},
}