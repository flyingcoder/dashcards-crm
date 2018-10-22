export const milestoneTasks = {
	path: 'templates/:id/milestone/:id2/task',
	name: 'templates/milestone/task',
	props: true,
	component: () => import('@/modules/MilestoneTask/MilestoneTask.vue')
}