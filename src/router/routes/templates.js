import auth from '../middleware/auth'

export const templates = {
  path: 'templates',
  name: 'templates',
  component: () => import('@/modules/MilestoneTemplate/MilestoneTemplate.vue'),
  meta: {
    middleware: [auth]
  }
}
