import { is_screen_medium_and_down } from "@/global_utils/is_screen_medium_and_down";

export default {
	name: 'ProjectPreview',
	mixins: [is_screen_medium_and_down],

	components: {
		HQ: () => import('./components/HQTab/HQTab.vue'),
		Members: () => import('./components/MembersTab/MembersTab.vue'),
		Milestones: () => import('./components/MilestonesTab/MilestonesTab.vue'),
		Invoice: () => import('./components/InvoiceTab/InvoiceTab.vue'),
		Task: () => import('./components/TaskTab/TaskTab.vue'),
		Timer: () => import('./components/TimerTab/TimerTab.vue'),
		Files: () => import('./components/FilesTab/FilesTab.vue'),
		Messages: () => import('./components/MessagesTab/MessagesTab.vue'),
		Reports: () => import('./components/ReportsTab/ReportsTab.vue')
	},

	props: {
		project_id: [Number, String], //from route prop
	},

	data: () => ({
		active_tab: 'HQ',
		tabs: [
			{ id: 1, name: 'HQ' },
			{ id: 2, name: 'Files' },
			{ id: 3, name: 'Milestones' },
			{ id: 4, name: 'Task' },
			{ id: 5, name: 'Messages' },
			{ id: 6, name: 'Invoice' },
			{ id: 7, name: 'Members' },
			{ id: 8, name: 'Timer' },
			{ id: 9, name: 'Reports' },
		]
	}),

	watch: {
		'$route': {
			handler({query}) {
				if ('tab' in query) {
					this.handle_tab_by_url(query.tab)
				}else {
					this.active_tab = 'HQ' //making project HQ default tab
				}
			},
			deep: true,
			immediate: true
		}
	},

	methods: {
		handle_tab_by_url(tab_in_query) {
			const tab_exists = this.tabs.find(tab => tab.name === tab_in_query)
			if (tab_exists) {
				this.active_tab = tab_in_query
			}else {
				this.$router.replace({ name: 'not_found' })
			}
		}
	}

}