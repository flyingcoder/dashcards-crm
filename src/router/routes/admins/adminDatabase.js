import super_admin  from '@/router/middleware/super_admin'

export const admin_database = {
    path: 'database',
    name: 'admin-database',
    component: () => import('@/modules/AdminArea/Database/Database.vue'),
    meta: {
        middleware: [ super_admin ]
    }
}