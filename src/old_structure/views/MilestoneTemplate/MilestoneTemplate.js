import CustomTable from '@/common/CustomTable/CustomTable.vue'
import { table_functionality } from "@/services/table-functionality"
import MilestoneTemplateDialog from '@/common/MilestoneTemplateDialog/MilestoneTemplateDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'

export default {
	name: 'MilestoneTemplate',
	mixins: [table_functionality],
	components: { CustomTable, MilestoneTemplateDialog, DeleteDialog },
	data: () => ({
		headers: [
			{ text: 'Name', value: 'name' },
			{ text: 'Status',  value: 'status' },
			{ text: 'Action',  value: 'action' },
		],
		table_config: {
			route_name: 'templates',
			add_message: 'New Template added successfully!',
			update_message: 'Template updated successfully!',
			delete_message: 'Template deleted successfully!'
		},
	}),
	created() {
		this.fill_table('get_milestone_templates', true)
	},

	methods: {
		navigate_to_milestone_page(item) {
			this.$router.push({ name: 'templates/milestone', params: {id: item.id }})
		}
	}

}