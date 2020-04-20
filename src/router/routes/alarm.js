// import globalTimerTab from '@/modules/Timer/subpages/globalTimer/route'
// import taskTimerTab from '@/modules/Timer/subpages/taskTimer/route'
import auth from '../middleware/auth'

export const alarm = {
  path: 'alarm',
  name: 'alarm',
  component: () => import('@/modules/Timer/subpages/alarm/Alarm.vue'), //,
  // children: [globalTimerTab, taskTimerTab],
  meta: {
    middleware: [auth]
  }
}
