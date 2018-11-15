import { is_screen_medium_and_down } from "@/global_utils/is_screen_medium_and_down";

export default {
	name: 'settings',
	mixins: [is_screen_medium_and_down],
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
		component() {
			if (this.active_tab) {
				return this.tabs[this.active_tab].name
			}
		}
	},

	watch: {
		active_tab: {
			handler(new_val) {
				let query = {...this.$route.query}
				const name = query.name
				const tab = this.component.toLocaleLowerCase()
				query.tab = tab
				this.$router.replace({ name, query: query })
			},
			immediate: true
		}
	}

}