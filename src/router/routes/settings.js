import GroupsTab from '@/modules/Settings-Groups/routes'
import PermissionsTab from '@/modules/Settings-Permissions/routes'
import UsersTab from '@/modules/Settings-Users/routes'
import CompanyTab from '@/modules/Settings-Company/routes'
import GeneralTab from '@/modules/Settings-General/routes'
import TemplatesTab from '@/modules/Settings-Templates/routes'
import ScheduleTask from '@/modules/Settings-ScheduleTask/routes'

import admin_manager from '../middleware/admin_manager'

export const settings = {
    path: 'settings',
    component: () => import('@/modules/Settings/Settings.vue'),
    children: [
        GeneralTab,
        GroupsTab,
        PermissionsTab,
        UsersTab,
        CompanyTab,
        TemplatesTab,
        ScheduleTask
    ],
    meta: {
        middleware: [admin_manager]
    }
}