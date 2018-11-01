export default {
	name: 'settings',

	data: () => ({
		tabs: [
			{ id: 1, name: 'General' },
			{ id: 2, name: 'Company' },
			{ id: 3, name: 'Invoices' },
			{ id: 4, name: 'Payment Methods' },
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
		}
	}

}