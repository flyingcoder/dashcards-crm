export default {
	name: 'settings',
	components: {
		Permissions: () => import('./components/Permissions/Permissions.vue')
	},

	data: () => ({
		active_tab: 3,
		tabs: [
			{ id: 1, name: 'General' },
			{ id: 2, name: 'Company' },
			{ id: 3, name: 'Invoices' },
			{ id: 4, name: 'Permissions' },
			{ id: 5, name: 'Email Templates' },
			{ id: 6, name: 'Support' },
			{ id: 7, name: 'Form Fields' },
			{ id: 8, name: 'Cron' },
			{ id: 9, name: 'DB Backup' },
			{ id: 10, name: 'Updates' },
		]
	}),

	computed: {
		is_medium_screen_and_down() {
			return this.$vuetify.breakpoint.mdAndDown
		},
		component() {
			if (this.active_tab) {
				return this.tabs[this.active_tab].name
			}
		}
	},

	watch: {
		active_tab: {
			handler(new_val) {
				const name = this.$route.name
				const tab = this.component.toLocaleLowerCase()
				this.$router.replace({ name, query: { tab } })
			},
			immediate: true
		}
	}

}