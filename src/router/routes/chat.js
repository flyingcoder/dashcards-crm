import auth from '../middleware/auth'

export const chat = {
    path: 'chat/:conversation_id?',
    name: 'chat',
    component: () => import('@/modules/Chat/Chat.vue'),
    meta: {
        middleware: [auth]
    }
}
