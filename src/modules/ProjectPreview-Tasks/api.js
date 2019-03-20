import request from '@/services/axios_instance'

export default {
  get_project_members(id) {
    return request.get(`api/projects/${id}/member?all=true`)
  },
  get_project_milestones (id) {
    return request.get(`api/project/${id}/milestone?all=true`)
  },
  get_own_tasks (id) {
    return request.get(`api/projects/${id}/tasks/mine`)
  },
  get_all_tasks (id) {
    return request.get(`api/projects/${id}/tasks`)
  },
  create_new_task (payload) {
    return request.post('api/task', payload)
  }
}