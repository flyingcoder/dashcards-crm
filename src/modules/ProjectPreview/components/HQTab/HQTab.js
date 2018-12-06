import TasksCard from '@/common/TasksCard/TasksCard.vue'
import TimelineCard from '@/common/TimelineCard/TimelineCard.vue'
import ProjectOverviewCard from './ProjectOverviewCard/ProjectOverviewCard.vue'
import InvoiceTable from './InvoiceTable/InvoiceTable.vue'

export default {
	name: 'HQTab',
	components: {
		ProjectOverviewCard, TimelineCard, TasksCard, InvoiceTable
	},

	props: {
		id: [Number, String]
	},

	data: () => ({
		taskPath: { name: 'project_preview', query: { tab: 'Task' } }
	}),

	created() {
		this.$router.replace({ name: 'project_preview', query: { tab: 'HQ' }})
	},

}