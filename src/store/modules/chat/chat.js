import _cloneDeep from 'lodash/cloneDeep'
import makeRequestTo from '@/services/makeRequestTo'

const state = {
  conversations: [], //objects of => { id, user, active, messages, open, next_url }
  latest_active_id: null,
  unread_messages: [] //object of => { id, count }
}

const getters = {
  all_conversations: state => state.conversations,
  active_conv: state => state.conversations.filter(conv => conv.active),
  latest_active_id: state => state.latest_active_id,
  unread_messages: state => state.unread_messages,
  unread_message: state => id =>
    state.unread_messages.find(mess => mess.id === id)
}

const mutations = {
  add_conversation: (state, payload) => state.conversations.push(payload),
  add_message_to_conv(state, { id, message }) {
    const index = state.conversations.findIndex(conv => conv.id === id)
    state.conversations[index].messages.push(message)
  },
  replace_message(state, { id, message }) {
    const index = state.conversations.findIndex(conv => conv.id === id)
    const msg_index = state.conversations[index].messages.findIndex(
      m => m.id === 'temporary'
    )
    state.conversations[index].messages.splice(msg_index, 1, message)
  },
  activate_conversation: (state, index) => {
    state.conversations[index].active = true
    state.latest_active_id = state.conversations[index].id
  },
  toggle_open_conv: (state, id) => {
    let conv = _cloneDeep(state.conversations)
    const index = conv.findIndex(conv => conv.id === id)
    if (~index) {
      conv[index].open = !conv[index].open
      state.conversations = conv
      const unread_index = state.unread_messages.findIndex(obj => obj.id === id)
      if (~unread_index) {
        state.unread_messages[unread_index].count = 0
      }
    }
  },
  close_active_conv: (state, id) => {
    let conv = _cloneDeep(state.conversations)
    const index = conv.findIndex(conv => conv.id === id)
    if (~index) {
      conv[index].active = false
      conv[index].open = false
      state.conversations = conv
      state.latest_active_id = null
    }
  },
  set_latest_active_id: (state, payload) => (state.latest_active_id = payload),
  add_unread_messages(state, id) {
    const index = state.unread_messages.findIndex(obj => obj.id === id)
    if (~index) {
      const count = state.unread_messages[index].count + 1
      state.unread_messages.splice(index, 1, { id, count })
    } else {
      state.unread_messages.push({ id, count: 1 })
    }
  },
  add_older_messages(state, { id, data }) {
    const index = state.conversations.findIndex(conv => conv.id === id)
    if (~index) {
      state.conversations[index].messages.unshift(...data.data.reverse())
      state.conversations[index].next_url = data.next_page_url
    }
  }
}

const actions = {
  open_conversation({ commit, state }, user) {
    commit('notifications/removeChat', user, { root: true })
    commit('headerIcons/removeChatNotification', null, { root: true })
    const index = state.conversations.findIndex(conv => conv.id === user.id)
    if (~index) commit('activate_conversation', index)
    else {
      makeRequestTo.get_conversation(user.id).then(({ data }) => {
        commit('add_conversation', {
          id: user.id,
          user,
          messages: data.data.reverse(),
          open: true,
          active: true,
          next_url: data.next_page_url
        })
        commit('set_latest_active_id', user.id)
      })
    }
  }
}

export { state, getters, mutations, actions }
