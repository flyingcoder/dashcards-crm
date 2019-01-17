import request from '@/services/axios_instance'

export const users_api = {
  logout_user(id) {
    return request.post(`/api/logout`, { user_id: id })
  }
}
