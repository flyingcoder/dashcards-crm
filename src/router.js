import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home/Home.vue'
import Login from './views/Login/Login.vue'
import Dashboard from './views/Dashboard/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ],
  mode: 'history'
})
