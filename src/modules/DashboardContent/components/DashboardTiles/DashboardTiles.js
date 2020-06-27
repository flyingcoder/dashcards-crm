import request from '@/services/axios_instance'
import { mapMutations } from 'vuex'
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
        user() {
            return this.$store.getters.user
        },
        tiles() {
            if (!this.user) return []
            const user = this.user
            return [{
                    title: 'Projects',
                    value: 'projects',
                    color: '#ed8564',
                    icon: require('@/assets/icons/sidebar/projects.svg'),
                    can_view: () =>
                        user.can.hasOwnProperty('projects_own') ||
                        user.can.hasOwnProperty('projects') ||
                        user.is_admin,
                    route: '/dashboard/projects'
                },
                {
                    title: 'Open Tasks',
                    value: 'tasks',
                    color: '#50b4aa',
                    icon: require('@/assets/icons/sidebar/templates.svg'),
                    admin_only: false,
                    can_view: () =>
                        user.can.hasOwnProperty('tasks') ||
                        user.can.hasOwnProperty('tasks_own') ||
                        user.is_admin,
                    route: null
                },
                {
                    title: 'Calendar',
                    value: 'calendars',
                    color: '#a085d5',
                    icon: require('@/assets/icons/sidebar/calendar.svg'),
                    admin_only: false,
                    can_view: () =>
                        user.can.hasOwnProperty('calendars') ||
                        user.can.hasOwnProperty('calendars_own') ||
                        user.is_admin,
                    route: '/dashboard/calendar'
                },
                {
                    title: 'Timer',
                    value: 'timer',
                    color: '#1fb868',
                    icon: require('@/assets/icons/sidebar/timers.svg'),
                    admin_only: false,
                    can_view: () =>
                        user.can.hasOwnProperty('timers') ||
                        user.can.hasOwnProperty('timers_own') ||
                        user.is_admin,
                    route: '/dashboard/task-timer'
                },
                {
                    title: 'Inbound',
                    value: 'inbound',
                    color: '#00a7e5',
                    icon: require('@/assets/icons/sidebar/templates.svg'),
                    can_view: () => user.is_admin,
                    route: '/dashboard/forms'
                },
                {
                    title: 'Outbound',
                    value: 'outbound',
                    color: '#ff7f7e',
                    icon: require('@/assets/icons/sidebar/templates.svg'),
                    can_view: () => user.is_admin,
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
        navigateTo(route) {
            route && this.$router.push(route)
        }
    }
}