import request from '@/services/axios_instance'

export const templates_api = {
	get_milestone_templates() {
		return request.get('/api/template')
	},

	add_new_milestone_template(payload) {
		return request.post('/api/template', payload)
	},

	edit_milestone_template(id, payload) {
		return request.put(`/api/template/${id}`, payload)
	},

	delete_milestone_template(id) {
		return request.delete(`/api/template/${id}`)
	},
}