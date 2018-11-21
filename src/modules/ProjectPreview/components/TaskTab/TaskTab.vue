<template>
	<div class="tasks-tab">
		<tasks-card :id="id" />
	</div>
</template>

<script>
	import TasksCard from '@/common/TasksCard/TasksCard.vue'

	export default {
		name: 'TasksTab',
		components: {
			TasksCard
		},
		props: {
			id: [Number, String]
		},

		provide: {
			bodyMaxHeight: '700px'
		},

		created() {
			this.$router.replace({ name: 'project_preview', query: { tab: 'Task' }})
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