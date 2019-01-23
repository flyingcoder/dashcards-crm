const state = {
  picture_dialog: {
    open: false
  }
}

const getters = {
  picture_dialog_is_open: state => state.picture_dialog.open
}

const mutations = {
  set_picture_dialog: (state, payload) => (state.picture_dialog.open = payload)
}

export { state, getters, mutations }
