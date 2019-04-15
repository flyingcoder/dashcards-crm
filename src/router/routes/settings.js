import GroupsTab from '@/modules/Settings-Groups/routes'
import PermissionsTab from '@/modules/Settings-Permissions/routes'

export const settings = {
  path: 'settings',
  component: () => import('@/modules/Settings/Settings.vue'),
  children: [GroupsTab, PermissionsTab]
}
