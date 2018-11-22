<template>
	<div class="tasks-tab">
		<tasks-card :id="id" />
		<preview-card :id="id" :task="task" />
	</div>
</template>

<script>
	import TasksCard from '@/common/TasksCard/TasksCard.vue'
	import PreviewCard from './TaskTabPreviewCard/TaskTabPreviewCard.vue'

	export default {
		name: 'TasksTab',
		components: {
			TasksCard, PreviewCard
		},
		props: {
			id: [Number, String]
		},

		provide: {
			bodyMaxHeight: '700px'
		},

		data: () => ({
			task: null
		}),

		created() {
			this.$router.replace({ name: 'project_preview', query: { tab: 'Task' }})
			this.$event.$on('task-row-clicked', data_from_child => this.task = data_from_child)
		},
		beforeDestroy() {
			this.$event.$off('task-row-clicked')
		}
	}
</script>

<style lang="scss" scoped>
	.tasks-tab {
		display: grid;
		grid-template-columns: repeat(2, 500px);
		grid-gap: 20px;
		padding: 20px 30px;
	}
</style>