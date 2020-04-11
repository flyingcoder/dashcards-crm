import auth from '../middleware/auth'

export const notes = {
  path: 'notes',
  name: 'notes',
  component: () => import('@/modules/Notes/Notes.vue'),
	meta: {
	    middleware: [auth]
	  }
}
