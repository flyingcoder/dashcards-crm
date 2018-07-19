import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      is_user_logged: !!localStorage.getItem('token'),
      user: null
    },
    getters: {
      is_user_logged: state => state.is_user_logged,
      user: state => state.user
    },
    mutations: {
      set_user: (state, payload) => state.user = payload
    },
    actions: {
      login({commit}, payload) {
        localStorage.setItem('token', payload.token)
        commit('set_user', payload.user)
      }
    },
    strict: process.env.NODE_ENV !== 'production'
})
