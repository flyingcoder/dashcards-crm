import axios from 'axios'
import store from '@/store/store'
import { auth } from '@/plugins/auth'

const request = axios.create({
  baseURL: 'https://api.bizzooka.com',
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
	if (error.response.status === 401) { // Unauthenticated
		auth.logout()
    return
  }
  const res = error.response

  if(Array.isArray(res)) {
	  store.commit('open_snackbar', { status: true, message: res.data.errors[error][0] })
  } else {
    store.commit('open_snackbar', { status: true, message: res.data.message })
  }  
})

export default request
