export default {
	name: 'ProjectHQ',

	data: () => ({

	}),

	created() {
		this.$router.replace({ name: 'project_preview', query: { tab: 'HQ' }})
	},

}