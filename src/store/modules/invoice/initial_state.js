export const initial_state = () => ({
  create_dialog: false,
  edit_dialog: false,
  invoice_id: null,
  title: 'Unnamed',
  billed_to: null,
  billed_from: null,
  rows: [],
  projects: [],
  selected_project: null,
  due_date: null,
  date: null,
  total_amount: 0,
  notes: '',
  terms: '',
  tax: {
    symbol: '%',
    value: null,
    show: false
  },
  discount: {
    symbol: '%',
    value: null,
    show: false
  },
  shipping: {
    value: null,
    show: false
  }
})
