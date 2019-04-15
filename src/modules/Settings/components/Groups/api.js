import request from '@/services/axios_instance'

export const apiTo = {
  getPermissions() {
    return request.get('api/permission?all=true')
  }
}
