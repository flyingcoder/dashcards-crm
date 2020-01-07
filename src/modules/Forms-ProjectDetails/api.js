import request from '@/services/axios_instance'

export const getServices = () => {
  return request.get('api/services?all=true')
}

export const postService = serviceId => {
  return request.get(`api/forms/project-details/${serviceId}`)
}

export const postFields = payload => {
  return request.post(`api/forms/project-details`, payload)
}
