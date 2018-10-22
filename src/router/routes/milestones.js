export const milestones = {
	path: 'templates/:id/milestone',
	name: 'templates/milestone',
	props: true,
	component: () => import('@/modules/Milestone/Milestone.vue')
}