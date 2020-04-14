import auth from '../middleware/auth'

export const support = {
  path: 'support',
  name: 'support',
  component: () => import('@/modules/Support/Support.vue'),
  meta: {
    middleware: [auth]
  }
}
