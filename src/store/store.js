import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      user: null
    },
    getters: {
      is_user_logged: state => !!state.user,
      user: state => state.user
    },
    mutations: {
      set_user: (state, payload) => state.user = payload,
      remove_user: state => state.user = null
    },
    actions: {
      login({commit}, payload) {
        commit('set_user', payload.user)
      },
      logout({commit}) {
        commit('remove_user')
      }
    },
    strict: process.env.NODE_ENV !== 'production'
})
