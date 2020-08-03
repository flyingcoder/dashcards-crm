import Vue from 'vue'
import store from '@/store/store'
import make_request_to from '@/services/makeRequestTo'
import router from '@/router/router';
import { settings } from '@/variables'

(function() {
    const configs = localStorage.getItem('session-eXt-eQt128')
    if (configs) {
        store.commit('set_global_configs', JSON.parse(Vue.CryptoJS.AES.decrypt(configs, settings.paraphrase ).toString(Vue.CryptoJS.enc.Utf8)))
    } else {
        store.dispatch('fetchGlobal')
    }
    //for setting the user when the page refreshes
    const user = localStorage.getItem('user')
    if (user) {
        store.commit('set_user', JSON.parse(Vue.CryptoJS.AES.decrypt(user, settings.paraphrase ).toString(Vue.CryptoJS.enc.Utf8)))
        store.dispatch('configs/fetchSettings', { company_id : store.getters.user.company_id })
    }
})()

async function set_to_localStorage({ data }) {
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', Vue.CryptoJS.AES.encrypt(JSON.stringify(data.user), settings.paraphrase).toString())
    await store.dispatch('login', data)
    router.push({ name: 'default-content' })
}

export const auth = {
    isAuthenticated() {
        return store.getters.is_user_logged
    },

    logged_user() {
        return store.getters.user
    },

    logout(success, error) {
        make_request_to.logout().then(
            response => {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                localStorage.removeItem('session-eXt-eQt128')
                if (typeof success === 'function') success(response)
            },
            error => {
                if (typeof error === 'function') error(error)
            }
        )
    },

    login({ email, password }, success_cb, err_cb) {
        store.commit('set_custom_loader', true)
        make_request_to
            .login({ email, password })
            .then(
                response => {
                    set_to_localStorage(response)
                    if (typeof success_cb === 'function') {
                        success_cb(response)
                    }
                },
                error => {
                    if (typeof err_cb === 'function') {
                        err_cb(error)
                    }
                }
            )
            .finally(() => store.commit('set_custom_loader', false))
    },

    register(fields) {
        store.commit('set_custom_loader', true)
        make_request_to
            .register(fields)
            .then(response => {
                store.commit('open_snackbar', {
                    status: true,
                    message: response.data.message
                })
                set_to_localStorage(response)
            })
            .finally(() => store.commit('set_custom_loader', false))
    }
}

const Authentication = {
    install: Vue => {
        Vue.prototype.$auth = auth
    }
}

Vue.use(Authentication)

export default Authentication