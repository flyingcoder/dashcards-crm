import admin_manager from '@/router/middleware/admin_manager'

export default {
    path: 'groups',
    name: 'settings/groups',
    component: () => import('./Groups.vue'),
    props: true,
    meta: {
        middleware: [admin_manager]
    }
}