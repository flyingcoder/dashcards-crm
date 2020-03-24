import request from '@/services/axios_instance'

export default {
  add_new_services(services) {
    return request.post('api/services', services)
  },
  add_new_client(payload) {
    return request.post('api/clients', payload)
  },
  add_new_member(payload) {
    return request.post('api/company/teams', payload)
  }
}
