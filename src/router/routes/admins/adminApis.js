import super_admin  from '@/router/middleware/super_admin'

export const admin_apis = {
    path: 'apis',
    name: 'admin-apis',
    component: () => import('@/modules/AdminArea/ApiConfigs/ApiConfigs.vue'),
    meta: {
        middleware: [ super_admin ]
    }
}