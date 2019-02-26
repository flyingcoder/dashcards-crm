import _isEqual from 'lodash/isEqual'

export const getters = {
  invoice: state => state.invoice,
  invoice_id: state => {
    if (state.hasOwnProperty('invoice')) return state.invoice.invoice_id
  },
  company_logo: state => {
    if (state.hasOwnProperty('invoice')) return state.invoice.company_logo
  },
  title: state => {
    if (state.hasOwnProperty('invoice')) return state.invoice.title
  },
  billed_to: state => {
    if (state.hasOwnProperty('invoice')) return state.invoice.billed_to
  },
  billed_from: state => {
    if (state.hasOwnProperty('invoice')) return state.invoice.billed_from
  },
  rows: state => {
    if (state.hasOwnProperty('invoice')) return state.invoice.rows
  },
  selected_project: state => {
    if (state.hasOwnProperty('invoice')) return state.invoice.selected_project
  },
  type: state => {
    if (state.hasOwnProperty('invoice')) return state.invoice.type
  },
  due_date: state => {
    if (state.hasOwnProperty('invoice')) return state.invoice.due_date
  },
  date: state => {
    if (state.hasOwnProperty('invoice')) return state.invoice.date
  },
  notes: state => {
    if (state.hasOwnProperty('invoice')) return state.invoice.notes
  },
  terms: state => {
    if (state.hasOwnProperty('invoice')) return state.invoice.terms
  },
  tax: state => {
    if (state.hasOwnProperty('invoice')) return state.invoice.tax
  },
  discount: state => {
    if (state.hasOwnProperty('invoice')) return state.invoice.discount
  },
  shipping: state => {
    if (state.hasOwnProperty('invoice')) return state.invoice.shipping
  },
  dialog: state => state.dialog,
  toolbar: state => state.toolbar,
  projects: state => state.projects,
  can_create_invoice(state) {
    if (!state.hasOwnProperty('invoice')) return
    return !!(
      state.invoice.date &&
      state.invoice.due_date &&
      state.invoice.title &&
      state.invoice.rows.length &&
      state.invoice.billed_from &&
      state.invoice.billed_to
    )
  },
  can_edit_invoice(state, getters) {
    return (
      !_isEqual(state.invoice, state.invoice_to_edit) &&
      getters.can_create_invoice
    )
  }
}
