<template>
	<div class="right-side">

		<h3>Subtotal {{ subtotal }} </h3>

		<field title="Tax"
		       symbol-type="tax_symbol"
		       :symbol="tax_symbol"
		       v-model="tax"
		       :classes="['tax', 'field']"
		       :show.sync="show_tax"
		       @toggle-symbol="toggle_field"
		/>

		<field title="Discount"
		       symbol-type="discount_symbol"
		       :symbol="discount_symbol"
		       v-model="discount"
		       :classes="['discount', 'field']"
		       :show.sync="show_discount"
		       @toggle-symbol="toggle_field"
		/>

		<field no-symbol
		       title="Shipping"
		       v-model.number="shipping"
		       :classes="['shipping', 'field']"
		       :show.sync="show_shipping"
		/>

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
</template>

<script src="./RightSide.js"></script>
<style lang="scss" scoped src="./RightSide.scss"></style>