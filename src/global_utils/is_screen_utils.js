export const is_screen_utils = {
    computed: {
        is_screen_medium_and_up() {
            return this.$vuetify.breakpoint.mdAndUp
        },
        is_screen_medium_and_down() {
            return this.$vuetify.breakpoint.mdAndDown
        },
        is_screen_small_and_down() {
            return this.$vuetify.breakpoint.smAndDown
        },
    }
}
