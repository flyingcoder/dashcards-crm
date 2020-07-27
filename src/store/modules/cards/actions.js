import request from '@/services/axios_instance'

export const actions = {
    fill_cards({commit}) {
        return request
            .get('api/dashboard/default/dashitems')
            .then(({data}) => commit('set_cards', data))
    },
    update_cards({commit}, payload) {
        return request
            .post('api/dashboard/default/dashitems', payload)
            .then(({data}) => commit('set_cards', data))
    }
}
