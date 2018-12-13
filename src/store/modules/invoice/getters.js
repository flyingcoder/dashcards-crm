export const getters = {
  title: state => state.title,
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
