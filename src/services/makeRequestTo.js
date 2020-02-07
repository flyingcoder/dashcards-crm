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
import { reports_api } from './makeRequestModules/reports_api'
import { chat_api } from './makeRequestModules/chat_api'
import { timers_api } from './makeRequestModules/timers_api'
import { files_api } from './makeRequestModules/files_api'

export default {
  login({ email, password }) {
    return request.post('/api/login', { email, password })
  },

  logout() {
    return request.post('/api/logout')
  },

  register(fields) {
    return request.post('/api/register', fields)
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
  ...invoices_api,
  ...reports_api,
  ...chat_api,
  ...timers_api,
  ...files_api
}
