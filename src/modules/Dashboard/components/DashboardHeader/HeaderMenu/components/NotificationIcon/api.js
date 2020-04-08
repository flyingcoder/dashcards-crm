import request from '@/services/axios_instance'

export const getNotifications = () => {
  return request.get('api/activities/log')
}

export const getUnreadNotifications = (payload) => {
  return request.get('api/activities/unread', { params: payload })
}

export const markReadNotification = id => {
  return request.get(`api/activities/${id}/mark-read`)
}
