import request from '@/services/axios_instance'

export default {
  //HERE WE WILL HAVE ALL THE API REQUESTS
  login({ email, password }) {
    return request.post('/api/login', { email, password })
  }
}