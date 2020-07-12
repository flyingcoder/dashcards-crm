import super_admin  from '@/router/middleware/super_admin'

export const admin_templates = {
    path: 'templates',
    name: 'admin-templates',
    component: () => import('@/modules/AdminArea/Templates/Templates.vue'),
    meta: {
        middleware: [ super_admin ]
    }
}