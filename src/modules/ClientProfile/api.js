import request from '@/services/axios_instance'

export const api_to = {
    upload_image(id, formData) {
        return request.post(`api/clients/${id}/image`, formData)
    },
    update_profile(id, payload) {
        return request.put(`api/company/teams/${id}`, payload)
    }
}
