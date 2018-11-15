import { is_screen_medium_and_down } from "@/global_utils/is_screen_medium_and_down";

export default {
	name: 'ProjectPreview',
	mixins: [is_screen_medium_and_down],

	components: {
		HQ: () => import('./components/ProjectHQ/ProjectHQ.vue')
	},

	props: {
		project_id: [Number, String], //from route prop
	},

	data: () => ({
		active_tab: null,
		tabs: [
			{ id: 1, name: 'HQ' },
			{ id: 2, name: 'Files' },
			{ id: 3, name: 'Task' },
			{ id: 4, name: 'Messages' },
			{ id: 5, name: 'Invoice' },
			{ id: 6, name: 'Members' },
			{ id: 7, name: 'Timer' },
			{ id: 8, name: 'Reports' },
		]
	}),

	computed: {
		component() {
			if (this.active_tab !== null) {
				return this.tabs[this.active_tab].name
			}
			return ''
		}
	},
	
	watch: {
		'$route': {
			handler({query}) {
				if ('tab' in query) {
					//TODO a url visited manually in the browser, so get the tab query and load corresponding component
				}else {
					this.active_tab = 0 //making project HQ default tab
				}
			},
			deep: true,
			immediate: true
		}
	}

}