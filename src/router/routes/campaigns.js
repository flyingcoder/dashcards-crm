import auth from '../middleware/auth'

export const campaigns = {
    path: 'campaigns',
    name: 'services',
    component: () => import('@/modules/Services/Services.vue'),
    meta: {
        middleware: [auth]
    }
}
/*Services ==  Campaign, Old services = service List*/