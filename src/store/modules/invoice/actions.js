import request from '@/services/axios_instance'

export const actions = {
  fetch_projects({ commit }) {
    request
      .get('api/projects?all=true')
      .then(({ data }) => commit('set_projects', data))
  },
  fetch_tasks({ commit }, api) {
    request.get(api).then(({ data }) => {
      commit('set_billed_to', data.billed_to)
      commit('set_billed_from', data.billed_from)
      const rows = data.tasks.map(task => ({
        descriptions: task.title,
        hours: get_hours(task.total_time),
        rate: null,
        amount: null
      }))
      rows.length && commit('add_rows', rows)
    })
    function get_hours(time) {
      const hours = time.split(':')[0]
      const mins = time.split(':')[1]
      return Number(Number(hours) + Number(mins / 60)).toPrecision(3)
    }
  },
  save_invoice({ state }, { method, api }) {
    const obj = {
      project_id: state.selected_project,
      type: state.type,
      title: state.title,
      billed_to: state.billed_to,
      billed_from: state.billed_from,
      date: state.date,
      due_date: state.due_date,
      total_amount: state.total_amount,
      items: state.rows,
      terms: state.terms,
      notes: state.notes,
      tax: calculate_field(state, 'tax'),
      discount: calculate_field(state, 'discount'),
      shipping: calculate_field(state, 'shipping', false)
    }

    return request[method](api, obj)
  },
  delete_invoice({ state, commit }, { id }) {
    return request.delete(`api/invoice/${id}`)
  }
}

const calculate_field = (state, field, has_symbol = true) => {
  if (state[field].show && has_symbol)
    return {
      value: state[field].value,
      symbol: state[field].symbol
    }
  if (state[field].show && !has_symbol)
    return {
      value: state[field].value
    }
  return null
}
