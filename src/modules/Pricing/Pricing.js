import DashboardLogo from './components/DashboardLogo/DashboardLogo.vue'
import DashboardHeader from './components/DashboardHeader/DashboardHeader.vue'
import PricingCards from './components/PricingCards/PricingCards.vue'

export default {
  components: { DashboardLogo, DashboardHeader, PricingCards },
  data() {
    // TODO review by roland making it functional component
    return {
      pricing_cards: [
        {
          id: 1,
          type: 'Pro',
          price: '$14.99',
          discount: '($290/year - You save $8)',
          description:
            'A limited number of reports to monitor up to 3 locations',
          button: 'SELECT PLAN'
        },
        {
          id: 2,
          type: 'Business',
          price: '$24.99',
          discount: '($290/year - You save $8)',
          description:
            'A limited number of reports to monitor up to 3 locations',
          button: 'SELECT PLAN'
        },
        {
          id: 3,
          type: 'Guro',
          price: '$49.99',
          discount: '($290/year - You save $8)',
          description:
            'A limited number of reports to monitor up to 3 locations',
          button: 'SELECT PLAN'
        },
        {
          id: 4,
          type: 'Enterprise',
          price: 'Need More?',
          discount: '',
          description:
            'A limited number of reports to monitor up to 3 locations',
          button: 'SELECT PLAN'
        }
      ]
    }
  },

  methods: {
    go_to_checkout(price) {
      this.$router.push({ name: 'checkout', params: { price } })
    }
  }
}
