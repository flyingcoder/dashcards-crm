<template>
	<div class="loading" v-if="loading">
		<v-progress-linear :indeterminate="true"></v-progress-linear>
	</div>
	<div class="no-data" v-else-if="tasks_are_empty">
		Nothing to display
	</div>
	<div class="tasks-tab" v-else>

	<task-chips
			:count-all="tasks.length"
			:count-completed="count_completed_tasks"
			:count-pending="count_pending_tasks"
			:count-behind="count_behind_tasks"
	/>

	<task-custom-table
			:tasks="tasks"
	/>

	</div>
</template>

<script>
	import request from '@/services/axios_instance'
	import TaskChips from './TaskChips.vue'
	import TaskCustomTable from './TaskCustomTable.vue'

	export default {
		name: 'TasksTab',
		components: { TaskChips, TaskCustomTable },
		props: {
			id: [Number, String],
			tab: String
		},

		data: () => ({
			tasks: [],
			loading: false
		}),

		computed: {
			tasks_are_empty() {
				return !this.loading && this.tasks.length === 0
			},
			count_completed_tasks() {
				return this.tasks.filter(task => task.status === 'completed').length
			},
			count_pending_tasks() {
				return this.tasks.filter(task => task.status === 'pending').length
			},
			count_behind_tasks() {
				return this.tasks.filter(task => task.status === 'behind').length
			},
		},

		watch: {
			tab: {
				handler(val) {
					this.tab === 'MyTasks' ? this.get_my_tasks() : this.get_all_tasks()
				},
				immediate: true
			}
		},

		methods: {
			get_my_tasks() {
				this.loading = true
				request.get('api/projects/' + this.id + '/tasks/mine')
					.then(({data}) => this.tasks = data.data)
					.finally(() => this.loading = false)
			},
			get_all_tasks() {
				this.loading = true
				request.get('api/projects/' + this.id + '/tasks')
					.then(({data}) => this.tasks = data.data)
					.finally(() => this.loading = false)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tasks-tab {
		max-height: 300x;
		overflow: auto;
	}
</style>