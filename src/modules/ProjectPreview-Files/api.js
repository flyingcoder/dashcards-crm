import request from '@/services/axios_instance'

export const deleteFile = (projectId, fileId) => {
  return request.delete(`api/projects/${projectId}/file/${fileId}`)
}