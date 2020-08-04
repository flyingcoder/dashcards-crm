import DashboardLogo from './components/DashboardLogo/DashboardLogo.vue'
import DashboardHeader from '@/modules/Dashboard/components/DashboardHeader/DashboardHeader.vue'
import PricingCards from './components/PricingCards/PricingCards.vue'
import { mapGetters } from 'vuex'
export default {
    components: { DashboardLogo, DashboardHeader, PricingCards },
    data: () => ({
        paths: [
            { text: 'Dashboard', disabled: false, route: {name: 'default-content'}},
            { text: 'Pricing', disabled: true, router_name: null }
        ],
    }),
    computed: {
        ...mapGetters(['global_configs']),
        pricing_cards() {
            if (!this.global_configs.stripe_app_plan) {
                return []
            }
            return this.global_configs.stripe_app_plan.plans
        }
    },
    mounted(){
        this.$event.$emit('path-change', this.paths)
    },
    methods: {
        go_to_checkout(price_card) {
            this.$router.push({ name: 'checkout', params: { price: price_card.unit_amount / 100, plan: price_card } })
        }
    }
}