export const client_profile = {
  path: 'clients/profile/:user_id',
  props: true,
  component: () => import('@/modules/ClientProfile/ClientProfile.vue'),
  children: [
    {
      path: '',
      name: 'clients-tasks',
      props: true,
      component: () => import('@/modules/ClientProfile-Tasks/Tasks.vue')
    }
  ]
}
