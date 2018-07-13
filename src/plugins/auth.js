import store from '../store/store'

export default function (Vue) {
  Vue.auth = {
    isAuthenticated () {
      return store.getters.isLogged
    },
    logout () {

    }
  }

  Object.defineProperties(Vue.prototype, {
    $auth: {
      get () {
        return Vue.auth
      }
    }
  })

}
