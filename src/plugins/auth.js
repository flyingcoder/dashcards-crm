import Vue from 'vue'
import store from '@/store/store'
import make_request_to from '@/services/makeRequestTo'
import router from '@/router/router'

;(function() {
  //for setting the user when the page refreshes
  const user = localStorage.getItem('user')
  if (user) {
    store.commit('set_user', JSON.parse(user))
  }
})()

async function set_to_localStorage({ data }) {
  localStorage.setItem('token', data.token)
  localStorage.setItem('user', JSON.stringify(data.user))
  await store.dispatch('login', data)
  router.push({ name: 'default-content' })
}

export const auth = {
  isAuthenticated() {
    return store.getters.is_user_logged
  },

  logged_user() {
    return store.getters.user
  },

  logout() {
    make_request_to.logout().then(() => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      router.go('/login')
    })
  },

  login({ email, password }) {
    store.commit('set_custom_loader', true)
    make_request_to
      .login({ email, password })
      .then(response => set_to_localStorage(response))
      .finally(() => store.commit('set_custom_loader', false))
  },

  register(fields) {
    store.commit('set_custom_loader', true)
    make_request_to
      .register(fields)
      .then(response => {
        store.commit('open_snackbar', {
          status: true,
          message: response.data.message
        })
        set_to_localStorage(response)
      })
      .finally(() => store.commit('set_custom_loader', false))
  }
}

const Authentication = {
  install: Vue => {
    Vue.prototype.$auth = auth
  }
}

Vue.use(Authentication)

export default Authentication
