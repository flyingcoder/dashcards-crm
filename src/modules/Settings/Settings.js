import { is_screen_medium_and_down } from '@/global_utils/is_screen_medium_and_down'

export default {
    name: 'settings',
    mixins: [is_screen_medium_and_down],

    data: () => ({
        active_tab: null,
        tabs: [
            { id: 1, name: 'Permissions', route: '/dashboard/settings' },
            { id: 2, name: 'Groups', route: '/dashboard/settings/groups' },
            { id: 3, name: 'Users and Roles', route: '/dashboard/settings/users' },
            { id: 4, name: 'Company', route: '/dashboard/settings/company' },
        ]
    })
}