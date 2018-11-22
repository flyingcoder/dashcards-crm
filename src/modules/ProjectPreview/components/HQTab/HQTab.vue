<template>
	<v-layout row wrap class="hq-tab">
		<project-overview-card :id="id" />
		<timeline-card :id="id" />
		<tasks-card :id="id" />
	</v-layout>
</template>

<script src="./HQTab.js"></script>
<style lang="scss" scoped src="./HQTab.scss"></style>