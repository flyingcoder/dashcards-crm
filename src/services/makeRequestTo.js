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

  post_clients(clients) {
    return request.post('api/clients', clients)
  },

  put_clients(clients) {
    return request.put(`api/clients/${clients.id}`, clients)
  },

  get_teams() {
    return request.get('api/company/teams')
  },

  post_teams({ first_name, last_name, group_name, job_title, email, telephone, password }) {
    return request.post('api/company/teams', { first_name, last_name, group_name, job_title, email, telephone, password })
  },

  put_teams(teams) {
    return request.put(`api/company/teams/${teams.id}`, teams)
  },

  get_searched_groups(keyword) {
    return request.get(`/api/groups?search=${keyword}`)
  },

  get_services() {
    return request.get('/api/services')
  },

  checkout(token) {
    return request.post('/api/upgrade/checkout', {token})
  },
}