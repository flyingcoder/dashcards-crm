export const initial_state = () => ({
  invoice: {
    company_logo: null,
    invoice_id: null,
    title: 'Unnamed',
    billed_to: null,
    billed_from: null,
    rows: [],
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
  },
  copy_invoice: null,
  dialog: {
    type: null,
    open: false
  },
  toolbar: {
    title: null
  },
  projects: []
})
