import { check_user } from '../route_guard'

export const pricing = {
  path: '/pricing',
  name: 'pricing',
  component: () => import('@/modules/Pricing/Pricing.vue'),
  beforeEnter(to, from, next) {
    if (check_user.is_user_logged()) {
      next()
    } else {
      next({ name: 'not_found' })
    }
  }
}
