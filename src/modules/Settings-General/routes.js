import admin_manager from '@/router/middleware/admin_manager'

export default {
    path: '',
    name: 'settings',
    component: () => import('./General.vue'),
    props: true,
    meta: {
        middleware: [admin_manager]
    }
}