import request from '@/services/axios_instance'

export const clients_api = {
  get_clients() {
    return request.get('api/clients')
  },

  add_new_client(payload) {
    return request.post('api/clients', payload)
  },

  update_client(id, new_client) {
    return request.put(`api/clients/${id}`, new_client)
  },

  delete_client(id) {
    return request.delete(`api/clients/${id}`)
  }
}
