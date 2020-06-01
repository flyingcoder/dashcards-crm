import auth from '../middleware/auth'

export const pay_invoice = {
    path: 'pay-invoice/:id',
    name: 'pay-invoice',
    component: () => import('@/modules/PayInvoice/PayInvoice.vue'),
    meta: {
        middleware: [auth]
    }
}