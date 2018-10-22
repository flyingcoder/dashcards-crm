import request from '@/services/axios_instance'

export const teams_api = {
	get_teams() {
		return request.get('api/company/teams')
	},

	add_new_team(payload) {
		return request.post('api/company/teams', payload)
	},

	update_team(payload) {
		return request.put(`api/company/teams/${payload.id}`, payload.team)
	},

	delete_team(id) {
		return request.delete(`api/company/teams/${id}`)
	},
}