import request from '@/services/axios_instance'

export default {
  add_project_report(id, report) {
    return request.post(`api/projects/${id}/report`, report)
  }
}
