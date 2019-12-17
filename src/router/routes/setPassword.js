export const setPassword = {
  path: '/set-password/:code',
  name: 'set_password',
  component: () => import('@/modules/SetPassword/SetPassword.vue')
}
