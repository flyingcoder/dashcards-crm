import auth from '@/router/middleware/auth'

export default {
    path: 'staffs',
    name: 'client-profile-staffs',
    props: true,
    component: () => import('./Staffs.vue'),
    meta: {
        middleware: [auth]
    }
}
