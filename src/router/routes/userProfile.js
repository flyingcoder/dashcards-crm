export const user_profile = {
  path: 'team/profile/:user_id',
  name: 'user_profile',
  props: true,
  component: () => import('@/modules/UserProfile/UserProfile.vue')
}
