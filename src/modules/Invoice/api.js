import request from '@/services/axios_instance'

export const api_to = {
  get_invoices() {
    return request.get(`api/invoice`)
  },

  delete_invoice(id) {
    return request.delete(`api/invoice/${id}`)
  },

  save_invoice(payload) {
    return request.post('api/invoice', payload)
  },

  get_all_projects() {
    return request.get('api/projects?all=true')
  },

  get_projects_tasks(id) {
    return request.get(`api/projects/${id}/tasks-for-invoice`)
  }
}
