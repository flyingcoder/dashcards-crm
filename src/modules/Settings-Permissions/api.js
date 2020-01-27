import request from '@/services/axios_instance'

export const api_to = {
  get_permissions() {
    return request.get('api/permission?all=true')
  },

  get_default_permissions() {
    return request.get('api/permission/defaults')
  },

  get_role_permissions() {
    return request.get('api/roles/permissions')
  },

  get_default_roles() {
    return request.get('api/roles/defaults')
  },

  get_company_roles() {
    return request.get('api/roles/company')
  }
}
