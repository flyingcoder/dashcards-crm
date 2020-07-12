<template>
    <div class="price__list">
        <div class="price__card" v-for="price_card in orderedPriceCards" :key="price_card.id">
            <div class="plan__type">{{ price_card.nickname }}</div>
            <div class="plan__price">
                <label class="price">{{ price_card.unit_amount/100 }} <span class="monthly"> /mo </span></label>
                <span class="discount">{{ price_card.metadata.discount_description }}</span>
            </div>
            <div class="plan__description">
                <p class="text-center fullwidth">{{ price_card.metadata.plan_description }}</p>
            </div>
            <div class="plan__button">
                <v-btn ref="button" block @click="$emit('click', price_card)">
                    <span color="primary">Select Plan</span>
                </v-btn>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped src="./PricingCards.scss"></style>
<script>
import _cloneDeep from 'lodash/cloneDeep'
export default {
    name: 'PricingCards',
    props: {
        pricingCards: [Array, Object]
    },
    computed: {
        orderedPriceCards(){
            return _cloneDeep(this.pricingCards).sort(function(a, b) {
                return a.unit_amount - b.unit_amount;
            })
        }
    }
}
</script>
