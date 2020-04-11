import auth from '../middleware/auth'

export const payment = {
  path: 'payment',
  name: 'payment',
  component: () => import('@/modules/Payment/Payment.vue'),
	meta: {
	    middleware: [auth]
	  }
}
