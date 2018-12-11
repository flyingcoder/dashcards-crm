import request from '@/services/axios_instance'
import { groups_api } from './makeRequestModules/groups_api'
import { clients_api } from './makeRequestModules/clients_api'
import { teams_api } from './makeRequestModules/teams_api'
import { services_api } from './makeRequestModules/services_api'
import { templates_api } from './makeRequestModules/templates_api'
import { templates_milestone_api } from './makeRequestModules/templates_milestone_api'
import { milestone_tasks_api } from './makeRequestModules/milestone_tasks_api'
import { permissions_api } from './makeRequestModules/permissions_api'
import { autocomplete_api } from './makeRequestModules/autocomplete_api'
import { projects_api } from './makeRequestModules/projects_api'
import { project_overview_tab_members } from './makeRequestModules/project-overview-tab-members'
import { invoices_api } from './makeRequestModules/invoices_api'

export default {
  login({ email, password }) {
    return request.post('/api/login', { email, password })
  },

  register({ company_name, company_email, first_name, email, password }) {
    return request.post('/api/register', {
      company_name,
      company_email,
      first_name,
      email,
      password
    })
  },

  checkout(token) {
    return request.post('/api/upgrade/checkout', { token })
  },

  change_timer(type) {
    return request.get(`api/timer/${type}`)
  },

  ...groups_api,
  ...clients_api,
  ...teams_api,
  ...services_api,
  ...templates_api,
  ...templates_milestone_api,
  ...milestone_tasks_api,
  ...permissions_api,
  ...autocomplete_api,
  ...projects_api,
  ...project_overview_tab_members,
  ...invoices_api
}
