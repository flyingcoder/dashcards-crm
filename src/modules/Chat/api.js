import request from '@/services/axios_instance'

export const api_to = {
  get_chat_list() {
    return request.get(`api/chat/list?for=project&has_msg_count=true`)
  },
  get_chat_list_only(){
    return request.get(`api/chat/list?for=project`)
  },
  get_groupchat_list() {
    return request.get(`api/chat/group/list?for=project&has_msg_count=true`)
  },
  get_members_list(convo_id) {
    return request.get(`api/chat/group/members/${convo_id}`)
  },
  get_messages(id) {
    return request.get(`api/chat/private/${id}`)
  },
  get_more_messages(id, page) {
    return request.get(`api/chat/private/${id}?page=${page + 1}`)
  },
  get_group_messages(id) {
    return request.get(`api/chat/group/private/${id}`)
  },
  get_group_more_messages(id, page) {
    return request.get(`api/chat/group/private/${id}?page=${page + 1}`)
  },
  send_message(payload) {
    return request.post(`api/chat/private`, payload , {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  send_group_message(payload) {
    return request.post(`api/chat/group/private`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  save_group(payload) {
    return request.post(`api/chat/group`, payload)
  },
  update_members_list(payload) {
    return request.post(`api/chat/group/update-members`, payload)
  },
  remove_from_group(payload) {
    return request.post(`api/chat/group/remove-member`, payload)
  }
}
