export const getters = {
  invoice: state => state.invoice,
  company_logo: state => state.invoice.company_logo,
  dialog: state => state.dialog,
  invoice_id: state => state.invoice.invoice_id,
  toolbar: state => state.toolbar,
  title: state => state.invoice.title,
  billed_to: state => state.invoice.billed_to,
  billed_from: state => state.invoice.billed_from,
  rows: state => state.invoice.rows,
  projects: state => state.projects,
  selected_project: state => state.invoice.selected_project,
  type: state => state.invoice.type,
  due_date: state => state.invoice.due_date,
  date: state => state.invoice.date,
  notes: state => state.invoice.notes,
  terms: state => state.invoice.terms,
  tax: state => state.invoice.tax,
  discount: state => state.invoice.discount,
  shipping: state => state.invoice.shipping,
  can_create_invoice(state) {
    return !!(
      state.invoice.date &&
      state.invoice.due_date &&
      state.invoice.title &&
      state.invoice.rows.length &&
      state.invoice.billed_from &&
      state.invoice.billed_to
    )
  }
}
