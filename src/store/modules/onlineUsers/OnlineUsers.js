const state = {
  online_users: [],
  all_users: []
}

const getters = {
  online_users: state => state.online_users,
  all_users: state => {
    return state.all_users.map(user => {
      user.is_online = state.online_users.includes(on_user => on_user.id === user.id)
      return user
    })
  }
}

const mutations = {
  add_user: (state, payload) => state.online_users.push(payload),
  delete_user: (state, index) => state.online_users.splice(index, 1),
  set_online_users: (state, payload) => (state.online_users = payload),
	set_all_users: (state, payload) => (state.all_users = payload)
}

export { state, getters, mutations }
