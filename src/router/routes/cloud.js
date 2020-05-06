import auth from '../middleware/auth'

export const cloud = {
  path: 'cloud',
  name: 'cloud',
  component: () => import('@/modules/Cloud/Cloud.vue'),
  meta: {
    middleware: [auth]
  }
}
