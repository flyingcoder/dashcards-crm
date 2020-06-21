import auth from '../middleware/auth'

export const services = {
    path: 'services',
    name: 'services',
    component: () => import('@/modules/Services/Services.vue'),
    meta: {
        middleware: [auth]
    }
}