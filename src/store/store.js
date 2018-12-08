import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: null,
		snackbar: {
			status: false,
			message: ''
		},
	},
	getters: {
		is_user_logged: state => !!state.user,
		user: state => state.user,
		snackbar: state => state.snackbar
	},
	mutations: {
		set_user: (state, payload) => state.user = payload,
		remove_user: state => state.user = null,
		open_snackbar: (state, payload) => state.snackbar = payload
	},
	actions: {
		login({commit}, payload) {
			commit('set_user', payload.user)
		},
		logout({commit}) {
			commit('remove_user')
		}
	},
	modules,
	strict: process.env.NODE_ENV !== 'production'
})
