import request from '@/services/axios_instance'

export const permissions_api = {
  get_permissions() {
    return request.get('api/permission')
  },

  add_new_permission(new_permission) {
    return request.post('api/permission', new_permission)
  },

  update_permission(id, permission) {
    return request.put(`api/permission/${id}`, permission)
  },

  delete_permission(id) {
    return request.delete(`api/permission/${id}`)
  },

  paginate_permissions_table(query) {
    return request.get(`api/permission?${query}`)
  }
}
