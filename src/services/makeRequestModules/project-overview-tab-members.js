import request from '@/services/axios_instance'

export const project_overview_tab_members = {
	get_members(api) {
		return request.get(api)
	},

	add_members(members, api) {
		return request.post(api, { members_id: members })
	},

	delete_member(id, api) {
		return request.delete(api + '/' + id)
	},

}