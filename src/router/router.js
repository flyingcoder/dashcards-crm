import Vue from 'vue'
import Router from 'vue-router'
import {check_user} from "./route_guard"

import {import_all_views} from "../services/importAll"
let all_views = import_all_views()

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: all_views.Login,
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
      component: all_views.Signup,
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
      component: all_views.ForgotPassword,
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
      component: all_views.Home,
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
      component: all_views.Dashboard,
      children: [
        {
          path: '',
          name: 'default-content',
          component: all_views.DashboardContent
        },
        {
          path: 'projects',
          name: 'projects',
					component: all_views.Projects
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
          name: 'team',
          component: all_views.Teams
				},
				{
					path: 'team/groups',
          name: 'team/groups',
          component: all_views.Groups
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
      component: all_views.Pricing,
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
      component: all_views.Groups,
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
      component: all_views.NotFound,
    }
  ],
  mode: 'history'
})
