export const setPassword = {
  path: '/set-password/:email/:code',
  name: 'set_password',
  component: () => import('@/modules/SetPassword/SetPassword.vue')
}
