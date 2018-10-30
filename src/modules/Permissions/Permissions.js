import makeRequestTo from '@/services/makeRequestTo'
import CustomField from '@/common/CustomField/CustomField.vue'
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import Breadcrumb from '@/common/Breadcrumb.vue'

export default {
	name: 'Permissions',
	components: { CustomTable, CustomField, DeleteDialog, Breadcrumb },

	data () {
		return {
			dialog: false,
			loading: false,
			page: 1,
				paths: [
				{ text: 'Dashboard', disabled: false },
				{ text: 'Permissions', disabled: true }
			],
			headers: [
				{ text: 'Name', value: 'name', sortable: true, align: 'left' },
				{ text: 'Description', value: 'description', sortable: true, align: 'left' },
				{ text: 'Capability', value: 'capability', sortable: true, align: 'left' },
			],
			permessions: [],
			pagination: {},

			form_edit: -1,
			name: {
				text: '',
					is_valid: true,
					error_messages: ['Permissions Name is required'],
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