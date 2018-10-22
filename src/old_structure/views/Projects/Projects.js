import makeRequestTo from '@/services/makeRequestTo'
import CustomField from '@/common/CustomField/CustomField.vue'
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import Breadcrumb from '@/common/Breadcrumb.vue'
// import {validations} from "./local-mixins/validations"

export default {
	name: 'Projects',
	// mixins: [validations],
	components: { CustomTable, CustomField, DeleteDialog, Breadcrumb },

	data () {
		return {
			dialog: false,
			loading: false,
			page: 1,
				paths: [
				{ text: 'Dashboard', disabled: false },
				{ text: 'Projects', disabled: true }
			],
			headers: [
				{ text: 'Service', value: 'project', sortable: true, align: 'left' },
				{ text: 'Client', value: 'client', sortable: true, align: 'left' },
				{ text: 'Project Manager', value: 'project', sortable: true, align: 'left' },
				{ text: 'Start Date', value: 'start-date', sortable: true, align: 'left' },
				{ text: 'Progress', value: 'progress', sortable: true, align: 'left' },
				{ text: 'Time Spent', value: 'time-spent', sortable: true, align: 'left' },
				{ text: 'Status', value: 'status', sortable: true, align: 'left' },
				// { text: 'Delete', value: 'project', sortable: true, align: 'left' },
			],
			projects: [],
			pagination: {},

			form_edit: -1,
			name: {
				text: '',
					is_valid: true,
					error_messages: ['Project Name is required'],
					validations: ['required']
				},
			form:{
				name: '',
			},

			search: '',
			selected: [],
		}
	},
}