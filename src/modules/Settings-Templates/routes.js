import admin_manager from '@/router/middleware/admin_manager'
export default {
    path: 'email-templates',
    name: 'settings/email-templates',
    component: () => import('./Templates.vue'),
    props: true,
    meta: {
        middleware: [admin_manager]
    }
}