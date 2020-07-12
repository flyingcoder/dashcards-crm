import super_admin  from '@/router/middleware/super_admin'

export const admin_payments = {
    path: 'payments',
    name: 'admin-payments',
    component: () => import('@/modules/AdminArea/PaymentGateway/PaymentGateway.vue'),
    meta: {
        middleware: [ super_admin ]
    }
}