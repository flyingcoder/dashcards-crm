import request from '@/services/axios_instance'

export default {
  //HERE WE WILL HAVE ALL THE API REQUESTS
  login({ email, password }) {
    return request.post('/api/login', { email, password })
  },

  register({ company_name, company_email, first_name, email, password }) {
    return request.post('/api/register' ,{ company_name, company_email, first_name, email, password })
  },

  get_groups(page) {
    return request.get(`/api/groups?page=${page}`)
  },

  get_clients() {
    return request.get('api/clients')
  },

  post_clients({ first_name, last_name, company_name, telephone, email, status, password}) {
    return request.post('api/clients', { first_name, last_name, company_name, telephone, email, status, password})
  },

  put_clients(clients) {
    return request.put(`api/clients/${clients.id}`, clients)
  },

  get_teams() {
    return request.get('api/company/teams')
  },

  post_teams(teams) {
    return request.post('api/company/teams', teams)
  },

  put_teams(teams) {
    return request.put(`api/company/teams/${teams.id}`, teams)
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
}