import auth from '../middleware/auth'

export const dashboard = {
  path: '',
  name: 'default-content',
  component: () => import('@/modules/DashboardContent/DashboardContent.vue'),
  meta : {
  	middleware : [ auth ]
  }
}
