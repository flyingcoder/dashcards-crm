import axios from 'axios'
import store from '@/store/store'

const request = axios.create({
  baseURL: 'https://api.bizzooka.ca',
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
  store.commit('open_snackbar', { status: true, message: error.response.data.message })
})

export default request
