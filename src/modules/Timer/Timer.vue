<template>
	<div class="timer">

		<table-header :paths="paths" @click="add_dialog = true"/>

		<custom-table
				:headers="headers"
				:items="items"
				:loading="loading"
				:sort="sort"
				:has-checkbox="true"
				hide-actions
				@items-selected="selected_ids = $event"
				@sorted="changeSort"
		>

		</custom-table>

	</div>
</template>

<script src="./Timer.js"></script>
<style lang="scss" scoped>
	.timer {
		padding: 15px;
	}
</style>