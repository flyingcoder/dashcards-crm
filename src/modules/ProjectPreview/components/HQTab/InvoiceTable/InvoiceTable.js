import request from '@/services/axios_instance'

//Components
import DashCard from '@/common/DashCard.vue'
import CustomTable from '@/common/CustomTable/CustomTable.vue'

export default {
	components: {
		DashCard, CustomTable
	},

	props: {
		id: [Number, String]
	},

	data: () => ({
		headers: [
			{ id: 1, text: 'Due Date', value: 'due_date' },
			{ id: 2, text: 'Invoice Number', value: 'invoice_number' },
			{ id: 3, text: 'Client', value: 'client' },
			{ id: 4, text: 'Status', value: 'status' },
			{ id: 5, text: 'Amount', value: 'amount' },
			{ id: 6, text: 'Actions' },
		],
		items: [],
		selected_ids: [],
		loading: false,
	}),

	created() {
		this.loading = true
		request.get(`api/projects/${this.id}/invoice`)
			.then(response => this.items = response.data.data)
			.finally(() => this.loading = false)
	}

}