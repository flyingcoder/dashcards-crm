import Vue from 'vue'
import Router from 'vue-router'
import {check_user} from "./route_guard"

import Home from '@/views/Home/Home.vue'
import Login from '@/views/Login/Login.vue'
import Dashboard from '@/views/Dashboard/Dashboard.vue'
import Signup from '@/views/Signup/Signup.vue'
import ForgotPassword from '@/views/ForgotPassword/ForgotPassword.vue'
import NotFound from '@/views/NotFound/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter(to, from, next) {
        if (check_user.is_user_logged()) {
          next({name: 'not_found'})
        }else {
          next()
        }
      }
    },

    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      beforeEnter(to, from, next) {
        if (check_user.is_user_logged()) {
          next({name: 'not_found'})
        }else {
          next()
        }
      }
    },

    {
      path: '/forgot-password',
      name: 'forgot_password',
      component: ForgotPassword,
      beforeEnter(to, from, next) {
        if (check_user.is_user_logged()) {
          next({name: 'not_found'})
        }else {
          next()
        }
      }
    },

    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter(to, from, next) {
        if (check_user.is_user_logged()) {
          next()
        }else {
          next({name: 'not_found'})
        }
      }
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter(to, from, next) {
        if (check_user.is_user_logged()) {
          next()
        }else {
          next({name: 'not_found'})
        }
      }
    },

    {
      path: '/404',
      alias: '*',
      name: 'not_found',
      component: NotFound,
    }
  ],
  mode: 'history'
})
