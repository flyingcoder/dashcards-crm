import axios from 'axios'
import store from '@/store/store'
import { auth } from '@/plugins/auth'
import { settings } from '@/variables'

const request = axios.create({
    baseURL: settings.apiHostBaseURL,
    timeout: 500000
})

request.interceptors.request.use(
    request => {
        const token = localStorage.getItem('token')
        if (token) {
            request.headers.Authorization = 'Bearer ' + token
        }
        request.headers['X-Requested-With'] = 'XMLHttpRequest'
        return request
    },
    error => {
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (
            error.response &&
            error.response.status === 401 &&
            localStorage.getItem('token')
        ) {
            // Unauthenticated
            auth.logout()
            store.commit('open_snackbar', {
                status: true,
                message: 'Session expired. Login to continue'
            })
            return Promise.reject(error.response)
        }
        const res = error.response
        if (res) {
            let message = res.data.message
            if (typeof res.data.errors != 'undefined') {
                let errors = Object.values(res.data.errors)
                errors = errors.flat()
                for (var i = errors.length - 1; i >= 0; i--) {
                    message = message + `\n` + errors[i]
                }
            }
            store.commit('open_snackbar', {
                status: true,
                message: message
            })
        }
        return Promise.reject(error.response)
    }
)

export default request