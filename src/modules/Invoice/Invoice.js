import TableHeader from '@/common/TableHeader.vue'
import CreateInvoiceDialog from './components/CreateInvoiceDialog/CreateInvoiceDialog.vue'

export default {
	name: 'Invoice',

	components: {
		TableHeader, CreateInvoiceDialog
	},

	data: () => ({
		paths: [
			{ text: 'Dashboard', disabled: false, router_name: 'default-content' },
			{ text: 'Invoice', disabled: true, router_name: null }
		],
		create_dialog: false
	}),

	methods: {},

}