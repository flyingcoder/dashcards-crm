import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import './plugins/auth'
import './plugins/eventbus'
import './plugins/vuelidate'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (['login', 'not_found', 'signup'].includes(to.name)) {
    next()
  } else if (store.getters.is_user_logged) {
    next()
  } else {
    next({ name: 'not_found' })
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
