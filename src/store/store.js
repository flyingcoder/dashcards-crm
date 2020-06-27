import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import VueCryptojs from 'vue-cryptojs'

Vue.use(VueCryptojs)
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        custom_loader: false,
        user: null,
        snackbar: {
            status: false,
            message: ''
        },
        show_floating_button: true
    },
    getters: {
        custom_loader: state => state.custom_loader,
        is_user_logged: state => !!state.user,
        user: state => state.user,
        snackbar: state => state.snackbar,
        show_floating_button: state => state.show_floating_button
    },
    mutations: {
        set_user: (state, payload) => (state.user = payload),
        set_login_user: (state, payload) => {
            state.user = payload
            localStorage.setItem('user', JSON.stringify(state.user))
        },
        set_user_image: (state, payload) => {
            state.user.image_url = payload
            localStorage.setItem('user', JSON.stringify(state.user))
        },
        remove_user: state => (state.user = null),
        open_snackbar: (state, payload) => (state.snackbar = payload),
        set_custom_loader: (state, payload) => (state.custom_loader = payload),
        set_floating_button: (state, payload) =>
            (state.show_floating_button = payload)
    },
    actions: {
        login({ commit }, payload) {
            commit('set_user', payload.user)
        },
        logout({ commit }) {
            commit('remove_user')
        }
    },
    modules,
    strict: process.env.NODE_ENV !== 'production'
})