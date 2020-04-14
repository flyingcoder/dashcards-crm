import auth from '../middleware/auth'

export const forms = {
  path: 'forms',
  name: 'forms',
  component: () => import('@/modules/Forms/Forms.vue'),
  meta: {
    middleware: [auth]
  }
}
