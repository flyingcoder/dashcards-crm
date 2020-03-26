// TODO delete this file
import request from '@/services/axios_instance'

export const invoices_api = {
  get_invoices() {
    return request.get(`api/invoice`)
  },

  delete_invoice(id) {
    return request.delete(`api/invoice/${id}`)
  },

  bulk_delete_invoices(payload) {
    return request.delete(`api/invoice/bulk-delete`, payload)
  }
}
