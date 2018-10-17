//NOTE: HERE WE WILL HAVE ALL THE API REQUESTS

import request from '@/services/axios_instance'

export default {
  login({ email, password }) {
    return request.post('/api/login', { email, password })
  },

  register({ company_name, company_email, first_name, email, password }) {
    return request.post('/api/register' ,{ company_name, company_email, first_name, email, password })
  },

  /* groups page api */
  get_groups(query) {
    return request.get(`/api/groups?${query}`)
  },

  add_new_group(group) {
    return request.post('api/groups', group)
  },

  update_group(id, group) {
    return request.put(`api/groups/${id}`, group)
  },

  delete_group(id) {
    return request.delete(`api/groups/${id}`)
  },

	/* groups page api */

  get_clients() {
    return request.get('api/clients')
  },

  post_clients(payload) {
    return request.post('api/clients', payload)
  },

  put_clients(clients) {
    return request.put(`api/clients/${clients.id}`, clients)
  },

  get_teams() {
    return request.get('api/company/teams')
  },

  add_new_team(payload) {
    return request.post('api/company/teams', payload)
  },

  update_team(payload) {
    return request.put(`api/company/teams/${payload.id}`, payload.team)
  },

  delete_team(id) {
    return request.delete(`api/company/teams/${id}`)
  },

  get_services() {
    return request.get('api/services')
  },

  post_services({ name }) {
    return request.post('api/services', { name });
  },

  put_services(services) {
    return request.put(`api/services/${services.id}`, services)
  },

  get_searched_groups(keyword) {
    return request.get(`/api/groups?search=${keyword}`)
  },
 
  checkout(token) {
    return request.post('/api/upgrade/checkout', {token})
  },

  get_milestones(api_url) {
    return request.get('/api/template')
  },

	add_new_milestone(payload) {
  	return request.post('/api/template', payload)
	},

	edit_milestone(id, payload) {
  	return request.put(`/api/template/${id}`, payload)
	},

  delete_milestone(id) {
    return request.delete(`/api/template/${id}`)
  }


}