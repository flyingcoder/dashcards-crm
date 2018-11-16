import ProjectOverviewCard from '../ProjectOverviewCard/ProjectOverviewCard.vue'

export default {
	name: 'ProjectHQ',
	components: {
		ProjectOverviewCard
	},

	props: {
		id: [Number, String]
	},

	created() {
		this.$router.replace({ name: 'project_preview', query: { tab: 'HQ' }})
	},

}