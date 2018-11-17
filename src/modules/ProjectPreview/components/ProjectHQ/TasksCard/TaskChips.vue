<template functional>
	<div class="task-chips">
		<v-chip small color="orange" text-color="white">
			<v-avatar class="teal">{{ props.countAll }}</v-avatar>
			All
		</v-chip>

		<v-chip small color="orange" text-color="white">
			<v-avatar class="teal">{{ props.countCompleted }}</v-avatar>
			Completed
		</v-chip>

		<v-chip small color="orange" text-color="white">
			<v-avatar class="teal">{{ props.countPending }}</v-avatar>
			Pending
		</v-chip>

		<v-chip small color="orange" text-color="white">
			<v-avatar class="teal">{{ props.countBehind }}</v-avatar>
			Behind
		</v-chip>
	</div>
</template>

<script>
	export default {
		name: 'TaskChips',
		props: {
			countAll: Number,
			countCompleted: Number,
			countPending: Number,
			countBehind: Number
		}
	}
</script>

<style lang="scss" scoped>
		.task-chips {
			padding: 20px 0;
		}
</style>