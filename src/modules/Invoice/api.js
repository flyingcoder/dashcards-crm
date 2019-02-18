import request from '@/services/axios_instance'

export const api_to = {
  get_invoices() {
    return request.get(`api/invoice`)
  },

  delete_invoice(id) {
    return request.delete(`api/invoice/${id}`)
  }
}
