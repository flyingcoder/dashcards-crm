export const milestoneTasks = {
	path: 'templates/:template_id/milestone/:milestone_id/task',
	name: 'templates/milestone/task',
	props: true,
	component: () => import('@/modules/MilestoneTask/MilestoneTask.vue')
}