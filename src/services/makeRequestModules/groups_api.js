import request from '@/services/axios_instance'

export const groups_api = {
  get_groups(query) {
    return request.get(`/api/groups?${query}`)
  },

  add_new_group(group) {
    return request.post('api/groups', group)
  },

  update_group(id, group) {
    return request.put(`api/groups/${id}`, group)
  },

  delete_group(id) {
    return request.delete(`api/groups/${id}`)
  },

  paginate_groups_table(query) {
    return request.get(`api/groups?${query}`)
  }
}
