import request from '@/services/axios_instance'

export const teams_api = {
  get_single_member(user_id) {
    return request.get(`api/company/teams/${user_id}`)
  },

  get_all_teams() {
    return request.get('api/company/members')
  },

  getAllMembers() {
    return request.get('api/company/members?for=project')
  },

  getAllMembersExcept(payload) {
    return request.get('api/company/members?for=project', { params: payload })
  },

  getAllNormalMembers() {
    return request.get('api/company/members?for=project&type=member')
  },

  get_project_members(id) {
    return request.get(`api/projects/${id}/member?all=true`)
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

  bulk_delete_member(payload) {
    return request.delete(`api/company/teams/bulk-delete`, payload)
  },

  paginate_teams_table(query) {
    return request.get(`api/company/teams?${query}`)
  }
}
