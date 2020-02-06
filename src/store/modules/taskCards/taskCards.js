import merge from 'lodash/merge'
import request from '@/services/axios_instance'

const state = {
  tasks_res: null,
  loading: null,
  see_more_url: null
}

const getters = {
  tasks_res: state => state.tasks_res,
  tasks: state => state.tasks_res.data,
  counter: state => state.tasks_res.counter,
  total: state => state.tasks_res.total,
  loading: state => state.loading,
  see_more_url: state => state.see_more_url
}

const mutations = {
  set_tasks: (state, payload) => (state.tasks_res.data = payload),
  set_tasks_res: (state, payload) => (state.tasks_res = payload),
  set_loading: (state, payload) => (state.loading = payload),
  set_see_more_url: (state, payload) => (state.see_more_url = payload)
}

const actions = {
  get_tasks({ commit }, payload) {
    commit('set_loading', true)
    request
        .get(payload)
        .then( ( { data } )  => {
          commit('set_tasks_res', data)
          commit('set_see_more_url', data.next_page_url)
        })
        .finally(() => (commit('set_loading', false)))
  },
  see_more({ commit, state }) {
    commit('set_loading', true)
    request
        .get(state.see_more_url)
        .then( ( { data } )  => {
          let ctasks = state.tasks_res.data
          commit('set_tasks', ctasks.concat(data.data))
          commit('set_see_more_url', data.next_page_url)
        })
        .finally(() => (commit('set_loading', false)))
  }
}

export { state, getters, mutations, actions }