//NOTE: HERE WE WILL HAVE ALL THE API REQUESTS
//TODO refactor, create modules for all requests to have cleaner and maintainable code

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

      get_searched_groups(keyword) {
        return request.get(`/api/groups?search=${keyword}`)
      },
	/* groups page api */

	/* clients page api */
      get_clients() {
        return request.get('api/clients')
      },

      post_clients(payload) {
        return request.post('api/clients', payload)
      },

      put_clients(clients) {
        return request.put(`api/clients/${clients.id}`, clients)
      },
	/* clients page api */

	/* teams page api */
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
	/* teams page api */

	/* services page api */
      get_services() {
        return request.get('api/services')
      },

      post_services({ name }) {
        return request.post('api/services', { name });
      },

      put_services(services) {
        return request.put(`api/services/${services.id}`, services)
      },
	/* services page api */

 
  checkout(token) {
    return request.post('/api/upgrade/checkout', {token})
  },

	/* templates page api */
      get_milestone_templates() {
        return request.get('/api/template')
      },

      add_new_milestone_template(payload) {
        return request.post('/api/template', payload)
      },

      edit_milestone_template(id, payload) {
        return request.put(`/api/template/${id}`, payload)
      },

      delete_milestone_template(id) {
        return request.delete(`/api/template/${id}`)
      },
	/* templates page api */

	/* templates/milestone page api */
      get_milestones(api_url) {
        return request.get(api_url)
      },

      add_new_milestone(payload, api_url) {
        return request.post(api_url, payload)
      },

      edit_milestone(id, payload, api_url) {
        return request.put(`${api_url}/${id}`, payload)
      },

      delete_milestone(id, api_url) {
        return request.delete(`${api_url}/${id}`)
      }
	/* templates/milestone page api */

}