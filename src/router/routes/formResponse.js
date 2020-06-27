export const formResponse = {
    path: '/form/:slug/:view?',
    name: 'form-response',
    component: () => import('@/modules/Forms-Online/Forms-Online.vue'),
}