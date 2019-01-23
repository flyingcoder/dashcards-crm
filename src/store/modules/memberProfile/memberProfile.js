const state = {
  picture_dialog: {
    open: false
  },
  user_id: null
}

const getters = {
  picture_dialog_is_open: state => state.picture_dialog.open,
  user_id: state => state.user_id
}

const mutations = {
  set_picture_dialog: (state, payload) => (state.picture_dialog.open = payload),
  set_user_id: (state, id) => (state.user_id = id)
}

export { state, getters, mutations }
