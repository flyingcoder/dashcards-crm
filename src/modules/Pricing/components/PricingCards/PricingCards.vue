<template>
	<div class="price__list">
		<div class="price__card" v-for="price_card in pricingCards" :key="price_card.id">

			<div class="plan__type"> {{price_card.type}}</div>

			<div class="plan__price">
				<label class="price">{{price_card.price}} <span
						class="monthly"> /mo </span></label> <span class="discount">{{price_card.discount}}</span>
			</div>

			<div class="plan__description">
				<p>{{price_card.description}}</p>
			</div>

			<div class="plan__button">
				<v-btn ref="button" block @click="$emit('click', price_card.price)">
					{{price_card.button}}
				</v-btn>
			</div>

		</div>
	</div>
</template>

<script>
export default {
  name: 'PricingCards',
  props: ['pricing-cards']
}
</script>

<style lang="scss" scoped src="./PricingCards.scss">
</style>
