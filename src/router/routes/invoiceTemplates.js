import auth from '../middleware/auth'

export const invoice_templates = {
    path: 'templates/invoice',
    name: 'templates/invoice',
    component: () => import('@/modules/InvoiceTemplates/InvoiceTemplates.vue'),
    meta: {
        middleware: [auth]
    }
}