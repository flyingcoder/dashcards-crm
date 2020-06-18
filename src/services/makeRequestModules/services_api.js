import request from '@/services/axios_instance'

export const services_api = {
  get_all_services() {
    return request.get('api/services?all=true')
  },

  get_services() {
    return request.get('api/services')
  },

  add_new_service(service) {
    return request.post('api/services', service)
  },

  update_service(id, new_name) {
    return request.put(`api/services/${id}`, new_name)
  },

  delete_service(id) {
    return request.delete(`api/services/${id}`)
  },

  bulk_delete_services(payload) {
    return request.delete(`api/services/bulk-delete`, payload)
  },

  paginate_services_table(query) {
    return request.get(`api/services?${query}`)
  }
}
