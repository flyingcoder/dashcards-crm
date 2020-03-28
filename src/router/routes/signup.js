import guest from '../middleware/guest'

export const signup = {
  path: '/signup',
  name: 'signup',
  component: () => import('@/modules/Signup/Signup.vue'),
  meta : {
  	middleware : [ guest ]
  }
}
