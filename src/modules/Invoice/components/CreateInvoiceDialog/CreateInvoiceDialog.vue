<template>
	<div class="create-invoice-dialog">
		<v-layout row justify-center>
			<v-dialog :value="open" fullscreen persist hide-overlay transition="dialog-bottom-transition">

				<dialog-toolbar
						@close="$emit('update:open', false)"
						@send="$emit('send')"
				/>

				<div class="content">

					<info-section />
					<table-section />
					<additional-info-section />

				</div>

			</v-dialog>
		</v-layout>
	</div>
</template>

<script src="./CreateInvoiceDialog.js">
</script>
<style lang="scss" scoped src="./CreateInvoiceDialog.scss">
</style>
