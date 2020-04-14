import auth from '../middleware/auth'

export const teams = {
  path: 'team',
  name: 'team',
  component: () => import('@/modules/Teams/Teams.vue'),
  meta: {
    middleware: [auth]
  }
}
