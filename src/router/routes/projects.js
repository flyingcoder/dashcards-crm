import auth from '../middleware/auth'

export const projects = {
  path: 'projects',
  name: 'projects',
  component: () => import('@/modules/Projects/Projects.vue'),
  meta: {
    middleware: [auth]
  }
}
