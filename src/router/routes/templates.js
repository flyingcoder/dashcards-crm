import auth from '../middleware/auth'

export const templates = {
  path: 'templates',
  name: 'templates',
  component: () => import('@/modules/Templates/Templates.vue'),
  meta: {
    middleware: [auth]
  }
}
