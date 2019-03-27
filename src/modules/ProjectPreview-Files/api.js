import request from '@/services/axios_instance'

export const deleteFile = fileId => {
  return request.delete(`api/file/${fileId}`)
}
