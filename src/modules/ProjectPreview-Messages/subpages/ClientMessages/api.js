import request from '@/services/axios_instance'
import { send_message, get_client_convo_details } from '../TeamMessages/api'

export const get_client_messages = project_id => {
  return request.get(`api/projects/${project_id}/messages?type=client`)
}

export const get_groupchat_list = () => {
  return request.get(`api/chat/group/list?for=project&has_msg_count=true`)
}

export { send_message, get_client_convo_details }

