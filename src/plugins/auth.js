import Vue from 'vue'
import store from '@/store/store'
import make_request_to from '@/services/makeRequestTo'
import router from '@/router/router'

(function() { //for setting the user when the page refreshes
  const user = localStorage.getItem('user')
  if (user) {
    store.commit('set_user', JSON.parse(user))
  }
})()

const auth = {
    isAuthenticated () {
      return store.getters.is_user_logged
    },

    logout() {

    },

    login({ email, password }) {
      make_request_to.login({ email, password })
        .then(async response => {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('user', JSON.stringify(response.data.user))
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