import auth from '@/router/middleware/auth'

export default {
  path: 'invoice',
  name: 'client-profile-invoice',
  component: () => import('./Invoice.vue'),
  props: true,
	meta: {
		    middleware: [auth]
		  }
}
