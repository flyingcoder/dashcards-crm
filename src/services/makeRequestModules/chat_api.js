import request from '@/services/axios_instance'

export const chat_api = {
  get_conversation(id) {
    return request.get(`api/chat/private/${id}`)
  },

  send_message(payload) {
    return request.post('api/chat/private', payload)
  }
}
