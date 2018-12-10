import request from '@/services/axios_instance'

export const invoices_api = {
  get_invoices() {
    return request.get(`api/invoices`)
  }
}
