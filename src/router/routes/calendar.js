import auth from '../middleware/auth'

export const calendar = {
  path: 'calendar',
  name: 'calendar',
  component: () => import('@/modules/Calendar/Calendar.vue'),
  meta: {
    middleware: [auth]
  }
}
