import request from '@/services/axios_instance'

export default {
    get_reports(id) {
        return request.get(`api/projects/${id}/report`)
    },
    add_project_report(id, report) {
        return request.post(`api/projects/${id}/report`, report)
    },

    updateProjectReport(projectId, reportId, payload) {
        return request.put(`api/projects/${projectId}/report/${reportId}`, payload)
    },

    deleteProjectReport(projectId, reportId) {
        return request.delete(`api/projects/${projectId}/report/${reportId}`)
    },

    saveReportViaTemplate(payload) {
        return request.post(`api/report/via-template`, payload)
    },

    updateReportViaTemplate(id, payload) {
        return request.put(`api/report/${id}/via-template`, payload)
    }
}