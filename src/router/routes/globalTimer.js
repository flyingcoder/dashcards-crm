import auth from '../middleware/auth'

export const globalTimer = {
  path: 'global-timer',
  name: 'globalTimer',
  component: () =>
    import('@/modules/Timer/subpages/globalTimer/globalTimer.vue'), //,
  meta: {
    middleware: [auth]
  }
}
