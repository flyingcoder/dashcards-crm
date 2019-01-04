<template>
	<div class="create-invoice-dialog">
		<v-layout row justify-center>
			<v-dialog :value="open" fullscreen persist hide-overlay transition="dialog-bottom-transition">

				<dialog-toolbar
						@close="$emit('close', false)"
						@create="$emit('create')"
						@edit="$emit('edit')"
						:disabled="!can_create_invoice"
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
