import request from '@/services/axios_instance'

const state = {
    tasks_res: null,
    tasks: [],
    total: 0,
    loading: null,
    id: null,
    see_more_url: null,
    page: null,
    btnloading: false,
    counter: {
        total : 0,
        completed : 0,
        pending : 0,
        behind : 0,
        open : 0,
        urgent: 0
    }
}

const getters = {
    tasks_res: state => state.tasks_res,
    tasks: state => state.tasks,
    counter: state => state.counter,
    total: state => state.total,
    loading: state => state.loading,
    see_more_url: state => state.see_more_url,
    page: state => state.page,
    id: state => state.id,
    btnloading: state => state.btnloading
}

const mutations = {
    set_id: (state, payload) => (state.id = payload),
    set_page: (state, payload) => (state.page = payload),
    set_tasks: (state, payload) => (state.tasks = payload),
    set_total: (state, payload) => (state.total = payload),
    set_tasks_res: (state, payload) => (state.tasks_res = payload),
    set_counter: (state, payload) => (state.counter = payload),
    set_loading: (state, payload) => (state.loading = payload),
    set_btnloading: (state, payload) => (state.btnloading = payload),
    add_task: (state, payload) => state.tasks.push(payload),
    del_task: (state, payload) => {
        let index = state.tasks.findIndex(task => task.id === payload.id)
        if (~index) state.tasks.splice(index, 1)
    },
    replace_task: (state, payload) => {
        let index = state.tasks.findIndex(task => task.id === payload.id)
        if (~index) {
            state.tasks.splice(index, 1, payload)
        }
    },
    set_see_more_url: (state, payload) => (state.see_more_url = payload)
}

const actions = {
    get_tasks({commit, state}, payload) {
        commit('set_loading', true)

        let api_url = 'api/task'
        if (state.id) {
            api_url = `api/projects/${state.id}/tasks`
        }
        if (payload === 'My Tasks') api_url += '/mine'

        request
            .get(api_url)
            .then(({data}) => {
                commit('set_tasks_res', data)
                commit('set_tasks', data.data)
                commit('set_total', data.total)
                commit('set_see_more_url', data.next_page_url)
                commit('set_counter', data.counter)
            })
            .finally(() => commit('set_loading', false))
    },
    see_more({commit, state}) {
        commit('set_loading', true)
        commit('set_btnloading', true)
        request
            .get(state.see_more_url)
            .then(({data}) => {
                let current_tasks = state.tasks_res.data
                commit('set_tasks', current_tasks.concat(data.data))
                commit('set_see_more_url', data.next_page_url)
            })
            .finally(() => {
                commit('set_loading', false)
                commit('set_btnloading', false)
            })
    }
}

export {state, getters, mutations, actions}