import request from '@/services/axios_instance'

export default {
  get_project_members(id) {
    return request.get(`api/projects/${id}/member?all=true`)
  },
  get_project_milestones(id) {
    return request.get(`api/project/${id}/milestone?all=true`)
  },
  get_own_tasks(id) {
    return request.get(`api/projects/${id}/tasks/mine?all=true`)
  },
  get_all_tasks(id) {
    return request.get(`api/projects/${id}/tasks?all=true`)
  },
  create_new_task(payload) {
    return request.post('api/task', payload)
  },
  edit_task(id, payload) {
    return request.put(`api/task/${id}`, payload)
  },

  delete_task(id) {
    return request.delete(`api/task/${id}`)
  },
  mark_as_complete_task(id, payload) {
    return request.put(`api/task/${id}/mark-as-complete`, payload)
  }
}
