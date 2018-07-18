import '@babel/polyfill'
import Vue from 'vue'
import './plugins/axios'
import './plugins/vuetify'
import './plugins/auth'
import './plugins/eventbus'
import App from './App.vue'
import router from './router'
import store from './store/store'
import lodash from 'lodash';

Vue.config.productionTip = false

// setting up the lodash library
Object.defineProperty(Vue.prototype, '_', { value: lodash });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
