import request from '@/services/axios_instance'

export const milestone_tasks_api = {
    get_tasks(api_url) {
        return request.get(api_url)
    },

    add_new_task(payload, api_url) {
        return request.post(api_url, payload)
    },

    edit_task(id, payload, api_url) {
        return request.put(`${api_url}/${id}`, payload)
    },

    delete_task(id, api_url) {
        return request.delete(`${api_url}/${id}`)
    }
}
