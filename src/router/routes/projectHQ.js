export const projectHQ = {
	path: 'project-hq/:project_id',
	name: 'projectHQ',
	props: true,
	component: () => import('@/modules/ProjectHQ/ProjectHQ.vue')
}