import request from '@/services/axios_instance'

export default {
  //HERE WE WILL HAVE ALL THE API REQUESTS
  login({ email, password }) {
    //TODO the email and password are hardcoded
    return request.post('/api/login', { email: 'ross.buzzooka@gmail.com', password: 'gDQsa7nUyadmin' })
  }
}