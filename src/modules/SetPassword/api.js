import request from '@/services/axios_instance'

export const set_user_password = payload => {
  return request.post('/api/password/reset', payload)
}

// logout_user(id) {
//   return request.post(`/api/logout`, { user_id: id })
// }
