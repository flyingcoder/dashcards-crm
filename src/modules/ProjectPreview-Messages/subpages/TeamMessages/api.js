import request from '@/services/axios_instance'

export const get_team_messages = project_id => {
  return request.get(`api/projects/${project_id}/messages?type=team`)
}

export const send_message = (project_id, payload) => {
  return request.post(`api/projects/${project_id}/messages`, payload)
}
