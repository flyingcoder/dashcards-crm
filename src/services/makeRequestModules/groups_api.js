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

      get_searched_groups(keyword) {
        return request.get(`/api/groups?search=${keyword}`)
      },
}