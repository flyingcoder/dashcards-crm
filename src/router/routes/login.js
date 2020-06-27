import guest from '../middleware/guest'

export const login = {
    path: '/login',
    name: 'login',
    component: () => import('@/modules/Login/Login.vue'),
    meta: {
        middleware: [ guest ]
    }
}