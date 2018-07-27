import axios from 'axios'

const request = axios.create({
  baseURL: 'http://api.bizzooka.ca',
  timeout: 5000,
})

request.interceptors.request.use(request => {
  const token = localStorage.getItem('token')
  if (token) {
    request.headers.Authorization = 'Bearer ' + token
  }
  request.headers['X-Requested-With'] = 'XMLHttpRequest'
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
