import { is_screen_medium_and_down } from '@/global_utils/is_screen_medium_and_down'

export default {
    name: 'settings',
    mixins: [is_screen_medium_and_down],

    data: () => ({
        active_tab: null,
        tabs: [
            { id: 1, name: 'General', route: '/dashboard/settings' },
            { id: 2, name: 'Company', route: '/dashboard/settings/company' },
            { id: 3, name: 'Permissions', route: '/dashboard/settings/permissions' },
            { id: 4, name: 'Groups', route: '/dashboard/settings/groups' },
            { id: 5, name: 'Users and Roles', route: '/dashboard/settings/users' },
            // { id: 6, name: 'Payment Methods', route: '/dashboard/settings/payment-methods' },
            // { id: 7, name: 'Email Templates', route: '/dashboard/settings/email-templates' },
            // { id: 8, name: 'Updates', route: '/dashboard/settings/updates' },
            // { id: 9, name: 'Cron', route: '/dashboard/settings/cron' },
            // { id: 10, name: 'DB Backup', route: '/dashboard/settings/db-backup' },
        ]
    })
}