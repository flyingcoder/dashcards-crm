import moment from 'moment/moment'
import { initial_state } from './initial_state'

export const mutations = {
  set_company_logo: (state, payload) => (state.company_logo = payload),
  set_create_dialog: (state, payload) => (state.create_dialog = payload),
  set_edit_dialog: (state, payload) => (state.edit_dialog = payload),
  set_invoice_id: (state, payload) => (state.invoice_id = payload),
  add_new_row: (state, payload) => state.rows.push(payload),
  add_rows: (state, payload) => state.rows.push(...payload),
  delete_row: (state, index) => state.rows.splice(index, 1),
  update_row: (state, { row, index }) => state.rows.splice(index, 1, row),
  clear_rows: state => (state.rows = []),
  set_projects: (state, payload) => (state.projects = payload),
  set_selected_project: (state, payload) => (state.selected_project = payload),
  set_type: (state, payload) => (state.type = payload),
  update_date: (state, { date, field }) => (state[field] = date),
  init_date: state => (state.date = moment().format('YYYY-MM-DD')),
  set_total_amount: (state, payload) => (state.total_amount = payload),
  set_textarea: (state, { new_val, field }) => (state[field] = new_val),
  set_title: (state, newtitle) => (state.title = newtitle),
  set_billed_to: (state, payload) => (state.billed_to = payload),
  set_billed_from: (state, payload) => (state.billed_from = payload),
  toggle_visibility: (state, { new_val, field }) =>
    (state[field].show = new_val),
  set_field: (state, { new_val, field }) =>
    (state[field].value = Number(new_val)),
  toggle_symbol(state, field) {
    if (state[field].symbol === '%') state[field].symbol = '$'
    else state[field].symbol = '%'
  },
  reset_state(state) {
    const initial = initial_state()
    Object.keys(initial).forEach(key => {
      state[key] = initial[key]
    })
  },
  open_invoice_for_editing(state, payload) {
    state.invoice_id = payload.id
    state.date = payload.date
    state.due_date = payload.due_date
    state.selected_project = payload.project_id
    state.terms = payload.terms
    state.title = payload.title
	  state.type = payload.type
    if (payload.tax) state.tax = payload.tax
    if (payload.discount) state.discount = payload.discount
    state.edit_dialog = true
  }
}
