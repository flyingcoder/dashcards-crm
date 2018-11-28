<template>
	<div class="invoice">
		<table-header :paths="paths" />

		<div class="invoice-container">
			<v-btn>Add New Invoice</v-btn>
		</div>

	</div>
</template>

<script src="./Invoice.js"></script>
<style lang="scss" scoped>
	.invoice {
		padding: 15px;

		.invoice-container {
			height: 450px;
			background: gainsboro;
			display: flex;
			justify-content: center;
			align-items: center;
		}

	}
</style>