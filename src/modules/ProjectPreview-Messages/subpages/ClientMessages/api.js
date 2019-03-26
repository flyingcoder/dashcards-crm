import request from '@/services/axios_instance'
import { send_message } from '../TeamMessages/api'

export const get_client_messages = project_id => {
  return request.get(`api/projects/${project_id}/messages?type=client`)
}

export { send_message }