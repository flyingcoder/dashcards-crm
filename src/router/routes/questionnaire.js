import auth from '../middleware/auth'

export const questionnaire = {
  path: 'questionnaire',
  name: 'questionnaire',
  component: () => import('@/modules/Questionnaire/Questionnaire.vue'),
	meta: {
		    middleware: [auth]
		  }
}
