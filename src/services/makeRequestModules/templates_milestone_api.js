import request from '@/services/axios_instance'

export const templates_milestone_api = {
	get_clients() {
		return request.get('api/clients')
	},

	post_clients(payload) {
		return request.post('api/clients', payload)
	},

	put_clients(clients) {
		return request.put(`api/clients/${clients.id}`, clients)
	},
}