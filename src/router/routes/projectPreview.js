export const project_preview = {
	path: 'project-preview/:project_id',
	name: 'project_preview',
	props: true,
	component: () => import('@/modules/ProjectPreview/ProjectPreview.vue')
}