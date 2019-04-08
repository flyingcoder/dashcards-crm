import request from '@/services/axios_instance'

export const deleteFile = fileId => {
  return request.delete(`api/file/${fileId}`)
}

export const addProjectLink = (projectId, payload) => {
  return request.post(`api/projects/${projectId}/link`, payload)
}
