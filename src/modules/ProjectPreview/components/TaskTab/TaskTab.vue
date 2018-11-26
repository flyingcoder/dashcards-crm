<template>
	<v-layout row wrap class="tasks-tab">
		<tasks-card :id="id" />
		<preview-card :id="id" :task="task" />
	</v-layout>
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
		padding: 12px 24px;
	}
	@media only screen and (max-width: 480px){
		.tasks-tab {
			padding: 12px;
		}
	}
</style>