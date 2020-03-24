import request from '@/services/axios_instance'

export const sendEmail = payload => {
  return request.post(`api/password/email/`, payload)
}
