import auth from '../middleware/auth'

export const projectDetails = {
  path: 'project-details',
  name: 'projectDetails',
  component: () => import('@/modules/Forms-ProjectDetails/ProjectDetails.vue'),
  meta: {
    middleware: [auth]
  }
}
