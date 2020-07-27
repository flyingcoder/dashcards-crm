import auth from '@/router/middleware/auth'

export default {
    path: 'company',
    name: 'client-profile-company',
    props: true,
    component: () => import('./Company.vue'),
    meta: {
        middleware: [auth]
    }
}
