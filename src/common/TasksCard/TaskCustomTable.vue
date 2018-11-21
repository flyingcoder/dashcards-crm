<template>
	<div class="task-custom-table">
		<div class="header">
			<div class="col">Assignee</div>
			<div class="col">Project</div>
			<div class="col">Status</div>
		</div>
		<div class="body" :style="{ maxHeight: bodyMaxHeight }">
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
</template>

<script>
	export default {
		name: 'TaskCustomTable',
		props: {
			tasks: Array
		},
		inject: {
			bodyMaxHeight: {
				from: 'bodyMaxHeight',
				default: '200px'
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/sass/variables";

	.task-custom-table {
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
</style>