//test commit
import Vue from 'vue'
import './plugins/axios'
import './plugins/auth'
import './plugins/pusher'
import './plugins/eventbus'
import './plugins/vuelidate'
import './plugins/permissions'
import './plugins/v-calendar'
import './plugins/datetimepickers'
import './plugins/v-videoplayer'
import './plugins/vue-components'
import './plugins/vue-googleapi'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router/router'
import store from './store/store'
import middlewarePipeline from './router/middlewarePipeline'
import methods from '@/global_utils/global_mixin'
import { global_filters } from '@/global_utils/global_filters'

Vue.config.productionTip = false

Vue.mixin({
  methods: methods,
  filters: global_filters
})

router.beforeEach((to, from, next) => {
  // console.log(from, to)
  if (!to.meta.middleware) {
    return next()
  }

  const middleware = to.meta.middleware

  const context = {
    to,
    from,
    next,
    store
  }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
