import auth from '../middleware/auth'

export const clients = {
  path: 'clients',
  name: 'clients',
  component: () => import('@/modules/Clients/Clients.vue'),
	meta: {
	    middleware: [auth]
	  }
}
