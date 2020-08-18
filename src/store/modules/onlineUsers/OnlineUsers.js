import request from "@/services/axios_instance";

const state = {
    all_users: [],
    user_conversations: [],
    group_conversations: []
}

const getters = {
    all_users: state => state.all_users,
    user_conversations: state => state.user_conversations,
    group_conversations: state => state.group_conversations,
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
    set_all_users: (state, payload) => (state.all_users = payload),
    set_user_conversations: (state, payload) => (state.user_conversations = payload),
    set_group_conversations: (state, payload) => (state.group_conversations = payload),
    add_group_conversations: (state, payload) => {
        state.group_conversations.unshift(payload)
    },
    update_group_conversations: (state, payload) => {
        let index = state.group_conversations.findIndex(item => item.id === payload.id)
        if (~index)
            state.group_conversations.splice(index, 1, payload)
    }

}

const actions = {
    user_logged_in({commit}, payload) {
        commit('set_user_logged_in', payload)
    },
    user_logged_out({commit}, payload) {
        commit('set_user_logged_out', payload)
    },
    get_conversation_list({commit, state}) {
        request.get(`api/chat/conversations/list?has_msg_count=true`)
            .then(({data}) => {
                let user_list = data.user_list.map(each => {
                    let has = state.all_users.findIndex(us => us.id === each.id)
                    each.is_online = !!(~has)
                    return each
                });
                commit('set_user_conversations', user_list)
                commit('set_group_conversations', data.group_list)
            })
    },
}
export {state, getters, mutations, actions}
