export const mutations = {
  setChat: (state, payload) => (state.chat = payload),
  setNotification: (state, payload) => (state.notification = payload),
  setMessages: (state, payload) => (state.messages = payload),
  addNotification: state => state.notification++
}
