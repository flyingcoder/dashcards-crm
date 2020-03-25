import request from '@/services/axios_instance'

export const apiTo = {
  getInvoices(projectId, page) {
    return request.get( `api/projects/${projectId}/invoice?page=${page}` )
  },
  
  delete_invoice(id) {
    return request.delete(`api/invoice/${id}`)
  },
  update_invoice(payload, id) {
    return request.post(`api/invoice/${id}`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  get_all_projects() {
    return request.get('api/projects?all=true')
  }
}
