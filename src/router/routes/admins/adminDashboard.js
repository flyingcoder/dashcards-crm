import super_admin  from '@/router/middleware/super_admin'

export const admin_dashboard = {
    path: '',
    name: 'admin-dashboard',
    component: () => import('@/modules/AdminArea/AdminDashboard/AdminDashboard.vue'),
    props: true,
    meta: {
        middleware: [ super_admin ]
    }
}