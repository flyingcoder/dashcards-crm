import makeRequestTo from '@/services/makeRequestTo'

const state = {
  chat: []
}

const getters = {
  chat: state => state.chat
}

const mutations = {
  set_chat: (state, payload) => (state.chat = payload)
}

const actions = {
  fetch_chat({ commit }) {
    makeRequestTo
      .get_unread_messages()
      .then(({ data }) => commit('set_chat', data))
  }
}

export { state, getters, mutations, actions }
