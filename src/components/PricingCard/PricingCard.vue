<template functional>
	<div class="price__card">

		<div class="plan__type"> {{props.card.type}} </div>

		<div class="plan__price">
			<label class="price">{{props.card.price}} <span class="monthly"> /mo </span></label>
			<span class="discount">{{props.card.discount}}</span>
		</div>

		<div class="plan__description">
			<p>{{props.card.description}}</p>
		</div>

		<div class="plan__button">
			<v-btn ref="button" block>
				{{props.card.button}}
			</v-btn>
		</div>

	</div>
</template>

<script>
	export default {
		props: ['card']
	}
</script>

<style lang="scss" scoped src="./PricingCard.scss"></style>