import auth from '../middleware/auth'

export const taskTimer = {
  path: 'task-timer',
  name: 'taskTimer',
  component: () => import('@/modules/Timer/subpages/taskTimer/taskTimer.vue'), 
  meta: {
    middleware: [ auth ]
  }
}
