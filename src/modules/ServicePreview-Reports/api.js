import request from '@/services/axios_instance'

export default {
  add_project_report(id, report) {
    return request.post(`api/projects/${id}/report`, report)
  },

  updateProjectReport(projectId, reportId, payload) {
    return request.put(`api/projects/${projectId}/report/${reportId}`, payload)
  },

  deleteProjectReport(projectId, reportId) {
    return request.delete(`api/projects/${projectId}/report/${reportId}`)
  }
}
