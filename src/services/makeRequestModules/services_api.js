import request from '@/services/axios_instance'

export const services_api = {
	get_services() {
		return request.get('api/services')
	},

	add_new_services(services) {
		return request.post('api/services', services);
	},

	update_service(id, new_name) {
		return request.put(`api/services/${id}`, new_name)
	},

	delete_service(id) {
		return request.delete(`api/services/${id}`)
	},

	paginate_services_table(qyery) {
		return request.get(`api/services?${qyery}`)
	}
}