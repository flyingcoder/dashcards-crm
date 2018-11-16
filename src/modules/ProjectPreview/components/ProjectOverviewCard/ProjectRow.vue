<template functional>
	<div class="row">
		<div class="col">{{ props.col1 }}</div>
		<div class="col">{{ props.col2 }}</div>
	</div>
</template>

<script>
	export default {
		name: 'ProjectRow',
		functional: true,
		props: {
			col1: String,
			col2: [String, Number]
		}
	}
</script>

<style lang="scss" scoped>
	.row {
		display: grid;
		grid-template-columns: 1fr 1fr;

		.col {
			padding: 20px;
			border: 1px solid;
			text-align: center;
		}
	}
</style>