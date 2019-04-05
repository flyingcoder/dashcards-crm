import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import './plugins/auth'
import './plugins/pusher'
import './plugins/eventbus'
import './plugins/vuelidate'
import './plugins/permissions'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const authenticated = !!localStorage.getItem('token')

  if (['login', 'signup'].includes(to.name) && !authenticated) {
    next()
  } else if (['login', 'signup'].includes(to.name) && authenticated) {
    next({ path: '/dashboard' })
  } else if (to.name === 'home' && !authenticated) {
    next({ name: 'login' })
  } else if (to.name === 'not_found') {
    next()
  } else if (!authenticated) {
    next({ name: 'not_found' })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
