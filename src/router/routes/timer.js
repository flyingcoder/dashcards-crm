import globalTimerTab from '@/modules/Timer/subpages/globalTimer/route'
import taskTimerTab from '@/modules/Timer/subpages/taskTimer/route'

export const timer = {
  path: 'timer',
  name: 'timer',
  component: () => import('@/modules/Timer/Timer.vue')//,
  //children: [globalTimerTab, taskTimerTab]
}