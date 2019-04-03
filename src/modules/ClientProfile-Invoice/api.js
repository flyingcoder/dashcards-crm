import request from '@/services/axios_instance'

export const getInvoices = clientId => {
  return request.get(`api/clients/${clientId}/invoices`)
}