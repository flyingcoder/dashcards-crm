export default {
	name: 'ProjectPreview',

	props: {
		project_id: [Number, String], //from route prop
	},

	data: () => ({
		active_tab: 0,
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

	methods: {},

}