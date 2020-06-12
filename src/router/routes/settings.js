import GroupsTab from '@/modules/Settings-Groups/routes'
import PermissionsTab from '@/modules/Settings-Permissions/routes'
import UsersTab from '@/modules/Settings-Users/routes'
import CompanyTab from '@/modules/Settings-Company/routes'

import admin_manager from '../middleware/admin_manager'

export const settings = {
    path: 'settings',
    component: () => import('@/modules/Settings/Settings.vue'),
    children: [GroupsTab, PermissionsTab, UsersTab, CompanyTab],
    meta: {
        middleware: [ admin_manager ]
    }
}