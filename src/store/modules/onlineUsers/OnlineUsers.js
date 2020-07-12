const state = {
    all_users: []
}

const getters = {
    all_users: state => state.all_users
}

const mutations = {
    user_logged_in: (state, payload) => state.all_users.push(payload),
    user_logged_out: (state, index) => state.all_users.splice(index, 1),
    set_all_users: (state, payload) => (state.all_users = payload)
}

export {state, getters, mutations}
