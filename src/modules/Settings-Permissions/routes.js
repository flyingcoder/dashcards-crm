import admin_manager from '@/router/middleware/admin_manager'


export default {
    path: 'permissions',
    name: 'settings/permissions',
    component: () => import('./Permissions.vue'),
    props: true,
    meta: {
        middleware: [ admin_manager ]
    }
}