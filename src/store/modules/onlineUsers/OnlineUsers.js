const state = {
  all_users: []
}

const getters = {
  all_users: state => state.all_users
}

const mutations = {
  add_user: (state, payload) => state.online_users.push(payload),
  delete_user: (state, index) => state.online_users.splice(index, 1),
  set_all_users: (state, payload) => (state.all_users = payload)
}

export { state, getters, mutations }
