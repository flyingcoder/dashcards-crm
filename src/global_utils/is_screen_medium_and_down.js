export const is_screen_medium_and_down = {
	computed: {
		is_screen_medium_and_down() {
			return this.$vuetify.breakpoint.mdAndDown
		},
	}
}