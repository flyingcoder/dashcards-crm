import CustomTable from '@/common/CustomTable/CustomTable.vue'
import MilestoneDialog from '@/common/MilestoneDialog/MilestoneDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'

import { table_functionality } from "@/services/table-functionality"

export default {
	name: 'Milestone',
	mixins: [table_functionality],
	components: { CustomTable, MilestoneDialog, DeleteDialog },

	props: {
		id: [Number, String], //route param
	},

	data: () => ({
		headers: [
			{ text: 'Title', value: 'title' },
			{ text: 'Status',  value: 'status' },
			{ text: 'Days',  value: 'days' },
			{ text: 'Action',  value: 'action' },
		],
		table_config: {
			route_name: 'templates/milestone',
			add_message: 'New Milestone added successfully!',
			update_message: 'Milestone updated successfully!',
			delete_message: 'Milestone deleted successfully!',
		},
	}),

	computed: {
		dynamic_api() {
			return `api/template/${this.id}/milestone`
		}
	},

	created() {
		this.fill_table('get_milestones', true, this.dynamic_api)
	}


}