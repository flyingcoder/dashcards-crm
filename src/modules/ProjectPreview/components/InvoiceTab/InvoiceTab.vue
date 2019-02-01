<template>
	<div class="invoice__tab">

		<create-invoice-dialog
				:open="create_invoice_dialog || edit_invoice_dialog"
				@close="close_dialog"
				@create="create_invoice"
				@edit="edit_invoice"
		/>

		<v-layout row>
			<v-flex xs12 class="text-xs-right">
				<v-btn fab small class="add__btn" @click="add_dialog = true">
				<v-icon>add</v-icon>
				</v-btn>
			</v-flex>
		</v-layout>

		<div class="empty-invoice">
			<div class="empty-content">
				<div class="empty-svg">
					<svg viewBox="0 0 250 250">
						<path d="M37 11l176 0c11,0 20,4 26,11 7,6 11,16 11,26l0 154c0,10 -4,19 -11,26 -2,2 -4,3 -6,5 -17,13 -33,1 -48,-11 -10,-7 -19,-14 -26,-11 -5,2 -9,7 -12,13 -12,18 -31,17 -46,4 -5,-5 -11,-10 -16,-11 -6,-1 -12,4 -19,9 -11,8 -23,17 -39,11 -6,-1 -12,-5 -16,-9 -7,-7 -11,-16 -11,-26l0 -154c0,-10 4,-20 11,-26 6,-7 15,-11 26,-11zm22 108c8,0 15,7 15,15 0,8 -7,15 -15,15 -8,0 -15,-7 -15,-15 0,-8 7,-15 15,-15zm0 -56c8,0 15,7 15,15 0,8 -7,15 -15,15 -8,0 -15,-7 -15,-15 0,-8 7,-15 15,-15zm44 24c-4,0 -7,-4 -7,-8 0,-4 3,-7 7,-7l96 0c4,0 7,3 7,7 0,4 -3,8 -7,8l-96 0zm0 56c-4,0 -7,-4 -7,-8 0,-4 3,-7 7,-7l96 0c4,0 7,3 7,7 0,4 -3,8 -7,8l-96 0zm129 70c2,-3 3,-7 3,-11l0 -154c0,-6 -2,-12 -6,-16 -4,-4 -10,-6 -16,-6l-176 0c-6,0 -12,2 -16,6 -4,4 -6,10 -6,16l0 154c0,6 2,11 6,15 1,2 3,3 4,3 13,8 23,1 32,-6 9,-7 18,-13 30,-12 10,2 17,8 24,15 8,7 17,8 24,-1 4,-8 9,-15 19,-19 14,-6 27,3 39,13 13,10 26,20 39,3z"/>
					</svg>
				</div>
				<div class="empty-btn">
					<v-btn large dark color="#3b589e" @click="create_invoice_dialog = true">Add New Invoice</v-btn>
				</div>
			</div>
		</div>

	</div>
</template>

<script src="./InvoiceTab.js">
</script>
<style lang="scss" scoped src="./InvoiceTab.scss">
</style>
