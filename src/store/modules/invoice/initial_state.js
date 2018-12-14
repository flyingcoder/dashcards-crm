export const initial_state = () => ({
  create_dialog: false,
  title: 'Unnamed',
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
