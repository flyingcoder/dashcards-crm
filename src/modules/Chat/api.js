import request from '@/services/axios_instance'

export const api_to = {
  get_chat_list() {
    return request.get('api/chat/list')
  }
}
