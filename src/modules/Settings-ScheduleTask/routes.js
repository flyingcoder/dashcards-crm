import admin_manager from '@/router/middleware/admin_manager'
export default {
    path: 'schedule-tasks',
    name: 'settings/schedule-tasks',
    component: () => import('./ScheduleTask.vue'),
    props: true,
    meta: {
        middleware: [admin_manager]
    }
}