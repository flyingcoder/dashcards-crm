import request from '@/services/axios_instance'

export const users_api = {
  get_online_users() {
    return request.get('api/company/members?online=true')
  }
}
