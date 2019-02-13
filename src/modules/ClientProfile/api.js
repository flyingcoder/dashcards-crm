import request from '@/services/axios_instance'

export const api_to = {
  upload_image(id, formData) {
    return request.post(`api/clients/${id}/image`, formData)
  }
}
