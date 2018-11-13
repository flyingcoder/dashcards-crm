import request from '@/services/axios_instance'

export const projects_api = {
	get_projects() {
		return request.get('api/projects')
	},

	add_new_project(new_project) {
		return request.post('api/projects', new_project);
	},
}