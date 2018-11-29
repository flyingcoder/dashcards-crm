<template>
	<div class="hours__box">
		<div class="box1 box"><v-icon small color="white">pause</v-icon></div>
		<div class="box2 box">{{ get_hours(content.total_time) }} <span>HR</span></div>
		<div class="box3 box">{{ get_mins(content.total_time) }} <span>M</span></div>
		<div class="box4 box">{{ get_secs(content.total_time) }} <span>S</span></div>
	</div>
</template>

<script>
	export default {
		name: 'HoursBox',

		props: {
			content: Object
		},

		methods: {
			get_hours(time) { return time.split(':')[0] },
			get_mins(time) { return time.split(':')[1] },
			get_secs(time) { return time.split(':')[2] },
		}

	}
</script>

<style lang="scss" scoped>
	@import "~@/sass/variables";

	.hours__box {
		display: flex;
		align-items: center;
		border: 1px solid $tableBorderBlue;
		border-radius: 5px;

		.box {
			padding: 0 10px;
		}

		.box1 {
			background: $red;
			padding: 13px 10px;
			cursor: pointer;
			border-top-left-radius: 5px;
			border-bottom-left-radius: 5px;
		}
		.box {
			display: grid;
			position: relative;
			z-index : 1;
		}
		.box:not(:last-child):not(:first-child):before {
			content : "";
			position: absolute;
			right: 0;
			top: 10px;
			height  : 25px;
			border-right:1px solid $tableBorderBlue;
		}
	}

</style>