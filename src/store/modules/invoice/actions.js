import request from '@/services/axios_instance'

export const actions = {
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
