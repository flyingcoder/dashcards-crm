import { is_screen_utils } from '@/global_utils/is_screen_utils'

export default {
    name: 'settings',
    mixins: [is_screen_utils],

    data: () => ({
        active_tab: null,
        tabs: [
            { id: 1, name: 'General', route: '/dashboard/settings' },
            { id: 2, name: 'Company', route: '/dashboard/settings/company' },
            { id: 3, name: 'Permissions', route: '/dashboard/settings/permissions' },
            { id: 4, name: 'Groups', route: '/dashboard/settings/groups' },
            { id: 5, name: 'Users and Roles', route: '/dashboard/settings/users' },
            { id: 6, name: 'Email Templates', route: '/dashboard/settings/email-templates' },
            { id: 7, name: 'Schedule Tasks', route: '/dashboard/settings/schedule-tasks' },
            // { id: 8, name: 'Updates', route: '/dashboard/settings/updates' },
            // { id: 9, name: 'Cron', route: '/dashboard/settings/cron' },
            // { id: 10, name: 'DB Backup', route: '/dashboard/settings/db-backup' },
        ]
    })
}