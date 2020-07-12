import request from '@/services/axios_instance'

export const calendar_api = {
    get_calendar() {
        return request.get('/api/calendar')
    },

    add_new_calendar(payload) {
        return request.post('/api/calendar', payload)
    },

    edit_calendar(id, payload) {
        return request.put(`/api/calendar/${id}`, payload)
    },

    delete_calendar(id) {
        return request.delete(`/api/calendar/${id}`)
    }
}
