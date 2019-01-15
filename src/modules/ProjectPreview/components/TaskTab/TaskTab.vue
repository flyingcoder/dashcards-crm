<template>
	<div class="tasks-tab">
		<tasks-card :id="id" />
		<preview-card :id="id" :task="task" />
	</div>
</template>

<script src="./TaskTab.js">
</script>
<style lang="scss" scoped src="./TaskTab.scss">
</style>
