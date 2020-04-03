import request from '@/services/axios_instance'

export const events_api = {
  delete_event(id) {
    return request.delete(`api/events/${id}`)
  }
}
