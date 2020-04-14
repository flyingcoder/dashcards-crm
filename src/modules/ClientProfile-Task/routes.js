import auth from '@/router/middleware/auth'

export default {
  path: '',
  name: 'client-profile-tasks',
  props: true,
  component: () => import('./Tasks.vue'),
  meta: {
    middleware: [auth]
  }
}
