import request from '@/services/axios_instance'

export const getInvoices = projectId => {
  return request.get(`api/projects/${projectId}/invoice`)
}