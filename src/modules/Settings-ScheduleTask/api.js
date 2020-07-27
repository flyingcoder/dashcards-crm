import request from '@/services/axios_instance'

export const api_to = {
    scheduleTask() {
        return request.get(`api/schedule-tasks`)
    },
    toggle_status(id) {
        return request.post(`api/schedule-tasks/${id}/toggle-status`, {})
    },
    updateScheduleTask(id, payload) {
        return request.put(`api/schedule-tasks/${id}`, payload)
    },
    newScheduleTask(payload) {
        return request.post(`api/schedule-tasks`, payload)
    },
    members() {
        return request.get(`api/company/members`)
    },
    delete_schedule_task(id) {
        return request.delete(`api/schedule-tasks/${id}`)
    }
}