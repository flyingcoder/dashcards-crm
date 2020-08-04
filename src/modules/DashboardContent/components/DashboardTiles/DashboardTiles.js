import request from '@/services/axios_instance'
import { mapMutations, mapGetters } from 'vuex'
//Components
import Tile from '@/common/Tile.vue'

export default {
    components: {
        Tile
    },
    data: () => ({
        counters: null
    }),

    computed: {
        ...mapGetters(['user', 'global_configs']),
        allowed_dashtiles() {
            return this.global_configs.allowed_dashtiles
        },
        tiles() {
            if (!this.user) return []
            const user = this.user
            return [{
                    title: 'My Projects',
                    value: 'projects',
                    color: '#ed8564',
                    icon: require('@/assets/icons/sidebar/projects.svg'),
                    can_view: () =>
                        (user.can.hasOwnProperty('projects_own') ||
                        user.can.hasOwnProperty('projects') ||
                        user.is_admin) && this.is_tile_enabled('projects'),
                    route: '/dashboard/projects'
                },
                {
                    title: 'My Campaigns',
                    value: 'campaigns',
                    color: '#a085d5',
                    icon: require('@/assets/icons/sidebar/calendar.svg'),
                    admin_only: false,
                    can_view: () =>
                        (user.can.hasOwnProperty('projects_own') ||
                            user.can.hasOwnProperty('projects') ||
                            user.is_admin) && this.is_tile_enabled('projects'),
                    route: '/dashboard/campaigns'
                },
                {
                    title: 'My Tasks',
                    value: 'tasks',
                    color: '#50b4aa',
                    icon: require('@/assets/icons/sidebar/templates.svg'),
                    admin_only: false,
                    can_view: () =>
                        (user.can.hasOwnProperty('tasks') ||
                        user.can.hasOwnProperty('tasks_own') ||
                        user.is_admin) && this.is_tile_enabled('tasks'),
                    route: null
                },
                {
                    title: 'Timer',
                    value: 'timer',
                    color: '#1fb868',
                    icon: require('@/assets/icons/sidebar/timers.svg'),
                    admin_only: false,
                    can_view: () =>
                        (user.can.hasOwnProperty('timers') ||
                        user.can.hasOwnProperty('timers_own') ||
                        user.is_admin) && this.is_tile_enabled('timer'),
                    route: '/dashboard/task-timer'
                },
                {
                    title: 'Inbound',
                    value: 'inbound',
                    color: '#00a7e5',
                    icon: require('@/assets/icons/sidebar/templates.svg'),
                    can_view: () => user.is_admin && this.is_tile_enabled('inbound'),
                    route: '/dashboard/forms'
                },
                {
                    title: 'Outbound',
                    value: 'outbound',
                    color: '#ff7f7e',
                    icon: require('@/assets/icons/sidebar/templates.svg'),
                    can_view: () => user.is_admin && this.is_tile_enabled('outbound'),
                    route: '/dashboard/forms'
                }
            ]
        }
    },

    created() {
        request.get('api/dashboard/counts').then(({ data }) => {
            this.counters = data
            this.setChat(data.chats)
            this.setNotification(data.notification)
        })
    },

    methods: {
        ...mapMutations('headerIcons', ['setChat', 'setNotification']),
        is_tile_enabled(name) {
            return this.allowed_dashtiles.includes(name)
        },
        navigateTo(route) {
            route && this.$router.push(route)
        }
    }
}