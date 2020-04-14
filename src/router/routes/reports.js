import auth from '../middleware/auth'

export const reports = {
  path: 'reports',
  name: 'reports',
  component: () => import('@/modules/Reports/Reports.vue'),
  meta: {
    middleware: [auth]
  }
}
