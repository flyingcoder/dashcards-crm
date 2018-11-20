<template>
	<div class="hq-tab">
		<project-overview-card :id="id" />
		<timeline-card :id="id" />
		<tasks-card :id="id" />
	</div>
</template>

<script src="./HQTab.js"></script>
<style lang="scss" scoped src="./HQTab.scss"></style>