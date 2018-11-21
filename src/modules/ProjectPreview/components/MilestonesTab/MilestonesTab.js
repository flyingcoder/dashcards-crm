import DynamicBox from './DynamicBox/DynamicBox.vue'
import MilestoneDialog from '@/modules/Milestone/components/MilestoneDialog/MilestoneDialog.vue'
import request from '@/services/axios_instance'

export default {
	name: 'MilestonesTab',
	components: {
		DynamicBox, MilestoneDialog
	},

	props: {
		id: [Number, String]
	},

	data: () => ({
		add_dialog: false,
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
	
	methods: {
		async add_new_milestone(milestone) {
			this.loading = true
			this.$refs.add_dialog.clear_and_close()
			await request.post(`api/project/${this.id}/milestone`, milestone)
				.then(({data}) => this.boxes.push(data))
				.finally(() => this.loading = false)
			this.$event.$emit('open_snackbar', 'New Milestone added successfully', 'red', 'success', 3000)
		}
	}
}