import auth from '../middleware/auth'

export const bugs = {
  path: 'bugs',
  name: 'bugs',
  component: () => import('@/modules/Bugs/Bugs.vue'),
  meta: {
    middleware: [auth]
  }
}