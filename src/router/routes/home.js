import { check_user } from '../route_guard'

export const home = {
  path: '/',
  name: 'home',
  component: () => import('@/modules/Home/Home.vue'),
  beforeEnter(to, from, next) {
    if (check_user.is_user_logged()) {
      next()
    } else {
      next({ name: 'login' })
    }
  }
}
