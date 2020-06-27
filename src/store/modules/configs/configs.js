import _cloneDeep from 'lodash/cloneDeep'
import request from '@/services/axios_instance'

const original = {
    title: 'Buzzooka Dashboard',
    lang: 'english',
    theme: 'default',
    date_format: 'Y-M-D',
    timeline_display_limits: 15,
    general_page_limits: 12,
    messages_page_limits: 10,
    currency: { currency_code: 'USD', symbol: '$', text: 'US Dollar' },
    info_tips: 'No',
    client_registration: 'No',
    notif_duration: 1800,
    license_key: null,
    long_logo: require('@/assets/logo/buzzooka-blue.png'),
    square_logo: require('@/assets/logo/mini-blue.png'),
}

const state = Object.assign({}, _cloneDeep(original), { original: _cloneDeep(original) })

const getters = {
    current: state => _cloneDeep(state),
    original: state => _cloneDeep(original),
    title: state => state.title,
    lang: state => state.lang,
    theme: state => state.theme,
    date_format: state => state.date_format,
    timeline_display_limits: state => state.timeline_display_limits,
    general_page_limits: state => state.general_page_limits,
    messages_page_limits: state => state.messages_page_limits,
    currency: state => state.currency,
    info_tips: state => state.info_tips,
    client_registration: state => state.client_registration,
    notif_duration: state => state.notif_duration,
    license_key: state => state.license_key,
    long_logo: state => state.long_logo,
    square_logo: state => state.square_logo,
}

const mutations = {
    set_title: (state, payload) => state.title = payload,
    set_lang: (state, payload) => state.lang = payload,
    set_theme: (state, payload) => state.theme = payload,
    set_date_format: (state, payload) => state.date_format = payload,
    set_timeline_display_limits: (state, payload) => state.timeline_display_limits = payload,
    set_general_page_limits: (state, payload) => state.general_page_limits = payload,
    set_messages_page_limits: (state, payload) => state.messages_page_limits = payload,
    set_currency: (state, payload) => state.currency = payload,
    set_info_tips: (state, payload) => state.info_tips = payload,
    set_client_registration: (state, payload) => state.client_registration = payload,
    set_notif_duration: (state, payload) => state.notif_duration = payload,
    set_license_key: (state, payload) => state.license_key = payload,
    set_long_logo: (state, payload) => state.long_logo = payload,
    set_square_logo: (state, payload) => state.square_logo = payload,
}

const actions = {
    updateSettings({ commit }, payload) {
        commit('set_title', payload.title)
        commit('set_lang', payload.lang)
        commit('set_theme', payload.theme)
        commit('set_date_format', payload.date_format)
        commit('set_timeline_display_limits', payload.timeline_display_limits)
        commit('set_general_page_limits', payload.general_page_limits)
        commit('set_messages_page_limits', payload.messages_page_limits)
        commit('set_currency', payload.currency)
        commit('set_info_tips', payload.info_tips)
        commit('set_client_registration', payload.client_registration)
        commit('set_notif_duration', payload.notif_duration)
        commit('set_license_key', payload.license_key)
    },
    fetchSettings({ commit }, payload) {
        request.get(`api/company/${payload.company_id}/settings`)
            .then(({ data }) => {
                commit('set_title', data.title)
                commit('set_lang', data.lang)
                commit('set_theme', data.theme)
                commit('set_date_format', data.date_format)
                commit('set_timeline_display_limits', data.timeline_display_limits)
                commit('set_general_page_limits', data.general_page_limits)
                commit('set_messages_page_limits', data.messages_page_limits)
                commit('set_currency', data.currency)
                commit('set_info_tips', data.info_tips)
                commit('set_client_registration', data.client_registration)
                commit('set_notif_duration', data.notif_duration)
                commit('set_license_key', data.license_key)
            })
    }
}

export { state, getters, mutations, actions }