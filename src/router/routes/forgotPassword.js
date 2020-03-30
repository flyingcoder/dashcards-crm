import guest from '../middleware/guest'

export const forgotPassword = {
  path: '/forgot-password',
  name: 'forgot_password',
  component: () => import('@/modules/ForgotPassword/ForgotPassword.vue'),
  meta: {
    middleware: [guest]
  }
}
