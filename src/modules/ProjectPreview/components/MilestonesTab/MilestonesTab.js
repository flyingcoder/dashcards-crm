import DeleteDialog from '@/common/DeleteDialog.vue'
import DynamicBox from './DynamicBox/DynamicBox.vue'
import MilestoneDialog from '@/modules/Milestone/components/MilestoneDialog/MilestoneDialog.vue'
import request from '@/services/axios_instance'

export default {
	name: 'MilestonesTab',
	components: {
		DynamicBox, MilestoneDialog, DeleteDialog
	},

	props: {
		id: [Number, String]
	},

	data: () => ({
		add_dialog: false,
		edit_dialog: false,
		delete_dialog: false,
		boxes: [],
		loading: false,
		direction: 'top',
		is_open_speed_dial: false,
		id_to_delete: null,
		edit_item: {
			id: null,
			fields: null
		},
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
		},

		open_delete_confirmation(id) {
			this.id_to_delete = id
			this.delete_dialog = true
		},

		async delete_milestone() {
			this.loading = true
			this.delete_dialog = false
			await request.delete(`api/project/${this.id}/milestone/${this.id_to_delete}`)
				.then(response => this.boxes = this.boxes.filter(item => item.id !== this.id_to_delete))
				.finally(() => this.loading = false)
			this.$event.$emit('open_snackbar', 'Milestone deleted successfully', 'red', 'success', 3000)
			this.id_to_delete = null
		},

		open_edit_dialog(item_to_edit) {
			const { id, title, status, days } = item_to_edit
			this.edit_item.id = id
			this.edit_item.fields = { title, status, days }
			this.edit_dialog = true
		},

		async update_milestone(updated_fields) {
			this.loading = true
			this.edit_dialog = false
			await request.put(`api/project/${this.id}/milestone/${this.edit_item.id}`, updated_fields)
				.then(({data}) => {
					const index = this.boxes.findIndex(item => item.id === data.id)
					if (~index)
						this.boxes.splice(index, 1, data)
				})
				.finally(() => this.loading = false)
			this.$event.$emit('open_snackbar', 'Milestone updated successfully', 'red', 'success', 3000)
			this.edit_item = {
				id: null,
				fields: null
			}
		}

	}
}