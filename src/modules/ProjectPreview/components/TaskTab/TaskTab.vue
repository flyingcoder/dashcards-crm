<template>
	<div class="tasks-tab">
		<h2>Hello</h2>
	</div>
</template>

<script>
	export default {
		name: 'TasksTab',
		props: {
			id: [Number, String]
		},

		created() {
			this.$router.replace({ name: 'project_preview', query: { tab: 'Task' }})
		}
	}
</script>

<style lang="scss" scoped>
	.tasks-tab {

	}
</style>