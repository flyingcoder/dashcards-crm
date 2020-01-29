import makeRequestTo from '@/services/makeRequestTo'

const state = {
  picture_dialog: {
    open: false
  },
  user_id: null,
  user_info: {
    user: null,
    tasks: null,
    timers: null,
    loading: false
  }
}

const getters = {
  picture_dialog_is_open: state => state.picture_dialog.open,
  user_id: state => state.user_id,
  user: state => state.user_info.user,
  tasks: state => state.user_info.tasks,
  timers: state => state.user_info.timers,
  user_loading: state => state.user_info.loading
}

const mutations = {
  set_picture_dialog: (state, payload) => (state.picture_dialog.open = payload),
  set_user_id: (state, id) => (state.user_id = id),
  set_user: (state, payload) => (state.user_info.user = payload),
  set_tasks: (state, payload) => (state.user_info.tasks = payload),
  set_timers: (state, payload) => (state.user_info.timers = payload),
  set_user_loading: (state, payload) => (state.user_info.loading = payload)
}

const actions = {
  get_single_member({ commit }, id) {
    commit('set_user_loading', true)
    makeRequestTo
      .get_single_member(id)
      .then(({ data }) => {
        commit('set_tasks', data.tasks)
        //commit('set_timers', data.timers)
        delete data.tasks
        //unset(data['timers'])
        commit('set_user', data)
      })
      .finally(() => commit('set_user_loading', false))
  },

  get_single_client({ commit }, id) {
    commit('set_user_loading', true)
    makeRequestTo
      .get_single_client(id)
      .then(({ data }) => commit('set_user', data))
      .finally(() => commit('set_user_loading', false))
  },

  update_profile({ commit }, payload) {
    commit('set_user_loading', true)
    let id = payload.id
    delete payload.id
    makeRequestTo
      .update_team(id, payload)
      .then(({ data }) => commit('set_user', data))
      .finally(() => commit('set_user_loading', false))
  }
}

export { state, getters, mutations, actions }
