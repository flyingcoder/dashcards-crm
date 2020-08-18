import { mapGetters } from 'vuex'

export default {
    name: 'DashboardSidebar',
    data() {
        return {
            selected_route_name: 'default-content',
            mini: true,
            drawer: null
        }
    },

    computed: {
        ...mapGetters(['user', 'global_configs']),
        allowed_modules() {
            return this.global_configs.allowed_modules || []
        },
        items() {
            if (!this.user) {
                this.$router.push({ name: 'login' })
                return []
            }
            return [{
                    title: 'Dashboard',
                    icon: 'M125 0c33,0 62,13 84,33l11 -10c4,-3 9,-3 12,0 3,3 3,8 -1,11l-77 72c3,6 5,12 5,19 0,18 -15,34 -34,34 -18,0 -34,-16 -34,-34 0,-19 16,-34 34,-34 7,0 12,1 17,4l55 -51c-19,-17 -44,-27 -72,-27 -29,0 -56,12 -76,31 -20,20 -32,47 -32,77 0,30 12,57 32,76 20,20 47,32 76,32 30,0 57,-12 77,-32 19,-19 32,-46 32,-76 0,-23 -7,-44 -20,-62l13 -11c14,21 23,46 23,73 0,34 -14,65 -37,88 -22,22 -53,36 -88,36 -34,0 -65,-14 -87,-36 -23,-23 -37,-54 -37,-88 0,-35 14,-66 37,-88 22,-23 53,-37 87,-37z',
                    action: 'default-content',
                    can_view: () => true
                },
                {
                    title: 'Projects',
                    icon: 'M28 38l194 0c7,0 14,3 19,8 5,5 9,12 9,19l0 115c0,7 -4,14 -9,19 -5,5 -12,8 -19,8 -21,0 -39,0 -61,0 -3,0 -6,-2 -6,-6 0,-3 3,-6 6,-6l4 0 0 0 57 0c4,0 8,-2 10,-5 3,-2 5,-6 5,-10l0 -115c0,-4 -2,-8 -5,-10 -2,-3 -6,-5 -10,-5l-194 0c-4,0 -8,2 -11,5l0 0c-2,2 -4,6 -4,10l0 115c0,4 2,8 4,10l0 0c3,3 7,5 11,5l57 0 0 0 6 0c4,0 7,3 7,6 0,4 -3,6 -7,6 -22,0 -41,0 -63,0 -8,0 -15,-3 -20,-8l0 0c-5,-5 -8,-12 -8,-19l0 -115c0,-7 3,-14 8,-19l0 0c5,-5 12,-8 20,-8zm99 138c12,0 22,9 22,22 0,12 -10,22 -22,22 -12,0 -22,-10 -22,-22 0,-13 10,-22 22,-22zm-82 -69c4,0 8,3 10,6l64 0c2,-3 6,-6 10,-6 4,0 8,3 10,6l56 0c2,-3 6,-6 10,-6 6,0 11,6 11,12 0,6 -5,12 -11,12 -4,0 -8,-3 -10,-6l-56 0c-2,3 -6,6 -10,6 -4,0 -8,-3 -10,-6l-64 0c-2,3 -6,6 -10,6 -7,0 -12,-6 -12,-12 0,-6 5,-12 12,-12z',
                    action: 'projects',
                    can_view: () => { return this.is_module_enabled('projects') }
                },
                {
                    title: 'Campaigns',
                    icon: 'M57 58l151 0 0 -7c0,-4 -2,-7 -4,-10 -3,-3 -7,-4 -11,-4l-165 0c-4,0 -8,1 -10,4 -3,3 -5,6 -5,10l0 113c0,4 2,8 5,10 2,3 6,4 10,4l1 0 0 -92c0,-8 3,-15 8,-20 5,-5 12,-8 20,-8zm164 0l1 0c8,0 15,3 20,8 5,5 8,12 8,20l0 113c0,7 -3,14 -8,20 -5,5 -12,8 -20,8l-165 0c-8,0 -15,-3 -20,-8 -5,-6 -8,-13 -8,-20l0 -7 -1 0c-8,0 -15,-3 -20,-8 -5,-5 -8,-12 -8,-20l0 -113c0,-7 3,-14 8,-20 5,-5 12,-8 20,-8l165 0c8,0 15,3 20,8 5,6 8,13 8,20l0 7zm1 14l-165 0c-4,0 -8,1 -11,4 -2,2 -4,6 -4,10l0 113c0,4 2,7 4,10 3,3 7,4 11,4l165 0c4,0 8,-1 10,-4 3,-3 5,-6 5,-10l0 -113c0,-4 -2,-8 -5,-10 -2,-3 -6,-4 -10,-4z M125 67c3,0 5,1 7,3l0 0c1,2 2,4 2,7l0 5c6,1 10,3 15,6l4 -4c1,-2 4,-3 6,-3 3,0 5,1 7,3 2,2 3,4 3,7 0,2 -1,5 -3,6l-4 4c3,4 5,9 6,15l5 0c3,0 5,1 7,2l0 0c2,2 3,4 3,7 0,3 -1,5 -3,7 -2,1 -4,2 -7,2l-4 0c-2,6 -4,11 -7,15l4 4c2,1 3,4 3,6 0,3 -1,5 -3,7 -2,2 -4,3 -7,3 -2,0 -5,-1 -6,-3l-4 -3c-4,3 -9,5 -15,6l0 4c0,3 -1,5 -2,7 -2,2 -4,3 -7,3 -3,0 -5,-1 -7,-3l0 0c-1,-2 -2,-4 -2,-7l0 -4c-6,-1 -11,-3 -15,-6l-4 3c-1,2 -4,3 -6,3 -3,0 -5,-1 -7,-3 -2,-2 -3,-4 -3,-7 0,-2 1,-5 3,-6l4 -4c-3,-4 -5,-9 -7,-15l-4 0c-3,0 -5,-1 -7,-2l0 0c-2,-2 -3,-4 -3,-7 0,-3 1,-5 3,-7l0 0c2,-1 4,-2 7,-2l5 0c1,-6 3,-11 6,-15l-4 -4c-2,-1 -3,-4 -3,-6 0,-3 1,-5 3,-7 2,-2 4,-3 7,-3 2,0 5,1 6,3l4 4c5,-3 9,-5 15,-6l0 -5c0,-3 1,-5 2,-7l0 0c2,-2 4,-3 7,-3zm1 14l0 -4c0,-1 0,-1 0,-1l0 0c0,-1 -1,-1 -1,-1 0,0 -1,0 -1,1l0 0c0,0 0,0 0,1l0 4c0,0 1,0 1,0 0,0 1,0 1,0zm29 12c1,0 1,1 1,1 1,0 1,1 1,1l3 -3c1,0 1,-1 1,-1 0,-1 0,-1 -1,-1 0,-1 0,-1 -1,-1 0,0 -1,0 -1,1l-3 3zm14 31c0,0 0,1 0,1 0,1 0,1 0,1l4 0c1,0 1,0 1,0 1,0 1,-1 1,-1 0,0 0,-1 -1,-1l0 0c0,0 0,0 -1,0l-4 0zm-11 32c-1,0 -1,0 -2,1 0,0 0,0 0,1l2 2c0,1 1,1 1,1 1,0 1,0 1,-1 1,0 1,0 1,-1 0,0 0,-1 -1,-1l-2 -2zm-32 14c0,0 -1,0 -1,0 0,0 -1,0 -1,0l0 3c0,1 0,1 0,1l0 0c0,1 1,1 1,1 0,0 1,0 1,-1 0,0 0,0 0,-1l0 -3zm-32 -12c0,-1 0,-1 0,-1 -1,-1 -1,-1 -2,-1l-2 2c-1,0 -1,1 -1,1 0,1 0,1 1,1 0,1 0,1 1,1 0,0 1,0 1,-1l2 -2zm-13 -32c0,0 0,0 0,-1 0,0 0,-1 0,-1l-4 0c-1,0 -1,0 -1,0l0 0c-1,0 -1,1 -1,1 0,0 0,1 1,1l0 0c0,0 0,0 1,0l4 0zm12 -31c0,0 0,-1 1,-1 0,0 0,-1 1,-1l-3 -3c0,-1 -1,-1 -1,-1 -1,0 -1,0 -1,1 -1,0 -1,0 -1,1 0,0 0,1 1,1l3 3zm32 11c5,0 10,2 14,6 3,3 5,8 5,13 0,6 -2,11 -5,14l0 0c-4,4 -9,6 -14,6 -5,0 -10,-2 -14,-6l0 0c-3,-3 -5,-8 -5,-14 0,-5 2,-10 5,-13l0 0c4,-4 9,-6 14,-6zm4 15c-1,-1 -2,-1 -4,-1 -2,0 -3,0 -4,1l0 0c-1,1 -2,3 -2,4 0,2 1,4 2,5 1,1 2,1 4,1 2,0 3,0 4,-1 1,-1 2,-3 2,-5 0,-1 -1,-3 -2,-4zm18 -17c-6,-6 -13,-9 -22,-9 -9,0 -16,3 -22,9 -5,5 -9,13 -9,21 0,9 4,17 9,22 6,6 13,9 22,9 9,0 16,-3 22,-9 5,-5 9,-13 9,-22 0,-8 -4,-16 -9,-21z',
                    action: 'services',
                    can_view: () => { return this.is_module_enabled('campaign') }
                },
                {
                    title: 'Clients',
                    icon: 'M125 1c17,0 31,7 42,19 11,12 17,28 17,46 0,17 -6,33 -17,45 -1,1 -2,2 -3,3 -5,29 58,15 58,69l0 19c0,13 -6,25 -14,33 -9,9 -21,14 -34,14l-20 0 0 0 -3 0 -55 0 0 0 -20 0c-13,0 -25,-5 -34,-14 -8,-8 -14,-20 -14,-33l0 -19c0,-54 63,-40 58,-69 -1,-1 -2,-2 -3,-3 -11,-12 -17,-28 -17,-45 0,-18 6,-34 17,-46 11,-12 25,-19 42,-19zm26 232l3 0 0 0 20 0c9,0 17,-3 22,-9 6,-6 10,-14 10,-22l0 -19c0,-38 -49,-23 -57,-58 -8,4 -16,5 -24,5 -8,0 -16,-1 -24,-5 -9,36 -57,18 -57,58l0 19c0,8 4,16 10,22 5,6 13,9 22,9l20 0 0 0 55 0 0 0zm-34 -68c0,-4 4,-8 8,-8 4,0 8,4 8,8l0 50c0,5 -4,8 -8,8 -4,0 -8,-3 -8,-8l0 -50zm38 -134c-8,-9 -18,-14 -30,-14 -12,0 -22,5 -30,14 -8,8 -13,21 -13,35 0,13 5,26 13,34 8,9 18,14 30,14 12,0 22,-5 30,-14 8,-8 13,-21 13,-34 0,-14 -5,-27 -13,-35z',
                    action: 'clients',
                    can_view: () => { return (this.user.is_admin || this.user.is_manager) && this.is_module_enabled('clients') }
                },
                {
                    title: 'Team',
                    icon: 'M125 49c10,0 20,4 26,11 7,8 11,18 11,28 0,11 -4,21 -11,28 0,1 -1,2 -2,2 -3,18 36,10 36,42l0 12c0,8 -4,15 -9,21 -5,5 -13,8 -21,8l-12 0 0 0 -2 0 -34 0 0 0 -12 0c-8,0 -15,-3 -21,-8 -5,-6 -8,-13 -8,-21l0 -12c0,-32 39,-24 35,-42 0,0 -1,-1 -2,-2 -6,-7 -10,-17 -10,-28 0,-10 4,-20 10,-28 7,-7 16,-11 26,-11zm-74 14c-8,0 -16,4 -22,10 -5,6 -9,14 -9,24 0,9 4,17 9,23 1,0 1,1 2,1 -1,6 -6,8 -10,10 -10,4 -20,8 -20,29l0 9c0,0 0,0 0,1 0,3 2,14 18,19 1,0 1,1 2,1l30 0c1,0 1,-1 1,-1 1,0 1,1 2,1l11 0c-1,-2 -1,-3 -2,-5 -1,-2 -1,-3 -2,-5l-7 0c-1,0 -1,0 -2,0 0,0 0,0 -1,0l-30 0c-10,-3 -10,-9 -10,-11l0 0 0 -9c0,-15 7,-17 13,-20 7,-2 13,-5 15,-13 4,2 8,3 12,3 5,0 10,-1 14,-4 1,5 3,8 6,10 3,-3 7,-5 10,-6 -4,-2 -7,-4 -7,-11l0 0c5,-6 8,-14 8,-22 0,-10 -3,-18 -9,-24 -5,-6 -13,-10 -22,-10zm-14 17c3,-5 9,-7 14,-7 6,0 11,2 15,7 4,4 6,10 6,17 0,6 -2,12 -6,16 -4,5 -9,7 -15,7 -5,0 -11,-2 -14,-7 -4,-4 -7,-10 -7,-16 0,-7 3,-13 7,-17zm162 -17c8,0 16,4 22,10 5,6 9,14 9,24 0,9 -4,17 -9,23 -1,0 -1,1 -2,1 1,6 6,8 10,10 10,4 20,8 20,29l0 9c0,0 0,0 0,1 0,3 -2,14 -18,19 -1,0 -1,1 -2,1l-30 0c-1,0 -1,-1 -1,-1 -1,0 -1,1 -2,1l-11 0c1,-2 1,-3 2,-5 1,-2 1,-3 2,-5l7 0c1,0 1,0 2,0 0,0 0,0 1,0l30 0c10,-3 10,-9 10,-11l0 0 0 -9c0,-15 -7,-17 -13,-20 -7,-2 -13,-5 -15,-13 -4,2 -8,3 -12,3 -5,0 -10,-1 -14,-4 -1,5 -3,8 -6,10 -3,-3 -7,-5 -10,-6 4,-2 7,-4 7,-11l0 0c-5,-6 -8,-14 -8,-22 0,-10 3,-18 9,-24 5,-6 13,-10 22,-10zm14 17c-3,-5 -9,-7 -14,-7 -6,0 -11,2 -15,7 -4,4 -6,10 -6,17 0,6 2,12 6,16 4,5 9,7 15,7 5,0 11,-2 14,-7 4,-4 7,-10 7,-16 0,-7 -3,-13 -7,-17zm-58 112c6,0 11,-3 14,-6 4,-4 6,-9 6,-14l0 -12c0,-22 -30,-14 -35,-35 -5,2 -10,3 -15,3 -5,0 -10,-1 -14,-3 -6,22 -35,11 -35,35l0 12c0,5 2,10 5,14 4,3 9,6 14,6 20,0 40,0 60,0zm-11 -125c-5,-5 -11,-9 -19,-9 -7,0 -14,4 -18,9 -5,5 -8,13 -8,21 0,9 3,16 8,22 4,5 11,9 18,9 8,0 14,-4 19,-9 5,-6 8,-13 8,-22 0,-8 -3,-16 -8,-21z',
                    action: 'team',
                    can_view: () => { return this.is_module_enabled('teams') }
                },
                {
                    title: 'Services',
                    icon: 'M57 58l151 0 0 -7c0,-4 -2,-7 -4,-10 -3,-3 -7,-4 -11,-4l-165 0c-4,0 -8,1 -10,4 -3,3 -5,6 -5,10l0 113c0,4 2,8 5,10 2,3 6,4 10,4l1 0 0 -92c0,-8 3,-15 8,-20 5,-5 12,-8 20,-8zm164 0l1 0c8,0 15,3 20,8 5,5 8,12 8,20l0 113c0,7 -3,14 -8,20 -5,5 -12,8 -20,8l-165 0c-8,0 -15,-3 -20,-8 -5,-6 -8,-13 -8,-20l0 -7 -1 0c-8,0 -15,-3 -20,-8 -5,-5 -8,-12 -8,-20l0 -113c0,-7 3,-14 8,-20 5,-5 12,-8 20,-8l165 0c8,0 15,3 20,8 5,6 8,13 8,20l0 7zm1 14l-165 0c-4,0 -8,1 -11,4 -2,2 -4,6 -4,10l0 113c0,4 2,7 4,10 3,3 7,4 11,4l165 0c4,0 8,-1 10,-4 3,-3 5,-6 5,-10l0 -113c0,-4 -2,-8 -5,-10 -2,-3 -6,-4 -10,-4z M125 67c3,0 5,1 7,3l0 0c1,2 2,4 2,7l0 5c6,1 10,3 15,6l4 -4c1,-2 4,-3 6,-3 3,0 5,1 7,3 2,2 3,4 3,7 0,2 -1,5 -3,6l-4 4c3,4 5,9 6,15l5 0c3,0 5,1 7,2l0 0c2,2 3,4 3,7 0,3 -1,5 -3,7 -2,1 -4,2 -7,2l-4 0c-2,6 -4,11 -7,15l4 4c2,1 3,4 3,6 0,3 -1,5 -3,7 -2,2 -4,3 -7,3 -2,0 -5,-1 -6,-3l-4 -3c-4,3 -9,5 -15,6l0 4c0,3 -1,5 -2,7 -2,2 -4,3 -7,3 -3,0 -5,-1 -7,-3l0 0c-1,-2 -2,-4 -2,-7l0 -4c-6,-1 -11,-3 -15,-6l-4 3c-1,2 -4,3 -6,3 -3,0 -5,-1 -7,-3 -2,-2 -3,-4 -3,-7 0,-2 1,-5 3,-6l4 -4c-3,-4 -5,-9 -7,-15l-4 0c-3,0 -5,-1 -7,-2l0 0c-2,-2 -3,-4 -3,-7 0,-3 1,-5 3,-7l0 0c2,-1 4,-2 7,-2l5 0c1,-6 3,-11 6,-15l-4 -4c-2,-1 -3,-4 -3,-6 0,-3 1,-5 3,-7 2,-2 4,-3 7,-3 2,0 5,1 6,3l4 4c5,-3 9,-5 15,-6l0 -5c0,-3 1,-5 2,-7l0 0c2,-2 4,-3 7,-3zm1 14l0 -4c0,-1 0,-1 0,-1l0 0c0,-1 -1,-1 -1,-1 0,0 -1,0 -1,1l0 0c0,0 0,0 0,1l0 4c0,0 1,0 1,0 0,0 1,0 1,0zm29 12c1,0 1,1 1,1 1,0 1,1 1,1l3 -3c1,0 1,-1 1,-1 0,-1 0,-1 -1,-1 0,-1 0,-1 -1,-1 0,0 -1,0 -1,1l-3 3zm14 31c0,0 0,1 0,1 0,1 0,1 0,1l4 0c1,0 1,0 1,0 1,0 1,-1 1,-1 0,0 0,-1 -1,-1l0 0c0,0 0,0 -1,0l-4 0zm-11 32c-1,0 -1,0 -2,1 0,0 0,0 0,1l2 2c0,1 1,1 1,1 1,0 1,0 1,-1 1,0 1,0 1,-1 0,0 0,-1 -1,-1l-2 -2zm-32 14c0,0 -1,0 -1,0 0,0 -1,0 -1,0l0 3c0,1 0,1 0,1l0 0c0,1 1,1 1,1 0,0 1,0 1,-1 0,0 0,0 0,-1l0 -3zm-32 -12c0,-1 0,-1 0,-1 -1,-1 -1,-1 -2,-1l-2 2c-1,0 -1,1 -1,1 0,1 0,1 1,1 0,1 0,1 1,1 0,0 1,0 1,-1l2 -2zm-13 -32c0,0 0,0 0,-1 0,0 0,-1 0,-1l-4 0c-1,0 -1,0 -1,0l0 0c-1,0 -1,1 -1,1 0,0 0,1 1,1l0 0c0,0 0,0 1,0l4 0zm12 -31c0,0 0,-1 1,-1 0,0 0,-1 1,-1l-3 -3c0,-1 -1,-1 -1,-1 -1,0 -1,0 -1,1 -1,0 -1,0 -1,1 0,0 0,1 1,1l3 3zm32 11c5,0 10,2 14,6 3,3 5,8 5,13 0,6 -2,11 -5,14l0 0c-4,4 -9,6 -14,6 -5,0 -10,-2 -14,-6l0 0c-3,-3 -5,-8 -5,-14 0,-5 2,-10 5,-13l0 0c4,-4 9,-6 14,-6zm4 15c-1,-1 -2,-1 -4,-1 -2,0 -3,0 -4,1l0 0c-1,1 -2,3 -2,4 0,2 1,4 2,5 1,1 2,1 4,1 2,0 3,0 4,-1 1,-1 2,-3 2,-5 0,-1 -1,-3 -2,-4zm18 -17c-6,-6 -13,-9 -22,-9 -9,0 -16,3 -22,9 -5,5 -9,13 -9,21 0,9 4,17 9,22 6,6 13,9 22,9 9,0 16,-3 22,-9 5,-5 9,-13 9,-22 0,-8 -4,-16 -9,-21z',
                    action: 'services-list',
                    can_view: () => {
                        if (!this.is_module_enabled('services')) return false
                        if (this.user.is_admin || this.user.is_manager) return true
                        return this.user.can.hasOwnProperty('service')
                    }
                },
                {
                    title: 'Chat',
                    icon: 'M123 1c28,0 54,11 72,30 18,18 29,43 29,71 0,79 -88,128 -153,145 -4,1 -8,-2 -9,-6 -1,-4 1,-8 5,-9 34,-8 58,-20 77,-31 -7,1 -14,2 -21,2 -27,0 -53,-12 -71,-30 -18,-18 -29,-43 -29,-71 0,-28 11,-53 29,-71 18,-19 44,-30 71,-30zm-38 84c8,0 15,6 15,14 0,8 -7,15 -15,15 -8,0 -14,-7 -14,-15 0,-8 6,-14 14,-14zm77 0c8,0 14,6 14,14 0,8 -6,15 -14,15 -8,0 -15,-7 -15,-15 0,-8 7,-14 15,-14zm-39 0c8,0 15,6 15,14 0,8 -7,15 -15,15 -8,0 -15,-7 -15,-15 0,-8 7,-14 15,-14zm61 -44c-15,-15 -37,-25 -61,-25 -23,0 -45,10 -60,25 -16,16 -25,37 -25,61 0,24 9,45 25,61 15,15 37,25 60,25 24,0 46,-10 61,-25 16,-16 25,-37 25,-61 0,-24 -9,-45 -25,-61z',
                    action: 'chat',
                    can_view: () => (this.is_module_enabled('chat'))
                },
                {
                    title: 'Invoice',
                    icon: 'M37 11l176 0c11,0 20,4 26,11 7,6 11,16 11,26l0 154c0,10 -4,19 -11,26 -2,2 -4,3 -6,5 -17,13 -33,1 -48,-11 -10,-7 -19,-14 -26,-11 -5,2 -9,7 -12,13 -12,18 -31,17 -46,4 -5,-5 -11,-10 -16,-11 -6,-1 -12,4 -19,9 -11,8 -23,17 -39,11 -6,-1 -12,-5 -16,-9 -7,-7 -11,-16 -11,-26l0 -154c0,-10 4,-20 11,-26 6,-7 15,-11 26,-11zm22 108c8,0 15,7 15,15 0,8 -7,15 -15,15 -8,0 -15,-7 -15,-15 0,-8 7,-15 15,-15zm0 -56c8,0 15,7 15,15 0,8 -7,15 -15,15 -8,0 -15,-7 -15,-15 0,-8 7,-15 15,-15zm44 24c-4,0 -7,-4 -7,-8 0,-4 3,-7 7,-7l96 0c4,0 7,3 7,7 0,4 -3,8 -7,8l-96 0zm0 56c-4,0 -7,-4 -7,-8 0,-4 3,-7 7,-7l96 0c4,0 7,3 7,7 0,4 -3,8 -7,8l-96 0zm129 70c2,-3 3,-7 3,-11l0 -154c0,-6 -2,-12 -6,-16 -4,-4 -10,-6 -16,-6l-176 0c-6,0 -12,2 -16,6 -4,4 -6,10 -6,16l0 154c0,6 2,11 6,15 1,2 3,3 4,3 13,8 23,1 32,-6 9,-7 18,-13 30,-12 10,2 17,8 24,15 8,7 17,8 24,-1 4,-8 9,-15 19,-19 14,-6 27,3 39,13 13,10 26,20 39,3z',
                    action: 'invoice',
                    can_view: () => {
                        if (!this.is_module_enabled('invoices')) return false
                        if (this.user.is_admin || this.user.is_manager) return true
                        return this.user.can.hasOwnProperty('invoices')
                    }
                },
                {
                    title: 'Templates',
                    icon: 'M58 59l149 0 0 -7c0,-4 -2,-7 -4,-10 -3,-2 -7,-4 -11,-4l-163 0c-4,0 -7,2 -10,4 -2,3 -4,6 -4,10l0 111c0,4 2,8 4,10 3,3 6,5 10,5l1 0 0 -91c0,-8 3,-15 8,-20 5,-5 12,-8 20,-8zm13 59c-3,0 -6,-3 -6,-7 0,-4 3,-7 6,-7l138 0c3,0 6,3 6,7 0,4 -3,7 -6,7l-138 0zm0 35c-3,0 -6,-3 -6,-7 0,-4 3,-7 6,-7l87 0c3,0 6,3 6,7 0,4 -3,7 -6,7l-87 0zm0 31c-3,0 -6,-3 -6,-7 0,-3 3,-6 6,-6l138 0c3,0 6,3 6,6 0,4 -3,7 -6,7l-138 0zm149 -125l1 0c7,0 14,3 19,8 5,5 8,12 8,20l0 111c0,7 -3,14 -8,19 -5,5 -12,8 -19,8l-163 0c-8,0 -15,-3 -20,-8 -5,-5 -8,-12 -8,-19l0 -7 -1 0c-7,0 -14,-3 -19,-8 -5,-5 -8,-12 -8,-20l0 -111c0,-7 3,-14 8,-19 5,-5 12,-8 19,-8l163 0c8,0 15,3 20,8 5,5 8,12 8,19l0 7zm1 13l-163 0c-4,0 -8,2 -11,5 -2,2 -4,6 -4,10l0 111c0,4 2,7 4,10 3,2 7,4 11,4l163 0c4,0 7,-2 10,-4 2,-3 4,-6 4,-10l0 -111c0,-4 -2,-8 -4,-10 -3,-3 -6,-5 -10,-5z',
                    action: 'templates',
                    can_view: () => {
                        if (this.user.is_admin || this.user.is_manager) return true
                        return this.user.can.hasOwnProperty('templates')
                    }
                },
                {
                    title: 'Notes',
                    icon: 'M58 59l149 0 0 -7c0,-4 -2,-7 -4,-10 -3,-2 -7,-4 -11,-4l-163 0c-4,0 -7,2 -10,4 -2,3 -4,6 -4,10l0 111c0,4 2,8 4,10 3,3 6,5 10,5l1 0 0 -91c0,-8 3,-15 8,-20 5,-5 12,-8 20,-8zm13 59c-3,0 -6,-3 -6,-7 0,-4 3,-7 6,-7l138 0c3,0 6,3 6,7 0,4 -3,7 -6,7l-138 0zm0 35c-3,0 -6,-3 -6,-7 0,-4 3,-7 6,-7l87 0c3,0 6,3 6,7 0,4 -3,7 -6,7l-87 0zm0 31c-3,0 -6,-3 -6,-7 0,-3 3,-6 6,-6l138 0c3,0 6,3 6,6 0,4 -3,7 -6,7l-138 0zm149 -125l1 0c7,0 14,3 19,8 5,5 8,12 8,20l0 111c0,7 -3,14 -8,19 -5,5 -12,8 -19,8l-163 0c-8,0 -15,-3 -20,-8 -5,-5 -8,-12 -8,-19l0 -7 -1 0c-7,0 -14,-3 -19,-8 -5,-5 -8,-12 -8,-20l0 -111c0,-7 3,-14 8,-19 5,-5 12,-8 19,-8l163 0c8,0 15,3 20,8 5,5 8,12 8,19l0 7zm1 13l-163 0c-4,0 -8,2 -11,5 -2,2 -4,6 -4,10l0 111c0,4 2,7 4,10 3,2 7,4 11,4l163 0c4,0 7,-2 10,-4 2,-3 4,-6 4,-10l0 -111c0,-4 -2,-8 -4,-10 -3,-3 -6,-5 -10,-5z',
                    action: 'notes',
                    can_view: () => { return this.is_module_enabled('notes') }
                },
                {
                    title: 'Calendar',
                    icon: 'M29 26l32 0c1,0 1,1 2,1 1,0 2,1 3,2 0,0 1,1 1,2 1,1 1,2 1,3 0,1 0,1 -1,2 0,1 -1,2 -1,3l0 0c-1,0 -2,1 -3,1 -1,1 -1,1 -2,1l-32 0c-1,0 -2,0 -3,0 -1,0 -1,0 -2,1 -1,0 -2,1 -3,1 -1,1 -1,1 -2,2l0 0c-1,1 -1,1 -2,2 0,1 -1,2 -1,3 -1,1 -1,1 -1,2 0,1 0,2 0,3l0 115c0,1 0,2 0,3 0,1 0,1 1,2 0,1 1,2 1,3 1,1 1,1 2,2 1,1 1,1 2,2 1,0 2,1 3,1 1,1 1,1 2,1 1,0 2,0 3,0l80 0 0 0c1,0 1,1 2,1 1,0 2,1 2,1l0 0c1,1 1,2 2,3 0,1 0,1 0,2 0,1 0,2 0,3 -1,1 -1,2 -2,2l0 1c-1,0 -1,1 -2,1 -1,0 -2,1 -3,1l-79 0c-2,0 -4,-1 -5,-1 -2,0 -4,-1 -6,-2 -1,0 -3,-1 -5,-2 -1,-1 -3,-3 -4,-4 -1,-1 -3,-3 -4,-4 -1,-2 -2,-3 -2,-5 -1,-2 -2,-4 -2,-6 0,-1 -1,-3 -1,-5l0 -115c0,-2 1,-4 1,-5 0,-2 1,-4 2,-6 0,-2 1,-3 2,-5 1,-1 3,-3 4,-4 1,-1 3,-3 4,-4 2,-1 4,-2 5,-2 2,-1 4,-2 6,-2 1,0 3,-1 5,-1zm42 159l7 0 0 0 14 0c-7,0 -14,0 -21,0zm125 -18c1,1 2,2 3,4 0,1 1,3 1,4 0,3 -2,6 -4,8 -2,2 -4,3 -7,3l-18 22c-1,1 -3,2 -5,2 -1,0 -3,0 -5,-1 -1,-2 -2,-3 -2,-5 0,-2 0,-4 1,-5l18 -22 0 0c0,-1 0,-1 0,-2 0,-1 0,-3 1,-5 1,-1 2,-3 3,-4l0 -23c0,-2 1,-3 2,-5 1,-1 3,-2 5,-2 2,0 4,1 5,2 1,2 2,3 2,5l0 24zm-9 -54c8,0 17,2 24,5 8,3 14,8 20,14 6,5 11,12 14,20 3,7 5,15 5,24 0,8 -2,16 -5,24 -3,7 -8,14 -14,20 -6,6 -12,10 -20,14 -7,3 -16,4 -24,4 -8,0 -16,-1 -24,-4 -8,-4 -14,-8 -20,-14 -6,-6 -11,-13 -14,-20 -3,-8 -4,-16 -4,-24 0,-9 1,-17 4,-24 3,-8 8,-15 14,-20 6,-6 12,-11 20,-14 8,-3 16,-5 24,-5zm34 29c-9,-9 -21,-14 -34,-14 -7,0 -13,1 -18,3 -6,3 -12,6 -16,11 -5,4 -8,9 -11,15 -2,6 -3,12 -3,19 0,6 1,13 3,18 3,6 6,12 11,16 4,5 10,8 16,11 5,2 11,3 18,3 7,0 13,-1 19,-3 5,-3 11,-6 15,-11 5,-4 8,-10 11,-16 2,-5 3,-12 3,-18 0,-7 -1,-13 -3,-19 -3,-6 -6,-11 -11,-15zm5 -41c0,0 0,1 0,2 -1,1 -1,2 -2,3l0 0c-1,0 -1,1 -2,1 -1,0 -2,1 -3,1 -1,0 -2,-1 -3,-1 -1,0 -1,-1 -2,-1l0 -1c-1,0 -1,-1 -2,-2 0,-1 0,-2 0,-2l0 -46c0,-1 0,-2 0,-3 -1,-1 -1,-1 -1,-2 -1,-1 -1,-2 -2,-3 0,-1 -1,-1 -1,-2 -1,-1 -2,-1 -3,-2 0,0 -1,-1 -2,-1 -1,-1 -2,-1 -3,-1 -1,0 -2,0 -3,0 -2,0 -6,0 -9,0 -8,0 -16,0 -21,0 -1,0 -2,-1 -3,-1 -1,0 -1,-1 -2,-1 -1,-1 -1,-2 -1,-3 -1,-1 -1,-1 -1,-2 0,-1 0,-2 1,-3 0,-1 0,-2 1,-2l0 0c1,-1 1,-2 2,-2 1,0 2,0 3,-1 5,0 14,0 21,0 3,0 7,0 9,0 2,0 4,1 6,1 2,0 4,1 5,2 2,0 4,1 5,2 2,1 3,3 5,4 1,1 2,3 3,4 1,2 2,3 3,5 1,2 1,4 2,6 0,1 0,3 0,5l0 46zm-187 -11c-1,0 -1,0 -2,-1 -1,0 -2,0 -3,-1 0,-1 -1,-1 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-3 0,-1 1,-1 1,-2l0 0c1,-1 2,-1 3,-2 1,0 1,0 2,0l79 0c1,0 2,0 3,0 1,1 2,1 3,2l0 0c0,1 1,1 1,2 0,1 1,2 1,3 0,1 -1,2 -1,3 0,1 -1,1 -1,2l-1 0c0,1 -1,1 -2,2 -1,0 -2,0 -3,0l-79 0zm0 66c-1,0 -1,0 -2,0 -1,-1 -2,-1 -3,-2l0 0c0,-1 -1,-2 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-3 0,-1 1,-1 1,-2 1,-1 2,-1 3,-2 1,0 1,0 2,0l22 0c1,0 2,0 3,0 1,1 1,1 2,2l0 0c1,1 1,1 2,2 0,1 0,2 0,3 0,1 0,2 0,3 -1,1 -1,1 -2,2l0 0c-1,1 -1,1 -2,2 -1,0 -2,0 -3,0l-22 0zm0 -34c-1,0 -1,0 -2,0 -1,-1 -2,-1 -3,-2l0 0c0,0 -1,-1 -1,-2 -1,-1 -1,-2 -1,-3 0,-1 0,-2 1,-2 0,-1 1,-2 1,-3l0 0c1,0 2,-1 3,-1 1,-1 1,-1 2,-1l49 0c1,0 2,0 3,1 1,0 1,1 2,1 1,1 1,2 2,3 0,0 0,1 0,2 0,1 0,2 0,3 -1,1 -1,2 -2,2 -1,1 -1,1 -2,2 -1,0 -2,0 -3,0l-49 0zm115 -74c0,1 -1,2 -1,3 0,1 -1,2 -1,2l-1 0c0,1 -1,2 -2,2 -1,0 -2,1 -3,1 0,0 -1,-1 -2,-1 -1,0 -2,-1 -3,-2l0 0c0,0 -1,-1 -1,-2 0,-1 -1,-2 -1,-3l0 -29c0,-1 1,-2 1,-3 0,-1 1,-2 1,-2 1,-1 2,-1 3,-2 1,0 2,0 2,0 1,0 2,0 3,0 1,1 2,1 3,2l0 0c0,0 1,1 1,2 0,1 1,2 1,3l0 29zm-67 0c0,1 0,2 -1,3 0,1 -1,2 -1,2l0 0c-1,1 -2,2 -3,2 0,0 -1,1 -2,1 -1,0 -2,-1 -3,-1 -1,0 -2,-1 -2,-2l0 0c-1,0 -1,-1 -2,-2 0,-1 0,-2 0,-3l0 -29c0,-1 0,-2 0,-3 1,-1 1,-2 2,-2l0 0c0,-1 1,-1 2,-2 1,0 2,0 3,0 1,0 2,0 3,0 0,1 1,1 2,2 0,0 1,1 1,2 1,1 1,2 1,3l0 29zm10 -7c-1,0 -2,0 -2,-1 -1,0 -2,-1 -3,-1 0,-1 -1,-2 -1,-3 -1,-1 -1,-1 -1,-2 0,-1 0,-2 1,-3 0,-1 1,-2 1,-2l0 -1c1,0 2,-1 3,-1 0,0 1,-1 2,-1l30 0c1,0 2,1 3,1 1,0 1,1 2,2l0 0c1,0 1,1 2,2 0,1 0,2 0,3 0,1 0,1 0,2 -1,1 -1,2 -2,3 -1,0 -1,1 -2,1 -1,1 -2,1 -3,1l-30 0z',
                    action: 'calendar',
                    can_view: () => {
                        if (!this.is_module_enabled('calendars')) return false
                        if (this.user.is_admin || this.user.is_manager) return true
                        return (
                            this.user.can.hasOwnProperty('calendars') ||
                            this.user.can.hasOwnProperty('calendars_own')
                        )
                    }
                },
                {
                    title: 'Forms',
                    icon: 'M57 59l150 0 0 -7c0,-4 -1,-8 -4,-10 -3,-3 -6,-5 -10,-5l-164 0c-4,0 -8,2 -10,5 -3,2 -5,6 -5,10l0 112c0,4 2,7 5,10 2,2 6,4 10,4l0 0 0 -92c0,-7 4,-14 9,-19 5,-5 12,-8 19,-8zm126 71c10,0 19,4 25,10 7,7 11,16 11,26 0,9 -4,18 -11,25 -6,6 -15,10 -25,10 -10,0 -19,-4 -25,-10 -7,-7 -11,-16 -11,-25 0,-10 4,-19 11,-26 6,-6 15,-10 25,-10zm16 20c-4,-4 -10,-7 -16,-7 -6,0 -12,3 -16,7 -4,4 -6,9 -6,16 0,6 2,11 6,15 4,4 10,7 16,7 6,0 12,-3 16,-7 4,-4 6,-9 6,-15 0,-7 -2,-12 -6,-16zm-124 -23l40 0c6,0 11,2 14,6 4,3 6,8 6,14l0 33c0,6 -2,11 -6,14l0 0c-3,4 -8,6 -14,6l-40 0c-5,0 -10,-2 -14,-6l0 0c-4,-3 -6,-8 -6,-14l0 -33c0,-6 2,-11 6,-14l0 0c4,-4 9,-6 14,-6zm40 13l-40 0c-2,0 -3,1 -4,2l0 0c-2,1 -2,3 -2,5l0 33c0,2 0,4 2,5 1,1 2,2 4,2l40 0c2,0 4,-1 5,-2l0 0c1,-1 2,-3 2,-5l0 -33c0,-2 -1,-4 -2,-5 -1,-1 -3,-2 -5,-2zm-42 -59l130 0c5,0 10,2 13,5l0 0c3,3 6,8 6,13 0,5 -3,9 -6,12l0 0c-3,4 -8,6 -13,6l-130 0c-5,0 -9,-2 -12,-6 -4,-3 -6,-7 -6,-12 0,-5 2,-10 6,-13 3,-3 7,-5 12,-5zm130 13l-130 0c-1,0 -2,1 -3,1 -1,1 -1,2 -1,4 0,1 0,2 1,3 1,1 2,1 3,1l130 0c2,0 3,0 4,-1 1,-1 1,-2 1,-3 0,-2 0,-3 -1,-4 -1,0 -2,-1 -4,-1zm18 -35l0 0c8,0 15,3 20,8 5,5 8,12 8,19l0 112c0,8 -3,15 -8,20 -5,5 -12,8 -20,8l-164 0c-7,0 -14,-3 -19,-8 -5,-5 -9,-12 -9,-20l0 -7 0 0c-8,0 -15,-3 -20,-8 -5,-5 -8,-12 -8,-19l0 -112c0,-8 3,-15 8,-20 5,-5 12,-8 20,-8l164 0c8,0 14,3 19,8 5,5 9,12 9,20l0 7zm0 13l-164 0c-4,0 -7,2 -10,4 -3,3 -4,6 -4,10l0 112c0,4 1,8 4,10 3,3 6,5 10,5l164 0c4,0 8,-2 10,-5 3,-2 5,-6 5,-10l0 -112c0,-4 -2,-7 -5,-10 -2,-2 -6,-4 -10,-4z',
                    action: 'forms',
                    can_view: () => {
                        if (!this.is_module_enabled('forms')) return false
                        if (this.user.is_admin || this.user.is_manager) return true
                        return this.user.can.hasOwnProperty('forms')
                    }
                },
                {
                    title: 'Payment',
                    icon: 'M23 40l177 0c6,0 12,3 16,7l0 0c4,4 7,10 7,16l0 6c0,0 0,0 0,0l0 36c0,3 -2,5 -6,5 -3,0 -5,-2 -5,-5l0 -1 0 0 0 -41c0,-3 -1,-6 -4,-8l0 0c-2,-3 -5,-4 -8,-4l-177 0c-3,0 -6,1 -8,4 -3,2 -4,5 -4,8l0 93c0,4 1,7 4,9 2,2 5,3 8,3l117 0 0 0 5 0c3,0 6,3 6,6 0,3 -3,5 -6,5l-35 0c0,0 0,0 -1,0l-86 0c-6,0 -12,-2 -16,-6l0 -1c-4,-4 -7,-9 -7,-16l0 -93c0,-6 3,-12 7,-16l0 0c4,-4 10,-7 16,-7zm180 77c13,0 25,5 33,13 9,9 14,20 14,33 0,13 -5,25 -14,33 -8,9 -20,14 -33,14 -13,0 -24,-5 -33,-14 -8,-8 -13,-20 -13,-33 0,-13 5,-24 13,-33 9,-8 20,-13 33,-13zm4 24c6,1 9,3 9,6 0,1 -1,2 -2,3 0,1 -2,2 -3,2 0,0 -1,-1 -1,-1 -1,0 -1,0 -2,0 0,0 -1,0 -1,0 -1,-1 -3,-1 -4,-1 -1,0 -2,0 -3,1 -1,0 -1,1 -1,2 0,1 0,2 1,3 0,0 1,1 2,1 3,1 4,1 6,2 2,1 4,1 6,2 1,2 3,3 3,4 1,2 2,4 2,6 0,4 -1,7 -4,10 -2,2 -4,4 -8,4l0 5c0,1 -1,2 -1,2 -1,1 -2,1 -3,1 -1,0 -1,0 -2,-1 -1,0 -1,-1 -1,-2l0 -4c-2,0 -5,-1 -7,-2 -3,-1 -5,-3 -5,-5 0,-1 0,-2 1,-3 1,-2 2,-2 3,-2 1,0 2,0 2,0l4 1c2,1 4,1 5,1 1,0 2,0 4,-1 1,-1 1,-2 1,-3 0,-2 0,-3 -2,-3 -1,-1 -3,-2 -6,-2 -2,-1 -4,-2 -5,-2 -1,-1 -3,-1 -4,-2 -1,-1 -2,-3 -2,-4 -1,-2 -1,-3 -1,-5 0,-1 0,-2 0,-3 1,-1 1,-2 2,-3 0,-1 1,-2 2,-3 2,-2 5,-4 8,-4l0 -4c0,-1 0,-2 1,-3 1,0 1,-1 2,-1 1,0 2,1 3,1 0,1 1,2 1,3l0 4zm21 -3c-6,-6 -15,-10 -25,-10 -10,0 -18,4 -25,10 -6,7 -10,15 -10,25 0,10 4,19 10,25 7,7 15,11 25,11 10,0 19,-4 25,-11 7,-6 11,-15 11,-25 0,-10 -4,-18 -11,-25zm-192 -26c-3,0 -5,-3 -5,-6 0,-3 2,-5 5,-5l63 0c3,0 5,2 5,5 0,3 -2,6 -5,6l-63 0zm0 -30c-3,0 -5,-3 -5,-6 0,-3 2,-5 5,-5l85 0c3,0 5,2 5,5 0,3 -2,6 -5,6l-85 0zm0 58c-3,0 -5,-2 -5,-5 0,-3 2,-6 5,-6l85 0c3,0 5,3 5,6 0,3 -2,5 -5,5l-85 0z',
                    action: 'payment',
                    can_view: () => {
                        if (!this.is_module_enabled('payments')) return false
                        if (this.user.is_admin || this.user.is_manager) return true
                        return this.user.can.hasOwnProperty('payments')
                    }
                },
                {
                    title: 'Timers',
                    icon: 'M125 0c35,0 66,14 88,37 23,22 37,53 37,88 0,35 -14,66 -37,88 -22,23 -53,37 -88,37 -35,0 -66,-14 -88,-37 -23,-22 -37,-53 -37,-88 0,-35 14,-66 37,-88 22,-23 53,-37 88,-37zm-4 56c0,-4 4,-8 8,-8 5,0 8,4 8,8l0 54c5,3 8,8 8,14 0,9 -8,16 -17,16 -1,0 -2,0 -3,0l-46 56c-3,4 -8,4 -11,1 -4,-2 -4,-8 -1,-11l46 -56c-1,-2 -1,-4 -1,-6 0,-7 4,-12 9,-15l0 -53zm81 -8c-20,-20 -47,-32 -77,-32 -30,0 -57,12 -77,32 -20,20 -32,47 -32,77 0,30 12,57 32,77 20,20 47,32 77,32 30,0 57,-12 77,-32 20,-20 32,-47 32,-77 0,-30 -12,-57 -32,-77z M121 135c0,-4 4,-8 8,-8 5,0 8,4 8,8l0 68c0,5 -3,8 -8,8 -4,0 -8,-3 -8,-8l0 -68z M131 136c-3,-3 -3,-8 0,-11 3,-3 8,-3 11,0l48 48c3,3 3,8 0,11 -3,3 -8,3 -12,0l-47 -48z M141 132c-5,0 -8,-3 -8,-8 0,-4 3,-8 8,-8l67 0c5,0 9,4 9,8 0,5 -4,8 -9,8l-67 0z',
                    action: 'none',
                    can_view: () => {
                        if (!this.is_module_enabled('timers')) return false
                        if (this.user.is_admin || this.user.is_manager) return true
                        return (
                            this.user.can.hasOwnProperty('hq_timers_own') ||
                            this.user.can.hasOwnProperty('timers_own')
                        )
                    }
                },
                {
                    title: 'Reports',
                    icon: 'M57 59l150 0 0 -7c0,-4 -1,-8 -4,-10 -3,-3 -6,-5 -10,-5l-164 0c-4,0 -8,2 -10,5 -3,2 -5,6 -5,10l0 112c0,4 2,7 5,10 2,2 6,4 10,4l0 0 0 -92c0,-7 3,-14 8,-19 5,-5 12,-8 20,-8zm129 23l21 0c4,0 7,1 10,3l0 0c2,3 3,6 3,10l0 98c0,3 -1,7 -3,9l0 0c-3,2 -6,4 -10,4l-21 0c-4,0 -7,-2 -9,-4 -3,-2 -4,-6 -4,-9l0 -98c0,-4 1,-7 4,-10 2,-2 5,-3 9,-3zm-116 72l21 0c4,0 7,1 9,4 3,2 4,5 4,9l0 26c0,3 -1,7 -4,9 -2,2 -5,4 -9,4l-21 0c-4,0 -7,-2 -10,-4 -2,-2 -3,-6 -3,-9l0 -26c0,-4 1,-7 3,-9 3,-3 6,-4 10,-4zm21 13l-21 0 0 25 21 0 0 -25zm37 -62l21 0c4,0 7,1 9,3 3,3 4,6 4,10l0 75c0,3 -1,7 -4,9 -2,2 -5,4 -9,4l-21 0c-4,0 -7,-2 -10,-4 -2,-2 -3,-6 -3,-9l0 -75c0,-4 1,-7 3,-10 3,-2 6,-3 10,-3zm21 13l-21 0 0 74 21 0 0 -74zm58 -23l-21 0 0 97 21 0 0 -97zm14 -36l0 0c8,0 15,3 20,8 5,5 8,12 8,19l0 112c0,8 -3,15 -8,20 -5,5 -12,8 -20,8l-164 0c-8,0 -15,-3 -20,-8 -5,-5 -8,-12 -8,-20l0 -7 0 0c-8,0 -15,-3 -20,-8 -5,-5 -8,-12 -8,-19l0 -112c0,-8 3,-15 8,-20 5,-5 12,-8 20,-8l164 0c8,0 15,3 20,8 5,5 8,12 8,20l0 7zm0 13l-164 0c-4,0 -7,2 -10,4 -3,3 -4,6 -4,10l0 112c0,4 1,8 4,10 3,3 6,5 10,5l164 0c4,0 8,-2 10,-5 3,-2 5,-6 5,-10l0 -112c0,-4 -2,-7 -5,-10 -2,-2 -6,-4 -10,-4z',
                    action: 'reports',
                    can_view: () => {
                        if (!this.is_module_enabled('reports')) return false
                        if (this.user.is_admin || this.user.is_manager) return true
                        return this.user.can.hasOwnProperty('reports')
                    }
                },
                {
                    title: 'Connect',
                    icon: 'M73 136c-15,0 -29,-5 -39,-14 -10,-9 -17,-22 -17,-36 0,-13 5,-24 14,-33 8,-8 18,-13 29,-16 5,-10 13,-19 22,-25 11,-7 24,-11 38,-11 14,0 27,4 38,11 9,6 17,14 21,24 14,0 27,5 36,13 10,9 17,21 18,34 0,1 0,2 0,3 0,14 -7,27 -17,36 -10,9 -24,14 -39,14l-104 0zm-38 65l180 0c7,0 13,3 17,7l0 0c4,5 7,11 7,17 0,7 -3,13 -7,17l0 0c-5,4 -10,7 -17,7l-180 0c-7,0 -12,-3 -17,-7l0 0c-4,-4 -7,-10 -7,-17 0,-6 3,-12 7,-17l0 0c4,-4 10,-7 17,-7zm180 17l-180 0c-2,0 -4,0 -5,2l0 0c-2,1 -3,3 -3,5 0,2 1,4 3,6l0 0c1,1 3,2 5,2l180 0c2,0 4,-1 5,-2l0 0c2,-2 3,-4 3,-6 0,-2 -1,-4 -3,-5l0 0c-1,-2 -3,-2 -5,-2zm-180 -74l180 0c7,0 12,3 17,7l0 0c4,5 7,11 7,17 0,7 -3,13 -7,17l0 0c-5,4 -10,7 -17,7l-180 0c-7,0 -12,-3 -17,-7l0 0c-4,-4 -7,-10 -7,-17 0,-6 3,-12 7,-17l0 0c5,-4 10,-7 17,-7zm180 17l-180 0c-2,0 -4,0 -5,2l0 0c-2,1 -3,3 -3,5 0,2 1,4 3,6l0 0c1,1 3,2 5,2l180 0c2,0 4,-1 5,-2l0 0c2,-2 3,-4 3,-6 0,-2 -1,-4 -3,-5l0 0c-1,-2 -3,-2 -5,-2zm-170 -51c7,6 17,10 28,10l104 0c11,0 21,-4 28,-10 7,-6 11,-15 11,-24 0,-1 0,-1 0,-2 0,-9 -5,-17 -11,-22 -7,-6 -17,-10 -28,-10 -1,0 -2,0 -2,0l-6 1 -2 -6c-4,-9 -10,-16 -18,-21 -8,-6 -18,-9 -29,-9 -11,0 -21,3 -29,9 -8,5 -14,12 -17,21l-2 5 -5 0c-10,2 -18,6 -24,12 -6,6 -9,14 -9,22 0,9 4,18 11,24z',
                    action: 'connect',
                    can_view: () => (this.is_module_enabled('connect'))
                },
                {
                    title: 'Bugs',
                    icon: 'M125 12c17,0 33,10 44,28 7,10 12,23 14,38 7,2 12,6 16,11 5,5 7,13 7,20 0,9 -3,17 -8,23 -3,3 -6,5 -10,7 -2,2 -6,5 -10,8 -3,6 -6,13 -9,18 -11,17 -27,28 -44,28 -17,0 -33,-11 -44,-28 -4,-7 -8,-15 -11,-23 -7,-2 -13,-5 -18,-10 -5,-6 -8,-14 -8,-23 0,-7 2,-15 7,-20 4,-5 9,-9 15,-11 3,-15 8,-28 15,-38 11,-18 27,-28 44,-28zm30 145c-9,2 -20,3 -32,0 -5,-2 -7,-6 -6,-10 1,-5 6,-7 10,-6 15,4 28,0 38,-5 3,-10 4,-21 4,-34 0,-21 -5,-40 -14,-54 -8,-12 -18,-20 -30,-20 -12,0 -22,8 -30,20 -9,14 -15,33 -15,54 0,22 6,41 15,54 8,13 18,21 30,21 11,0 22,-8 30,-20z M125 0c20,0 38,11 51,30 11,17 19,40 20,66l-9 0c-1,-24 -8,-45 -19,-61 -11,-16 -26,-26 -43,-26 -17,0 -32,10 -43,26 -11,16 -18,37 -19,61l-9 0c1,-26 9,-49 20,-66 13,-19 31,-30 51,-30z M81 169c-2,3 -2,7 0,10 0,1 2,3 3,4 6,5 17,12 30,15 3,1 7,1 11,1l0 0c4,0 8,0 11,-1 13,-3 24,-10 30,-15 1,-1 3,-3 3,-4 2,-3 2,-7 0,-10 -15,19 -30,24 -44,24 -14,0 -29,-5 -44,-24zm47 44l0 0c-1,0 -2,0 -3,0l0 0c-1,0 -2,0 -3,0l0 0c-4,-1 -8,-1 -11,-2 -16,-3 -29,-11 -36,-18 -2,-2 -4,-4 -5,-6 -12,-17 6,-34 6,-34l6 -5 5 6c12,17 24,24 35,24l0 0c1,0 2,0 3,0 1,0 2,0 3,0l0 0c11,0 23,-7 35,-24l5 -6 6 5c0,0 18,17 6,34 -1,2 -3,4 -5,6 -7,7 -20,15 -36,18 -3,1 -7,1 -11,2z M63 171l9 0 0 14 -9 0c-7,0 -14,3 -19,7 -4,5 -7,12 -7,19 0,7 3,13 7,18 5,5 12,8 19,8l124 0c7,0 14,-3 19,-8 4,-5 7,-11 7,-18 0,-7 -3,-14 -7,-19 -5,-4 -12,-7 -19,-7l-7 0 0 -14 7 0c11,0 21,5 28,12l0 0c7,7 12,17 12,28 0,11 -5,21 -12,28l0 0c-7,7 -17,11 -28,11l-124 0c-11,0 -21,-4 -28,-11l0 0c-7,-7 -12,-17 -12,-28 0,-11 5,-21 12,-28l0 0c7,-7 17,-12 28,-12z',
                    action: 'bugs',
                    can_view: () => ((this.user.is_admin || this.user.is_manager) && this.is_module_enabled('bugs'))
                },
                {
                    title: 'Support',
                    icon: 'M125 12c17,0 33,10 44,28 7,10 12,23 14,38 7,2 12,6 16,11 5,5 7,13 7,20 0,9 -3,17 -8,23 -3,3 -6,5 -10,7 -2,2 -6,5 -10,8 -3,6 -6,13 -9,18 -11,17 -27,28 -44,28 -17,0 -33,-11 -44,-28 -4,-7 -8,-15 -11,-23 -7,-2 -13,-5 -18,-10 -5,-6 -8,-14 -8,-23 0,-7 2,-15 7,-20 4,-5 9,-9 15,-11 3,-15 8,-28 15,-38 11,-18 27,-28 44,-28zm30 145c-9,2 -20,3 -32,0 -5,-2 -7,-6 -6,-10 1,-5 6,-7 10,-6 15,4 28,0 38,-5 3,-10 4,-21 4,-34 0,-21 -5,-40 -14,-54 -8,-12 -18,-20 -30,-20 -12,0 -22,8 -30,20 -9,14 -15,33 -15,54 0,22 6,41 15,54 8,13 18,21 30,21 11,0 22,-8 30,-20z M125 0c20,0 38,11 51,30 11,17 19,40 20,66l-9 0c-1,-24 -8,-45 -19,-61 -11,-16 -26,-26 -43,-26 -17,0 -32,10 -43,26 -11,16 -18,37 -19,61l-9 0c1,-26 9,-49 20,-66 13,-19 31,-30 51,-30z M81 169c-2,3 -2,7 0,10 0,1 2,3 3,4 6,5 17,12 30,15 3,1 7,1 11,1l0 0c4,0 8,0 11,-1 13,-3 24,-10 30,-15 1,-1 3,-3 3,-4 2,-3 2,-7 0,-10 -15,19 -30,24 -44,24 -14,0 -29,-5 -44,-24zm47 44l0 0c-1,0 -2,0 -3,0l0 0c-1,0 -2,0 -3,0l0 0c-4,-1 -8,-1 -11,-2 -16,-3 -29,-11 -36,-18 -2,-2 -4,-4 -5,-6 -12,-17 6,-34 6,-34l6 -5 5 6c12,17 24,24 35,24l0 0c1,0 2,0 3,0 1,0 2,0 3,0l0 0c11,0 23,-7 35,-24l5 -6 6 5c0,0 18,17 6,34 -1,2 -3,4 -5,6 -7,7 -20,15 -36,18 -3,1 -7,1 -11,2z M63 171l9 0 0 14 -9 0c-7,0 -14,3 -19,7 -4,5 -7,12 -7,19 0,7 3,13 7,18 5,5 12,8 19,8l124 0c7,0 14,-3 19,-8 4,-5 7,-11 7,-18 0,-7 -3,-14 -7,-19 -5,-4 -12,-7 -19,-7l-7 0 0 -14 7 0c11,0 21,5 28,12l0 0c7,7 12,17 12,28 0,11 -5,21 -12,28l0 0c-7,7 -17,11 -28,11l-124 0c-11,0 -21,-4 -28,-11l0 0c-7,-7 -12,-17 -12,-28 0,-11 5,-21 12,-28l0 0c7,-7 17,-12 28,-12z',
                    action: 'support',
                    can_view: () => {
                        if (!this.is_module_enabled('support')) return false
                        if (this.user.is_admin || this.user.is_manager) return true
                        return this.user.can.hasOwnProperty('support')
                    }
                },
                {
                    title: 'Logout',
                    icon: 'M145 20c29,0 55,12 74,31 19,19 31,45 31,74 0,29 -12,55 -31,74 -19,19 -45,31 -74,31 -28,0 -55,-12 -73,-31 -15,-15 -26,-35 -30,-56l14 0c4,18 13,34 25,46 17,17 39,27 64,27 26,0 48,-10 65,-27 16,-16 26,-39 26,-64 0,-25 -10,-48 -26,-64 -17,-17 -39,-27 -65,-27 -25,0 -47,10 -64,27 -15,15 -24,35 -26,57l42 0c4,0 7,3 7,7 0,4 -3,7 -7,7l-90 0c-4,0 -7,-3 -7,-7 0,-4 3,-7 7,-7l34 0c2,-26 13,-50 31,-67 18,-19 45,-31 73,-31z',
                    action: 'logout',
                    can_view: () => true
                }
            ]
        }
    },
    watch: {
        $route: {
            handler(newVal) {
                this.selected_route_name = newVal.name
            },
            immediate: true,
            deep: true
        }
    },

    methods: {
        is_module_enabled(name) {
            return this.allowed_modules.includes(name)
        },
        sidebar_item_clicked(action) {
            if (action === 'none') {
                return
            }
            if (action === 'logout') {
                this.$auth.logout(
                    response => {
                        window.location.reload()
                    },
                    error => {
                        console.log('error', error)
                    }
                )
            } else {
                this.$router.push({ name: action })
                    .catch(err => {})
            }
        }
    }
}