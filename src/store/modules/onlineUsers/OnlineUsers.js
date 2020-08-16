const state = {
    all_users: []
}

const getters = {
    all_users: state => state.all_users
}

const mutations = {
    set_user_logged_in: (state, payload) => {
        let index = state.all_users.findIndex(user => user.id === payload.id)
        if (!(~index)) {
            state.all_users.push(payload)
        }
    },
    set_user_logged_out: (state, payload) => {
        let index = state.all_users.findIndex(user => user.id === payload.id)
        if (~index) {
            state.all_users.splice(index, 1)
        }
    },
    set_all_users: (state, payload) => (state.all_users = payload)
}

const actions = {
    user_logged_in({commit}, payload) {
        commit('set_user_logged_in', payload)
    },
    user_logged_out({commit}, payload) {
        commit('set_user_logged_out', payload)
    }
}
export {state, getters, mutations, actions}
