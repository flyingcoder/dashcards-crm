<template>
	<div class="my-tasks">
		<div class="chips">
			<v-chip small color="orange" text-color="white">
				<v-avatar class="teal">{{ this.tasks.length }}</v-avatar>
				All
			</v-chip>

			<v-chip small color="orange" text-color="white">
				<v-avatar class="teal">{{ count_completed_tasks }}</v-avatar>
				Completed
			</v-chip>

			<v-chip small color="orange" text-color="white">
				<v-avatar class="teal">{{ count_pending_tasks }}</v-avatar>
				Pending
			</v-chip>

			<v-chip small color="orange" text-color="white">
				<v-avatar class="teal">{{ count_behind_tasks }}</v-avatar>
				Behind
			</v-chip>
		</div>
		<div class="custom-table">
			<div class="header">
				<div class="col">Assignee</div>
				<div class="col">Project</div>
				<div class="col">Status</div>
			</div>
			<div class="body">
				<div class="row" v-for="task in tasks" :key="tasks.id">
					<div class="assignee-col">
						<v-img :src="require('@/assets/temp/user.png')" height="40" width="40" />
					</div>
					<div class="project-col">
						{{ task.description.length > 25 ? task.description.slice(0, 40) : task.description }}
					</div>
					<div class="status-col">
						{{task.status}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MyTasks',
		props: {
			tasks: {
				type: Array,
				default: () => []
			}
		},
		computed: {
			count_completed_tasks() {
				return this.tasks.filter(task => task.status === 'completed').length
			},
			count_pending_tasks() {
				return this.tasks.filter(task => task.status === 'pending').length
			},
			count_behind_tasks() {
				return this.tasks.filter(task => task.status === 'behind').length
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/sass/variables";

	.my-tasks {
		max-height: 300x;
		overflow: auto;
		.chips {
			padding: 20px 0;
		}
		.custom-table {
			border: 1px solid grey;
			.header {
				display: grid;
				grid-template-columns: 1fr 3fr 1fr;
				border-bottom: 1px solid grey;
				.col {
					padding: 10px;
				}
			}

			@include styledScrollFor('.body'); //style the scroll

			.body {
				max-height: 200px;
				overflow: auto;
				.row {
					display: grid;
					grid-template-columns: 1fr 3fr 1fr;
					border-bottom: 1px solid gray;
					grid-gap: 5px;
					padding: 10px;
				}
			}
		}
	}
</style>