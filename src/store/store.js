import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    custom_loader: false,
    user: null,
    snackbar: {
      status: false,
      message: ''
    }
  },
  getters: {
    custom_loader: state => state.custom_loader,
    is_user_logged: state => !!state.user,
    user: state => state.user,
    snackbar: state => state.snackbar
  },
  mutations: {
    set_user: (state, payload) => (state.user = payload),
    remove_user: state => (state.user = null),
    open_snackbar: (state, payload) => (state.snackbar = payload),
    set_custom_loader: (state, payload) => (state.custom_loader = payload)
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
