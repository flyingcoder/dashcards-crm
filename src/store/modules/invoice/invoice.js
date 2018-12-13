import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'

const state = {
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
}

export { state, getters, mutations, actions }
