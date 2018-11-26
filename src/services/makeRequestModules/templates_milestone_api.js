import request from '@/services/axios_instance'

export const templates_milestone_api = {
	get_milestones(api_url) {
		return request.get(api_url)
	},

	add_new_milestone(payload, api_url) {
		return request.post(api_url, payload)
	},

	edit_milestone(id, payload, api_url) {
		return request.put(`${api_url}/${id}`, payload)
	},

	delete_milestone(id, api_url) {
		return request.delete(`${api_url}/${id}`)
	}
}