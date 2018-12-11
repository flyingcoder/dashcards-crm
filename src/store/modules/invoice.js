import request from '@/services/axios_instance'

const state = {
  rows: [],
  projects: [],
  selected_project: null
}

const getters = {
  rows: state => state.rows,
  projects: state => state.projects,
  selected_project: state => state.selected_project
}

const mutations = {
  add_new_row: (state, payload) => state.rows.push(payload),
  add_rows: (state, payload) => state.rows.push(...payload),
  delete_row: (state, index) => state.rows.splice(index, 1),
  update_row: (state, { row, index }) => state.rows.splice(index, 1, row),

  set_projects: (state, payload) => (state.projects = payload),
  set_selected_project: (state, payload) => (state.selected_project = payload)
}

const actions = {
  fetch_projects({ commit }) {
    request
      .get('api/projects?all=true')
      .then(({ data }) => commit('set_projects', data))
  },
  fetch_tasks({ commit }, api) {
    request.get(api).then(({ data }) => {
      const rows = data.map(task => ({
        descriptions: task.title,
        hours: get_hours(task.total_time),
        rate: null,
        amount: null
      }))
      rows.length && commit('add_rows', rows)
    })
    function get_hours(time) {
      const hours = time.split(':')[0]
      const mins = time.split(':')[1]
      return Number(Number(hours) + Number(mins / 60)).toPrecision(3)
    }
  }
}

export { state, getters, mutations, actions }
