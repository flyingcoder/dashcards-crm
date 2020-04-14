import GroupsTab from '@/modules/Settings-Groups/routes'
import PermissionsTab from '@/modules/Settings-Permissions/routes'
import auth from '../middleware/auth'

export const settings = {
  path: 'settings',
  component: () => import('@/modules/Settings/Settings.vue'),
  children: [GroupsTab, PermissionsTab],
  meta: {
    middleware: [auth]
  }
}
