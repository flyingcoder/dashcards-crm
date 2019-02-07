import request from '@/services/axios_instance'

export const api_to = {
  add_new_note(payload) {
    return request.post('api/note', payload)
  },
  get_notes() {
    return request.get('api/note')
  },
  get_users() {
    return request.get('api/company/members')
  },
  save_collaborators(payload, id) {
    return request.post(`api/note/${id}/collaborators`, payload)
  }
}
