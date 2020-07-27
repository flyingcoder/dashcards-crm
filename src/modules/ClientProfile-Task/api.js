import request from '@/services/axios_instance'

export default {
    get_tasks(id) {
        return request.get(`api/clients/${id}/tasks`)
    }
}
