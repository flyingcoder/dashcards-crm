import request from '@/services/axios_instance'

export const events_api = {
  delete_event(id) {
    return request.delete(`api/events/${id}`)
  },
  eventComments(id) {
    return request.get(`api/events/${id}/comments`)
  },
  addEventComment(id, payload) {
    return request.post(`api/events/${id}/comments`, payload)
  },
  deleteEventComment(id, comment_id) {
    return request.delete(`api/comments/${id}/comments/${comment_id}`)
  },
  addParticipants(id, payload) {
    return request.post(`api/events/${id}/participants`, payload)
  },
}
