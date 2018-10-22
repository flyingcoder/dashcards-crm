import request from '@/services/axios_instance'

export const services_api = {
	get_services() {
		return request.get('api/services')
	},

	post_services({ name }) {
		return request.post('api/services', { name });
	},

	put_services(services) {
		return request.put(`api/services/${services.id}`, services)
	},
}