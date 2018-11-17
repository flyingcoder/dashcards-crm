<template>
	<div class="project-hq">
		<project-overview-card :id="id" />
		<timeline-card :id="id" />
		<tasks-card :id="id" />
	</div>
</template>

<script src="./ProjectHQ.js"></script>
<style lang="scss" scoped src="./ProjectHQ.scss"></style>