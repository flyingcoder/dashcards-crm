export const client_profile = {
  path: 'clients/profile/:user_id',
  name: 'client/profile',
  props: true,
  component: () => import('@/modules/ClientProfile/ClientProfile.vue')
}
