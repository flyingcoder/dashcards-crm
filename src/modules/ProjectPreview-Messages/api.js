import request from '@/services/axios_instance'

export const getProjectMembers = projectId => {
  return request.get(`api/projects/${projectId}/new-members`)
}

export const getMembers = projectId => {
  return request.get(`api/projects/${projectId}/member`)
}
