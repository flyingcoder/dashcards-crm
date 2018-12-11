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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
