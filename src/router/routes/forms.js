import auth from '../middleware/auth'

export const forms = {
    path: 'forms',
    name: 'forms',
    component: () => import('@/modules/Forms/Forms.vue'),
    props: true,
    meta: {
        middleware: [auth]
    }
}

export const formResponses = {
    path: 'forms/:id/responses',
    name: 'forms/responses',
    component: () => import('@/modules/Forms-Response/Forms-Response.vue'),
    props: true,
    meta: {
        middleware: [auth]
    }
}