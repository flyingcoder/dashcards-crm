import auth from '../middleware/auth'

export const chat = {
    path: 'chat/:target?/:type?',
    name: 'chat',
    component: () => import('@/modules/Chat/Chat.vue'),
    meta: {
        middleware: [auth]
    }
}
