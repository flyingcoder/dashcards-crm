<template functional>
	<div class="task__chips text-xs-center">
		<v-chip small class="task__chip">
			<v-avatar class="task__avatar">{{ props.countAll }}</v-avatar>
			All
		</v-chip>

		<v-chip small class="task__chip">
			<v-avatar class="task__avatar">{{ props.countCompleted }}</v-avatar>
			Completed
		</v-chip>

		<v-chip small class="task__chip">
			<v-avatar class="task__avatar">{{ props.countPending }}</v-avatar>
			Pending
		</v-chip>

		<v-chip small class="task__chip">
			<v-avatar class="task__avatar">{{ props.countBehind }}</v-avatar>
			Behind
		</v-chip>

		<v-chip small class="task__chip">
			<v-avatar class="task__avatar">{{ props.countOpen }}</v-avatar>
			Open
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
			countBehind: Number,
			countOpen: Number,
		}
	}
</script>

<style lang="scss" scoped>
@import '~@/sass/_variables';
	.task__chips {
		padding: 20px 0;
		border-bottom: 1px solid $borderGray;
		.theme--light.v-chip{
			background-color: $white;
			border-color: $borderGray;
			font-size: 12px;
			font-weight: 500;
			color: $chipGray;
		}
		.task__avatar{
			background-color: $chipGray;
			border-color: $chipGray;
			color: $white;
			font-size: 12px;
			font-weight: 500;
		}
		.v-chip--active, .v-chip--selected, .v-chip:focus:not(.v-chip--disabled){
			background-color: $chipDark;
			border-color:$chipDark;
			color: $white;
			.task__avatar{
				background-color: $chipBlue;
				border-color: $chipBlue;
			}
		}
	}
</style>
<style scoped>
>>> .task__chip .v-chip__content{
	cursor: pointer;
}
</style>
