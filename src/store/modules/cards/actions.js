import request from '@/services/axios_instance'

export const actions = {
  fill_cards({ commit }) {
    request
      .get('api/dashboard/default/dashitems')
      .then(({ data }) => commit('set_cards', data))
  },
  update_cards({ commit }, payload) {
    request
      .post('api/dashboard/default/dashitems', payload)
      .then(({ data }) => commit('set_cards', data))
  }
}
