import auth from '../middleware/auth'

export const formBuilder = {
    path: 'form/form-builder',
    name: 'form-builder',
    component: () => import('@/modules/Forms-Builder/FormsBuilder.vue'),
    meta: {
        middleware: [auth]
    }
}

export const formEdit = {
    path: 'form/:id/edit',
    name: 'form-edit',
    component: () => import('@/modules/Forms-Builder/FormsBuilder.vue'),
    meta: {
        middleware: [auth]
    }
}