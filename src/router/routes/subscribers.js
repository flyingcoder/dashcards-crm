import auth from '../middleware/auth'

export const subscribers = {
  path: 'subscriber',
  name: 'subscriber',
  component: () => import('@/modules/Subscribers/Subscribers.vue'),
  meta: {
    middleware: [auth]
  }
}
