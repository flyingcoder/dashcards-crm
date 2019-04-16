import request from '@/services/axios_instance'

export const getNotifications = () => {
  return request.get('api/activities/log')
}