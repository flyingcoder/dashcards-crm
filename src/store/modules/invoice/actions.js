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
    let formData = new FormData()
    formData.append('company_logo', state.company_logo)
    formData.append('project_id', state.selected_project)
    formData.append('type', state.type)
    formData.append('title', state.title)
    formData.append('billed_to', state.billed_to)
    formData.append('billed_from', state.billed_from)
    formData.append('date', state.date)
    formData.append('due_date', state.due_date)
    formData.append('total_amount', state.total_amount)
    formData.append('items', state.rows)
    formData.append('terms', state.terms)
    formData.append('notes', state.notes)
    formData.append('tax', calculate_field(state, 'tax'))
    formData.append('discount', calculate_field(state, 'discount'))
    formData.append('shipping', calculate_field(state, 'shipping', false))

    return request[method](api, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  delete_invoice({ state }, { id }) {
    //TODO move this action in api file (Under makeRequestTo service)
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
  return 0
}
