<template>
	<div class="create-invoice-dialog">
		<v-layout row justify-center>
			<v-dialog :value="open" fullscreen persist hide-overlay transition="dialog-bottom-transition">

				<div class="dialog">
					<v-toolbar dark color="indigo" height="60">
						<v-btn icon dark @click="$emit('update:open', false)">
							<v-icon>close</v-icon>
						</v-btn>
						<v-toolbar-title>Create new Invoice</v-toolbar-title>
						<v-spacer></v-spacer>
						<v-toolbar-items>
							<v-btn dark flat>Send Invoice</v-btn>
						</v-toolbar-items>
					</v-toolbar>
				</div>

				<div class="content">
					<div class="first-row info-section">
						<div class="left-side">

							<div class="add-logo-box">
								+ Add Your Logo
							</div>

							<div class="bill-from">
								<v-textarea label="Who is this invoice from"></v-textarea>
							</div>

							<div class="bill-to">
								<v-text-field label="Who is this invoice to"></v-text-field>
							</div>


						</div>
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
					</div>

					<div class="second-row table-section">

						<div class="table-headers">
							<div class="column">Description</div>
							<div class="column">Rate</div>
							<div class="column">Hours</div>
							<div class="column">Amount</div>
						</div>

						<div class="table-body">

							<div class="active row">
								<v-text-field label="Descriptions" v-model.trim="active_row.descriptions" />
								<v-text-field min="0" type="number" label="Rate" v-model.trim.number="active_row.rate" />
								<v-text-field min="0" type="number" label="Hours" v-model.trim.number="active_row.hours" />
								<v-text-field label="Amount" :value="calculate_amount(active_row)" readonly />
								<v-btn outline icon :disabled="should_disable" @click="add_new_row">
									<v-icon>add</v-icon>
								</v-btn>
							</div>

							<div class="row" v-for="(row, index) of rows" :key="index">
								<v-text-field label="Descriptions" v-model.trim="row.descriptions" />
								<v-text-field min="0" type="number" label="Rate" @change="row_updated(row, index)" v-model.trim.number="row.rate" />
								<v-text-field min="0" type="number" label="Hours" @change="row_updated(row, index)" v-model.trim.number="row.hours" />
								<v-text-field label="Amount" v-model="row.amount" readonly />
								<v-btn icon @click="delete_row(index)">
									<v-icon>delete</v-icon>
								</v-btn>
							</div>

						</div>

					</div>

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
								<v-text-field>
									<v-tooltip slot="prepend" bottom>
										<v-btn slot="activator" icon @click="toggle_field('discount')">
											<v-icon>compare_arrows</v-icon>
										</v-btn>

										Toggle discount
									</v-tooltip>
									<template slot="append">
										<span slot="activator">{{ discount }}</span>
									</template>
								</v-text-field>
								<v-btn icon @click="show_discount = !show_discount">
									<v-icon>delete</v-icon>
								</v-btn>
							</div>
							<div class="tax field" v-show="show_tax">
								Tax
								<v-text-field>
									<v-tooltip slot="prepend" bottom>
										<v-btn slot="activator" icon @click="toggle_field('tax')">
											<v-icon>compare_arrows</v-icon>
										</v-btn>

										Toggle tax
									</v-tooltip>
									<template slot="append">
										<span slot="activator">{{ tax }}</span>
									</template>
								</v-text-field>
								<v-btn icon @click="show_tax = !show_tax">
									<v-icon>delete</v-icon>
								</v-btn>
							</div>
							<div class="shipping field" v-show="show_shipping">
								Shipping
								<v-text-field label="Shipping"></v-text-field>
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
							Total $0.00
						</div>
					</div>

				</div>

			</v-dialog>
		</v-layout>
	</div>
</template>

<script src="./CreateInvoiceDialog.js"></script>
<style lang="scss" scoped src="./CreateInvoiceDialog.scss"></style>