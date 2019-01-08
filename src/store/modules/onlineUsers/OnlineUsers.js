const state = {
  online_users: [],
  all_users: []
}

const getters = {
  online_users: state => state.online_users,
  all_users: state => state.all_users.filter(user => user.is_online)
}

const mutations = {
  add_user: (state, payload) => state.online_users.push(payload),
  delete_user: (state, index) => state.online_users.splice(index, 1),
  set_online_users: (state, payload) => (state.online_users = payload),
  set_all_users: (state, payload) => (state.all_users = payload)
}

export { state, getters, mutations }
