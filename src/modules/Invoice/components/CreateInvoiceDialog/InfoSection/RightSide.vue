<template>
	<div class="right-side">
		<div class="invoice-title">INVOICE</div>
		<div class="invoice-number">
			Invoice Number
			<input type="text" value="3">
		</div>
		<div class="invoice-dates">
			<div class="created-date">
				Date:
				<date-picker label="Select Date" />
			</div>

			<div class="due-date">
				Due Date:
				<date-picker label="Select Date" />
			</div>
		</div>
	</div>
</template>

<script>
	import DatePicker from '@/common/DatePicker.vue'

	export default {
		components: {
			DatePicker
		},
	}
</script>

<style lang="scss" scoped>
	.right-side {
		display: grid;

		.invoice-title {
			width: 200px;
			font-size: 35px;
			color: gray;
			text-align: right;
			width: 100%;
		}

		.invoice-number {
			display: grid;
			grid-auto-flow: column;
			justify-content: end;
			align-items: center;
			grid-gap: 15px;

			> input{
				padding: 10px;
				border: 1px solid grey;
				border-radius: 10px;

			}
		}

		.invoice-dates > div{
			display: grid;
			grid-auto-flow: column;
			justify-content: end;
			align-items: center;
			grid-gap: 15px;
		}
	}
</style>