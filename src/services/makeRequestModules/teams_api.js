import request from '@/services/axios_instance'

export const teams_api = {
  get_all_teams() {
    return request.get('api/company/teams?true=all')
  },

  get_teams() {
    return request.get('api/company/teams')
  },

  add_new_team(payload) {
    return request.post('api/company/teams', payload)
  },

  update_team(id, payload) {
    return request.put(`api/company/teams/${id}`, payload)
  },

  delete_team(id) {
    return request.delete(`api/company/teams/${id}`)
  },

  paginate_teams_table(query) {
    return request.get(`api/company/teams?${query}`)
  }
}
