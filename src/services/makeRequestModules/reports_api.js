import request from '@/services/axios_instance'

export const reports_api = {
  add_project_report(id, report) {
    return request.post(`api/projects/${id}/report`, report)
  },

  add_new_report(report) {
    return request.post('api/report', report)
  },

  get_project_reports(id) {
    return request.get(`api/projects/${id}/report`)
  },

  get_reports() {
    return request.get('api/report')
  }
}
