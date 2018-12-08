<template>
	<div class="create-invoice-dialog">
		<v-layout row justify-center>
			<v-dialog :value="open" fullscreen persist hide-overlay transition="dialog-bottom-transition">

				<dialog-toolbar @close="$emit('update:open', false)"
				                @send=""
				/>
				<div class="content">

					<info-section />

					<table-section />

					<div class="third-row additional-info-section">

						<div class="left-side">
							<div class="notes">
								Notes
								<v-textarea label="Notes - any revelant information not already covered" />
							</div>
							<div class="Terms">
								Notes
								<v-textarea label="Terms and conditions - late fees, payment methods, delivery schedule" />
							</div>
						</div>

						<div class="right-side">
							<h3>Subtotal {{ subtotal }} </h3>
							<div class="discount field" v-show="show_discount">
								Discounts
								<v-text-field v-model="discount">
									<v-tooltip slot="prepend" bottom>
										<v-btn slot="activator" icon @click="toggle_field('discount_symbol')">
											<v-icon>compare_arrows</v-icon>
										</v-btn>

										Toggle discount
									</v-tooltip>
									<template slot="append">
										<span slot="activator">{{ discount_symbol }}</span>
									</template>
								</v-text-field>
								<v-btn icon @click="show_discount = !show_discount">
									<v-icon>delete</v-icon>
								</v-btn>
							</div>
							<div class="tax field" v-show="show_tax">
								Tax
								<v-text-field v-model="tax">
									<v-tooltip slot="prepend" bottom>
										<v-btn slot="activator" icon @click="toggle_field('tax_symbol')">
											<v-icon>compare_arrows</v-icon>
										</v-btn>

										Toggle tax
									</v-tooltip>
									<template slot="append">
										<span slot="activator">{{ tax_symbol }}</span>
									</template>
								</v-text-field>
								<v-btn icon @click="show_tax = !show_tax">
									<v-icon>delete</v-icon>
								</v-btn>
							</div>
							<div class="shipping field" v-show="show_shipping">
								Shipping
								<v-text-field label="Shipping" v-model="shipping"></v-text-field>
								<v-btn icon @click="show_shipping = !show_shipping">
									<v-icon>delete</v-icon>
								</v-btn>
							</div>
							<div class="fields-to-add">
								<v-btn class="btn"
								       v-show="!show_discount"
								       @click="show_discount = !show_discount">
									+ Discount
								</v-btn>
								<v-btn class="btn"
								       v-show="!show_tax"
								       @click="show_tax = !show_tax">
									+ Tax
								</v-btn>
								<v-btn class="btn"
								       v-show="!show_shipping"
								       @click="show_shipping = !show_shipping">
									+ Shipping
								</v-btn>
							</div>
							Total {{ total }}
						</div>
					</div>

				</div>

			</v-dialog>
		</v-layout>
	</div>
</template>

<script src="./CreateInvoiceDialog.js"></script>
<style lang="scss" scoped src="./CreateInvoiceDialog.scss"></style>