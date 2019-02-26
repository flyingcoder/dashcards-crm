export const actions = {
  type_changed_to_monthly({ commit }) {
    commit('clear_rows')
    commit('set_selected_project', null)
    commit('set_total_amount', 0)
    commit('set_billed_to', null)
    commit('set_billed_from', null)
  },

  set_table_rows({ commit }, payload) {
    commit('set_billed_to', payload.billed_to)
    commit('set_billed_from', payload.billed_from)
    const rows = payload.tasks.map(task => ({
      descriptions: task.title,
      hours: get_hours(task.total_time),
      rate: null,
      amount: null
    }))
    rows.length && commit('add_rows', rows)
    function get_hours(time) {
      const hours = time.split(':')[0]
      const mins = time.split(':')[1]
      return Number(Number(hours) + Number(mins / 60)).toPrecision(3)
    }
  },
}
