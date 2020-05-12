import admin_manager from '@/router/middleware/admin_manager'
export default {
    path: 'users',
    name: 'settings/users',
    component: () => import('./Users.vue'),
    props: true,
    meta: {
        middleware: [ admin_manager ]
    }
}