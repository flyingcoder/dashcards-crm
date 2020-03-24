import request from '@/services/axios_instance'

export const api_to = {
  get_invoices(page) {
    return request.get(`api/invoice?page=${page}`)
  },

  delete_invoice(id) {
    return request.delete(`api/invoice/${id}`)
  },

  create_invoice(payload) {
    return request.post('api/invoice', payload)
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
  },

  get_projects_tasks(id) {
    return request.get(`api/projects/${id}/tasks-for-invoice`)
  }
}
