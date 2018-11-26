import ProjectOverviewCard from './ProjectOverviewCard/ProjectOverviewCard.vue'
import TimelineCard from './TimelineCard/TimelineCard.vue'
import TasksCard from '@/common/TasksCard/TasksCard.vue'

export default {
	name: 'HQTab',
	components: {
		ProjectOverviewCard, TimelineCard, TasksCard
	},

	props: {
		id: [Number, String]
	},

	created() {
		this.$router.replace({ name: 'project_preview', query: { tab: 'HQ' }})
	},

}