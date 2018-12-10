import { check_user } from '../route_guard'

export const checkout = {
  path: '/checkout',
  name: 'checkout',
  component: () => import('@/modules/Checkout/Checkout.vue'),
  props: true,
  beforeEnter(to, from, next) {
    if (check_user.is_user_logged()) {
      next()
    } else {
      next({ name: 'not_found' })
    }
  }
}
