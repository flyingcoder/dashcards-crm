import auth from '../middleware/auth'

export const invoice = {
  path: 'invoices',
  name: 'invoice',
  component: () => import('@/modules/Invoice/Invoice.vue'),
  meta: {
    middleware: [auth]
  }
}
