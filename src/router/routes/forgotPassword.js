import { check_user } from '../route_guard'

export const forgotPassword = {
  path: '/forgot-password',
  name: 'forgot_password',
  component: () => import('@/modules/ForgotPassword/ForgotPassword.vue'),
  beforeEnter(to, from, next) {
    if (check_user.is_user_logged()) {
      next({ name: 'not_found' })
    } else {
      next()
    }
  }
}
