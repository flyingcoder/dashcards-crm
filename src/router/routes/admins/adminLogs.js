import super_admin  from '@/router/middleware/super_admin'

export const admin_logs = {
    path: 'logs',
    name: 'admin-logs',
    component: () => import('@/modules/AdminArea/Logs/Logs.vue'),
    meta: {
        middleware: [ super_admin ]
    }
}