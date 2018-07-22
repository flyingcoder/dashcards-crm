import Vue from 'vue'
import Router from 'vue-router'
import {check_user} from "./route_guard"

import Home from '@/views/Home/Home.vue'
import Login from '@/views/Login/Login.vue'
import Signup from '@/views/Signup/Signup.vue'
import ForgotPassword from '@/views/ForgotPassword/ForgotPassword.vue'
import DefaultDashboard from '@/views/DashboardContent/DashboardContent.vue'
import NotFound from '@/views/NotFound/NotFound.vue'
import Dashboard from '@/views/Dashboard/Dashboard.vue'
import Groups from '@/views/Groups/Groups.vue'
import Pricing from '@/views/Pricing/Pricing.vue'

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
      component: Dashboard,
      children: [
        {
          path: '',
          name: 'default-content',
          component: DefaultDashboard
        },
        {
          path: 'projects',
          name: 'projects'
        },
				{
					path: 'clients',
					name: 'clients'
				},
				{
					path: 'calendar',
					name: 'calendar'
				},
				{
					path: 'milestones',
					name: 'milestones'
				},
				{
					path: 'forms',
					name: 'forms'
				},
				{
					path: 'invoice',
					name: 'invoice'
				},
				{
					path: 'payment',
					name: 'payment'
				},
				{
					path: 'timers',
					name: 'timers'
				},
				{
					path: 'cloud',
					name: 'cloud'
				},
				{
					path: 'team',
					name: 'team'
				},
				{
					path: 'chat',
					name: 'chat'
				},
        {
					path: 'reports',
					name: 'reports'
				},
        {
					path: 'support',
					name: 'support'
				},
        {
					path: 'services',
					name: 'services'
				},
      ],
      beforeEnter(to, from, next) {
        if (check_user.is_user_logged()) {
          next()
        }else {
          next({name: 'not_found'})
        }
      }
    },

    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing,
       beforeEnter(to, from, next) {
          if (check_user.is_user_logged()) {
            next()
          }else {
            next({name: 'not_found'})
          }
       }
    },

    {
      path: '/groups',
      name: 'groups',
      component: Groups,
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
