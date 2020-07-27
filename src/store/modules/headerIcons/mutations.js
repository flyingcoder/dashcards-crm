export const mutations = {
    setChat: (state, payload) => (state.chat = payload),
    setNotification: (state, payload) => (state.notification = payload),
    setMessages: (state, payload) => (state.messages = payload),
    addNotification: state => state.notification++,
    removeChatNotification: state => {
        state.chat--
        if (state.chat <= 0) {
            state.chat = null
        }
    }
}
