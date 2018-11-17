<template>
	<div class="tasks-card">
		<dash-card title="Tasks">
			<div class="content-wrapper" slot="content">
					<div class="tasks-items">
						<tasks-content :id="id" />
					</div>
			</div>
		</dash-card>
	</div>
</template>

<script>
	import DashCard from '../../DashCard/DashCard.vue'
	import TasksContent from './TasksContent.vue'

	export default {
		name: 'TasksCard',
		components: {
			DashCard, TasksContent
		},

		props: { id: [Number, String] },

	}
</script>

<style lang="scss" scoped>
	.tasks-card {

	}
</style>