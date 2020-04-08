export const chat = {
  path: 'chat/:target?',
  name: 'chat',
  component: () => import('@/modules/Chat/Chat.vue')
}
