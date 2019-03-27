import request from '@/services/axios_instance'

export const get_project_members (project_id) = () => {
  return request.get(`api/projects/${project_id}/members`)
}

export const get_tabs_messages(project_id, tab) = () => {
  return request.get(`api/projects/{id}/messages?type=${tab}`)
}

export const delete_message(message_id) = () => {
  return request.delete(`api/message/${message_id}`)
}