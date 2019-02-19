import moment from 'moment/moment'
import { initial_state } from './initial_state'

export const mutations = {
  set_company_logo: (state, payload) => (state.invoice.company_logo = payload),
  set_dialog: (state, payload) => (state.dialog = payload),
  set_invoice_id: (state, payload) => (state.invoice.invoice_id = payload),
  set_toolbar: (state, payload) => (state.toolbar = payload),
  add_new_row: (state, payload) => state.invoice.rows.push(payload),
  add_rows: (state, payload) => state.invoice.rows.push(...payload),
  delete_row: (state, index) => state.invoice.rows.splice(index, 1),
  update_row: (state, { row, index }) => state.invoice.rows.splice(index, 1, row),
  clear_rows: state => (state.invoice.rows = []),
  set_projects: (state, payload) => (state.projects = payload),
  set_selected_project: (state, payload) => (state.invoice.selected_project = payload),
  set_type: (state, payload) => (state.invoice.type = payload),
  update_date: (state, { date, field }) => (state.invoice[field] = date),
  init_date: state => (state.invoice.date = moment().format('YYYY-MM-DD')),
  set_total_amount: (state, payload) => (state.invoice.total_amount = payload),
  set_textarea: (state, { new_val, field }) => (state.invoice[field] = new_val),
  set_title: (state, newtitle) => (state.invoice.title = newtitle),
  set_billed_to: (state, payload) => (state.invoice.billed_to = payload),
  set_billed_from: (state, payload) => (state.invoice.billed_from = payload),
  toggle_visibility: (state, { new_val, field }) =>
    (state.invoice[field].show = new_val),
  set_field: (state, { new_val, field }) =>
    (state.invoice[field].value = Number(new_val)),
  toggle_symbol(state, field) {
    if (state.invoice[field].symbol === '%') state.invoice[field].symbol = '$'
    else state.invoice[field].symbol = '%'
  },
  reset_state(state) {
    const initial = initial_state()
    Object.keys(initial).forEach(key => {
      state[key] = initial[key]
    })
  },
  open_invoice_for_editing(state, payload) {
    state.invoice_id = payload.id
    state.billed_to = payload.billed_to
    state.billed_from = payload.billed_from
    state.date = payload.date
    state.due_date = payload.due_date
    state.selected_project = payload.project_id
    state.rows = payload.items
    state.terms = payload.terms
    state.title = payload.title
    state.type = payload.type
    if (payload.tax) state.tax = payload.tax
    if (payload.discount) state.discount = payload.discount
    state.edit_dialog = true
  }
}
