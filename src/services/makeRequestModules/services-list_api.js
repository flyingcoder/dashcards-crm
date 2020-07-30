import request from '@/services/axios_instance'

export const services_list_api = {
    get_all_services_list() {
        return request.get('api/services-list/list')
    },

    update_services_list(id, payload) {
        return request.put(`api/services-list/${id}`, payload)
    },

    delete_service_list(id){
        return request.delete(`api/services-list/${id}`)
    }
}