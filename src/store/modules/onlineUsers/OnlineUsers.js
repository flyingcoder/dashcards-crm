import _cloneDeep from 'lodash/cloneDeep'

const state = {
  all_users: []
}

const getters = {
  all_users: state => state.all_users
}

const mutations = {
  user_logged_in: (state, payload) => {
    let users = _cloneDeep(state.all_users)
    const index = users.findIndex(user => user.id === payload.id)
    if (~index) {
      users.splice(index, 1, payload)
    } else {
      users.push(payload)
    }
    state.all_users = users
  },
  user_logged_out: (state, index) => (state.all_users[index].is_online = false),
  set_all_users: (state, payload) => (state.all_users = payload)
}

export { state, getters, mutations }
