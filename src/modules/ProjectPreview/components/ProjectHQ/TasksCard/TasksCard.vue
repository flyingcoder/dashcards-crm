<template>
	<div class="tasks-card">
		<dash-card title="Tasks">
			<div class="content-wrapper" slot="content">
				<template v-if="loading">
					<v-progress-linear :indeterminate="true"></v-progress-linear>
					LOADING...
				</template>
				<template v-else>
					<div class="no-data" v-if="tasks_are_empty">
						<h2>No Data</h2>
					</div>
					<div class="tasks-items" v-else>
						<tasks-content :tasks="tasks" />
					</div>
				</template>
			</div>
		</dash-card>
	</div>
</template>

<script>
	import DashCard from '../../DashCard/DashCard.vue'
	import request from '@/services/axios_instance'
	import TasksContent from './TasksContent.vue'

	export default {
		name: 'TasksCard',
		components: {
			DashCard, TasksContent
		},

		props: { id: [Number, String] },

		data: () => ({
			tasks: [],
			loading: false
		}),

		computed: {
			tasks_are_empty() {
				return !this.loading && this.tasks.length === 0
			}
		},

		created() {
			this.loading = true
			request.get('api/projects/' + this.id + '/tasks')
				.then(({data}) => this.tasks = data.data)
				.finally(() => this.loading = false)
		},


	}
</script>

<style lang="scss" scoped>
	.tasks-card {
		.no-data {
			text-align: center;
		}
	}
</style>