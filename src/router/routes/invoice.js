import auth from '../middleware/auth'

export const invoice = {
  path: 'invoice',
  name: 'invoice',
  component: () => import('@/modules/Invoice/Invoice.vue'),
	meta: {
	    middleware: [auth]
	  }
}
