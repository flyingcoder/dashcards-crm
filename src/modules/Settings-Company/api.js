import request from '@/services/axios_instance'

export const api_to = {
    upload_image(id, formData) {
        return request.post(`api/company/${id}/logo`, formData)
    },
    upload_image_via_url(id, payload) {
        return request.post(`api/company/${id}/logo/via-url`, payload)
    },
    update_company_profile(id, payload) {
        return request.put(`api/company/${id}/info`, payload)
    },
    get_company_info(id) {
        return request.get(`api/company/${id}/info`)
    }
}