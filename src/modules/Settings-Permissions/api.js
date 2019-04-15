import request from '@/services/axios_instance'

export const api_to = {
  get_permissions() {
    return request.get('api/permission?all=true')
  }
}
