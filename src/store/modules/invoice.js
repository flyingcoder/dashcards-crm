const state = {
  rows: []
}

const getters = {
  rows: state => state.rows
}

const mutations = {
  add_new_row: (state, payload) => state.rows.push(payload),
  delete_row: (state, index) => state.rows.splice(index, 1),
  update_row: (state, { row, index }) => state.rows.splice(index, 1, row)
}

export { state, getters, mutations }
