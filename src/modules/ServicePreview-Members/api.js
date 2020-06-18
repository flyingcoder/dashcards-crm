import request from '@/services/axios_instance'

export const getProjectMembers = projectId => {
  return request.get(`api/projects/${projectId}/new-members`)
}

export const addProjectMember = (projectId, payload) => {
  return request.post(`api/projects/${projectId}/member`, payload)
}
