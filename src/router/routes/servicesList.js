import auth from '../middleware/auth'

export const servicesList = {
    path: 'services',
    name: 'services-list',
    component: () => import('@/modules/Services-List/Services-List.vue'),
    meta: {
        middleware: [auth]
    }
}
/*Services ==  Campaign, Old services = service List*/