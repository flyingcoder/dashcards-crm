import { table_functionality } from "@/services/table-functionality"
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import TableHeader from '@/common/TableHeader.vue'
import MilestoneTemplateDialog from './components/MilestoneTemplateDialog/MilestoneTemplateDialog.vue'

export default {
	name: 'MilestoneTemplate',
	mixins: [table_functionality],
	components: { CustomTable, MilestoneTemplateDialog, DeleteDialog, TableHeader },
	data: () => ({
		paths: [
			{text: 'Dashboard', disabled: false, router_name: 'default-content'},
			{text: 'Templates', disabled: true, router_name: null}
		],
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