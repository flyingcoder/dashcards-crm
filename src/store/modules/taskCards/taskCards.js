import merge from 'lodash/merge'
import request from '@/services/axios_instance'

const state = {
  tasks_res: null,
  tasks: [],
  total: 0,
  loading: null,
  id: null,
  see_more_url: null,
  page: null
}

const getters = {
  tasks_res: state => state.tasks_res,
  tasks: state => state.tasks,
  counter: state => (state.task_res ? state.tasks_res.counter : 0),
  total: state => state.total,
  loading: state => state.loading,
  see_more_url: state => state.see_more_url,
  page: state => state.page,
  id: state => state.id
}

const mutations = {
  set_id: (state, payload) => (state.id = payload),
  set_page: (state, payload) => (state.page = payload),
  set_tasks: (state, payload) => (state.tasks = payload),
  set_total: (state, payload) => (state.total = payload),
  set_tasks_res: (state, payload) => (state.tasks_res = payload),
  set_loading: (state, payload) => (state.loading = payload),
  add_task: (state, payload) => state.tasks.push(payload),
  del_task: (state, payload) => {
    let index = state.tasks.findIndex(task => task.id == payload.id)
    if (~index) state.tasks.splice(index, 1)
  },
  replace_task: (state, payload) => {
    let index = state.tasks.findIndex(task => task.id == payload.id)
    if (~index) {
      state.tasks.splice(index, 1, payload)
    }
  },
  set_see_more_url: (state, payload) => (state.see_more_url = payload)
}

const actions = {
  get_tasks({ commit, state }, payload) {
    commit('set_loading', true)

    let api_url = 'api/task'
    if (state.id) {
      api_url = `api/projects/${state.id}/tasks`
    }
    if (payload === 'My Tasks') api_url += '/mine'

    request
      .get(api_url)
      .then(({ data }) => {
        commit('set_tasks_res', data)
        commit('set_tasks', data.data)
        commit('set_total', data.total)
        commit('set_see_more_url', data.next_page_url)
      })
      .finally(() => commit('set_loading', false))
  },
  see_more({ commit, state }) {
    commit('set_loading', true)
    request
      .get(state.see_more_url)
      .then(({ data }) => {
        let ctasks = state.tasks_res.data
        commit('set_tasks', ctasks.concat(data.data))
        commit('set_see_more_url', data.next_page_url)
      })
      .finally(() => commit('set_loading', false))
  }
}

export { state, getters, mutations, actions }
