import auth from '../middleware/auth'

export const connect = {
  path: 'connect',
  name: 'connect',
  component: () => import('@/modules/Connect/Connect.vue'),
  meta: {
    middleware: [auth]
  }
}
