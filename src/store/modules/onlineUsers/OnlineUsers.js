const state = {
  online_users: []
}

const getters = {
  online_users: state => state.online_users
}

const mutations = {
  add_user: (state, payload) => state.online_users.push(payload),
  delete_user: (state, index) => state.online_users.splice(index, 1),
  set_online_users: (state, payload) => (state.online_users = payload)
}

export { state, getters, mutations }
