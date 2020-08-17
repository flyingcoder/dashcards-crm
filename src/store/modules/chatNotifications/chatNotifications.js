import request from "@/services/axios_instance";

const state = {
    chat: [],
    chat_counts: 0,
    notification: [],
    notification_counts: 0,
    next_chat_page_url: null,
    next_notification_page_url: null
}

const getters = {
    chat: state => state.chat,
    chat_counts: state => state.chat_counts > 0 ? state.chat_counts : false,
    notification: state => state.notification,
    notification_counts: state => {
        let unread = state.notification.filter(n => {
            return !n.read_at
        })
        return unread.length > 0 ? unread.length : false
    },
    has_more_notification: state => !!state.next_notification_page_url,
    has_more_chat: state => !!state.next_chat_page_url,
}

const mutations = {
    set_chat: (state, payload) => {
        state.chat = payload
    },
    set_chat_counts: (state, payload) => {
        state.chat_counts = payload
    },
    add_chat: (state, payload) => {
        let index = state.chat.findIndex(item => item.conversation_id === payload.conversation_id)
        if (~index) {
            state.chat.splice(index, 1, payload)
        } else {
            state.chat.unshift(payload)
        }
    },
    add_bulk_chat: (state, payload) => {
        payload.forEach(message => {
            let index = state.chat.findIndex(item => item.conversation_id === message.conversation_id)
            if (~index) {
                state.chat.splice(index, 1, message)
            } else {
                state.chat.unshift(message)
            }
        })
    },

    set_notification: (state, payload) => {
        state.notification = payload
    },
    add_notification: (state, payload) => {
        let index = state.notification.findIndex(item => item.id === payload.id)
        if (!(~index))
            state.notification.unshift(payload)
    },
    add_bulk_notification: (state, payload) => {
        state.notification.unshift(...payload)
    },
    set_next_chat_page_url: (state, payload) => {
        state.next_chat_page_url = payload
    },
    set_next_notification_page_url: (state, payload) => {
        state.next_notification_page_url = payload
    },
    set_mark_as_read_notification: (state, payload) => {
        let index = state.notification.findIndex(item => item.id === payload)
        if (~index) {
            state.notification[index].read_at = true
        }
    },
    set_mark_as_read_chat: (state, payload) => {
        let index = state.chat.findIndex(item => item.conversation_id === payload)
        if (~index) {
            if (state.chat[index].notification) {
                state.chat[index].notification.is_seen = true
            }
        }
    },
    set_mark_all_as_read: (state, payload) => {
        if (payload === 'chat') {
            state.chat = state.chat.map((item, index) => {
                if (item.notification)
                    item.notification.is_seen = true
                return item;
            })
            state.chat_counts = 0
        } else {
            state.notification = state.notification.map((item, index) => {
                item.read_at = true
                return item;
            })
            state.notification_counts = 0
        }
    },
}

const actions = {
    fetch_unread_chat_counts({commit}) {
        request.get(`api/notifications/chat/count`)
            .then(({data}) => {
                commit('set_chat_counts', data.count)
            })
    },
    fetch_chat({commit}) {
        request.get(`api/notifications?type=chat-notification`)
            .then(({data}) => {
                commit('set_chat', data.data)
                commit('set_next_chat_page_url', data.next_page_url)
            })
    },
    fetch_more_chat({commit, state}) {
        request.get(state.next_chat_page_url)
            .then(({data}) => {
                commit('add_bulk_chat', data.data)
                commit('set_next_chat_page_url', data.next_page_url)
            })
    },
    fetch_notification({commit}) {
        request.get(`api/notifications`)
            .then(({data}) => {
                commit('set_notification', data.data)
                commit('set_next_notification_page_url', data.next_page_url)
            })
    },
    fetch_more_notification({commit, state}) {
        request.get(state.next_notification_page_url)
            .then(({data}) => {
                commit('add_bulk_notification', data.data)
                commit('set_next_notification_page_url', data.next_page_url)
            })
    },
    mark_as_read_chat({commit}, convo_id) {
        request.put(`api/notifications/chat/${convo_id}/mark-as-read`)
            .then(() => {
                commit('set_mark_as_read_chat', convo_id)
            })
    },
    mark_as_read_notification({commit}, id) {
        request.put(`api/notifications/company/${id}/mark-as-read`)
            .then(() => {
                commit('set_mark_as_read_notification', id)
            })
    },
    mark_all_as_read({commit}, type) {
        request.put(`api/notifications/${type}/mark-as-read`)
            .then(() => {
                commit('set_mark_all_as_read', type)
            })
    }
}

export {state, getters, mutations, actions}
