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
  },
  toggle_pin(note) {
    if (note.pivot.is_pinned) return request.put(`api/note/${note.id}/unpin`)
    else return request.put(`api/note/${note.id}/pin`)
  },
  updateNote(payload) {
    return request.put(`api/note/${payload.id}`, payload)
  }
}
