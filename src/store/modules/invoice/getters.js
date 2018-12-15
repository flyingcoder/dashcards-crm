export const getters = {
  create_dialog: state => state.create_dialog,
  edit_dialog: state => state.edit_dialog,
  invoice_id: state => state.invoice_id,
  title: state => state.title,
  billed_to: state => state.billed_to,
  billed_from: state => state.billed_from,
  rows: state => state.rows,
  projects: state => state.projects,
  selected_project: state => state.selected_project,
  due_date: state => state.due_date,
  date: state => state.date,
  notes: state => state.notes,
  terms: state => state.terms,
  tax: state => state.tax,
  discount: state => state.discount,
  shipping: state => state.shipping,
  can_create_invoice(state) {
    return !!(
      state.selected_project &&
      state.date &&
      state.due_date &&
      state.title &&
      state.rows.length
    )
  }
}
