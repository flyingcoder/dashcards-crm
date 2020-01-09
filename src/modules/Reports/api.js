import request from '@/services/axios_instance'

export default {
  deleteReport(reportId) {
    return request.delete(`api/report/${reportId}`)
  },
  updateReport(reportId, payload) {
    return request.put(`api/report/${reportId}`, payload)
  }
}
