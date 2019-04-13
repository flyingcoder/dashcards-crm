import makeRequestTo from '@/services/makeRequestTo'

const state = {
  chat: [],
  notification: []
}

const getters = {
  chat: state => state.chat,
  notification: state => state.notification
}

const mutations = {
  setChat: (state, payload) => (state.chat = payload),
  add_to_chat: (state, payload) => state.chat.unshift(payload),
  setNotification: (state, payload) => (state.notification = payload),
  addNotification: (state, payload) => state.notification.unshift(payload),
  removeChat: (state, user) => {
    const index = state.chat.findIndex(n => n.sender.id === user.id)
    if (~index) state.chat.splice(index, 1)
  }
}

const actions = {
  fetch_chat({ commit }) {
    makeRequestTo
      .get_unread_messages()
      .then(({ data }) => commit('setChat', data))
  }
}

export { state, getters, mutations, actions }
