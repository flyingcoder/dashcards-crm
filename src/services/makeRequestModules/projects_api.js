import request from '@/services/axios_instance'

export const projects_api = {
  get_projects() {
    return request.get('api/projects')
  },

  get_all_projects() {
    return request.get('api/projects?all=true')
  },

  add_new_project(new_project) {
    return request.post('api/projects', new_project)
  },

  update_project(id, project) {
    return request.put(`api/projects/${id}`, project)
  },

  delete_project(id) {
    return request.delete(`api/projects/${id}`)
  },

  paginate_projects_table(query) {
    return request.get(`api/projects?${query}`)
  },

  get_projects_extra_inputs(serviceId) {
    return request.get(`api/forms/project-details/${serviceId}`)
  }
}
