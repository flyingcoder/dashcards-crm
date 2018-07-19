import axios from 'axios'
import store from '@/store/store'

const request = axios.create({
  baseURL: 'http://api.bizzooka.ca',
  timeout: 5000,
})

request.interceptors.request.use(request => {
  const token = store.state.token
  if (token) {
    request.headers.Authorization = 'Bearer ' + token
  }
  return request

}, error => {
  return Promise.reject(error)
})

request.interceptors.response.use(response => {
  return response
}, error => {
  //TODO Handle error from backend here
})

export default request
