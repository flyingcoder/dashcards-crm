import admin_manager from '@/router/middleware/admin_manager'
export default {
    path: 'company',
    name: 'settings/company',
    component: () => import('./Company.vue'),
    props: true,
    meta: {
        middleware: [admin_manager]
    }
}