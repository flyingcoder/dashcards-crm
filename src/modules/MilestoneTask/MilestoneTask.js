import { table_functionality } from "@/services/table-functionality"

//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import TaskDialog from './components/TasksDialog/TasksDialog.vue'

export default {
	name: 'Milestone',
	mixins: [table_functionality],
	components: { CustomTable, DeleteDialog, TaskDialog },

	props: {
		template_id: [Number, String], //route param
		milestone_id: [Number, String], //route param
	},

	data: () => ({
		headers: [
			{ text: 'Title', value: 'title' },
			{ text: 'Description', value: 'description' },
			{ text: 'Status',  value: 'status' },
			{ text: 'Days',  value: 'days' },
			{ text: 'Action',  value: 'action' },
		],
		table_config: {
			route_name: 'templates/milestone/task',
			add_message: 'New Task added successfully!',
			update_message: 'Task updated successfully!',
			delete_message: 'Task deleted successfully!',
		},
	}),

	computed: {
		dynamic_api() {
			return `api/milestone/${this.milestone_id}/task`
		}
	},

	created() {
		this.fill_table('get_tasks', true, this.dynamic_api)
	},

	methods: {
		short_description_text(text) {
			return text.length > 12 ? text.slice(0, 11) + '...' : text
		},
	}

}