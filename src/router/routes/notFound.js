export const notFound = {
  path: '/404',
  alias: '*',
  name: 'not_found',
  component: () => import('@/modules/NotFound/NotFound.vue')
}
