import request from '@/services/axios_instance'

export const groups_api = {
    get_all_groups() {
        return request.get(`api/groups?all=true`)
    },

    get_all_default_groups() {
        return request.get(`api/groups?default=true`)
    },

    get_group_permissions(id) {
        return request.get(`api/groups/${id}/permission`)
    },

    get_groups(query) {
        return request.get(`/api/groups?${query}`)
    },

    add_new_group(group) {
        return request.post('api/groups', group)
    },

    update_group(id, group) {
        return request.put(`api/groups/${id}`, group)
    },

    delete_group(id) {
        return request.delete(`api/groups/${id}`)
    },

    paginate_groups_table(query) {
        return request.get(`api/groups?${query}`)
    },

    get_company_groups(query) {
        return request.get(`/api/roles/company`)
    }
}
