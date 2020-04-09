import makeRequestTo from '@/services/makeRequestTo'

const state = {
  chat: [],
  chat_counts: 0,
  notification: []
}

const getters = {
  chat: state => state.chat,
  notification: state => state.notification,
  chat_counts: state => state.chat_counts
}

const mutations = {
  setChat: (state, payload) => {
    state.chat = payload
    state.chat_counts = payload.length
  },
  add_to_chat: (state, payload) => {
    let index = state.chat.findIndex(
      i => i.conversation_id === payload.conversation_id
    )
    if (~index) {
      state.chat.splice(index, 1)
    }
    state.chat.unshift(payload)
    state.chat_counts = state.chat.length
  },
  setNotification: (state, payload) => (state.notification = payload),
  addMoreNotification: (state, payload) => {
    Array.prototype.push.apply(state.notification, payload)
  },
  addNotification: (state, payload) => {
    state.notification.unshift(payload)
  },
  removeChat: (state, user) => {
    const index = state.chat.findIndex(n => n.sender.id === user.id)
    if (~index) {
      state.chat.splice(index, 1)
      state.chat_counts = state.chat.length
    }
  }
}

const actions = {
  fetch_chat({ commit }) {
    makeRequestTo
      .get_unread_messages()
      .then(({ data }) => commit('setChat', data))
  },
  markAllAsRead({ commit }) {
    makeRequestTo
      .mark_all_as_read()
      .then(({ data }) => commit('setNotification', []))
  }
}

export { state, getters, mutations, actions }
