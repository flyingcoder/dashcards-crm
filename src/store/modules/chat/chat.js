import _cloneDeep from 'lodash/cloneDeep'
import makeRequestTo from '@/services/makeRequestTo'

const state = {
  conversations: [] //objects of => { id, user, active, messages, open }
}

const getters = {
  all_conversations: state => state.conversations,
  active_conv: state => state.conversations.filter(conv => conv.active)
}

const mutations = {
  add_conversation: (state, payload) => state.conversations.push(payload),
  activate_conversation: (state, index) =>
    (state.conversations[index].active = true),
  toggle_active_conv: (state, id) => {
    let conv = _cloneDeep(state.conversations)
    const index = conv.findIndex(conv => conv.id === id)
    if (~index) {
      conv[index].open = !conv[index].open
      state.conversations = conv
    }
  }
}

const actions = {
  open_conversation({ commit, state }, user) {
    const index = state.conversations.findIndex(conv => conv.id === user.id)
    if (~index) commit('activate_conversation', index)
    else {
      makeRequestTo.get_conversation(user.id).then(({ data }) => {
        commit('add_conversation', {
          id: user.id,
          user,
          messages: data.data,
          open: true,
          active: true
        })
      })
    }
  }
}

export { state, getters, mutations, actions }
