import Vue from 'vue'
import store from '@/store/store'
import make_request_to from '@/services/makeRequestTo'
import router from '@/router'

const auth = {
    isAuthenticated () {
      return store.getters.is_user_logged
    },

    logout() {

    },

    login({ email, password }) {
      make_request_to.login({ email, password })
        .then(async response => {
          await store.dispatch('login', response.data)
          router.push({ name: 'dashboard' })
        })
    }
}


const Authentication = {
  install: (Vue, options) => {
    Vue.prototype.$auth = auth
  }
}

Vue.use(Authentication)

export default Authentication