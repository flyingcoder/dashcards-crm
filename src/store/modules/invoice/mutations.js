import moment from 'moment/moment'

export const mutations = {
  add_new_row: (state, payload) => state.rows.push(payload),
  add_rows: (state, payload) => state.rows.push(...payload),
  delete_row: (state, index) => state.rows.splice(index, 1),
  update_row: (state, { row, index }) => state.rows.splice(index, 1, row),
  set_projects: (state, payload) => (state.projects = payload),
  set_selected_project: (state, payload) => (state.selected_project = payload),
  update_date: (state, { date, field }) => (state[field] = date),
  init_date: state => (state.date = moment().format('YYYY-MM-DD')),
  set_total_amount: (state, payload) => (state.total_amount = payload),
  set_textarea: (state, { new_val, field }) => (state[field] = new_val),
  toggle_visibility: (state, { new_val, field }) =>
    (state[field].show = new_val),
  set_field: (state, { new_val, field }) =>
    (state[field].value = Number(new_val)),
  toggle_symbol(state, field) {
    if (state[field].symbol === '%') state[field].symbol = '$'
    else state[field].symbol = '%'
  },
  reset_state: state => state
}
