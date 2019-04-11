export const mutations = {
  set_chat: (state, payload) => (state.chat = payload),
  set_notification: (state, payload) => (state.notification = payload),
  addNotification: state => state.notification++,
  set_messages: (state, payload) => (state.set_messages = payload),
  addNotificationList: (state, payload) =>
    state.notificationList.unshift(payload)
}
