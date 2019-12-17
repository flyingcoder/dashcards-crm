//TODO refactor or consolidation

import request from '@/services/axios_instance'

export const users_api = {
	get_user_by_code(code) {
		return request.post('/api/register/get-user-id', { code : code })
	},

	set_user_password(payload) {
		return request.post('/api/register/set-password', payload)
	}
  // logout_user(id) {
  //   return request.post(`/api/logout`, { user_id: id })
  // }
}
