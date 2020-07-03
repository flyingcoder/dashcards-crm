import super_admin  from '@/router/middleware/super_admin'

export const admin_subscribers = {
    path: 'subscribers',
    name: 'admin-subscribers',
    component: () => import('@/modules/AdminArea/Subscribers/Subscribers.vue'),
    meta: {
        middleware: [ super_admin ]
    }
}