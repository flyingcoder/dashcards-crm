import BlankBoxCard from './BlankBoxCard/BlankBoxCard.vue'

export default {
	name: 'MilestonesTab',
	components: {
		BlankBoxCard
	},

	props: {
		id: [Number, String]
	},

	created() {
		this.$router.replace({ name: 'project_preview', query: { tab: 'Milestones' }})
	},
}