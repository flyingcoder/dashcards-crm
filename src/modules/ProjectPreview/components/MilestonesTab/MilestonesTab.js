import DynamicBox from './DynamicBox/DynamicBox.vue'
import request from '@/services/axios_instance'

export default {
	name: 'MilestonesTab',
	components: {
		DynamicBox
	},

	props: {
		id: [Number, String]
	},

	data: () => ({
		boxes: [],
		loading: false,
		direction: 'top',
		is_open_speed_dial: false,
	}),

	created() {
		this.$router.replace({ name: 'project_preview', query: { tab: 'Milestones' }})
		this.loading = true
		request.get(`api/project/${this.id}/milestone`)
			.then(({data}) => this.boxes = data.data)
			.finally(() => this.loading = false)
	},
}