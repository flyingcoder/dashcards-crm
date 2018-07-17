import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home/Home.vue'
import Login from './views/Login/Login.vue'
import Dashboard from './views/Dashboard/Dashboard.vue'
import Signup from './views/Signup/Signup.vue'
import ForgotPassword from './views/ForgotPassword/ForgotPassword.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },

    {
      path: '/forgot-password',
      name: 'forgot_password',
      component: ForgotPassword
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
