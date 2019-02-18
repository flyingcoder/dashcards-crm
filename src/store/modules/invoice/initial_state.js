export const initial_state = () => ({
  company_logo: null,
  dialog: null,
  invoice_id: null,
  toolbar: {
    title: null,
    submit_disable: false
  },
  title: 'Unnamed',
  billed_to: null,
  billed_from: null,
  rows: [],
  projects: [],
  selected_project: null,
  type: 'monthly',
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
