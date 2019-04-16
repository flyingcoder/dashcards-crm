import request from '@/services/axios_instance'

export const getPermissions = () => {
  return request.get('api/permission?all=true')
}
