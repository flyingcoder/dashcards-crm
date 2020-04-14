import DashCard from '@/common/DashCard.vue'
import { global_utils } from '@/global_utils/global_utils'
export default {
  name: 'PaymentCard',
  mixins: [global_utils],
  components: {
    DashCard
  },

  props: {
    id: [Number, String],
    viewMoreLink: Object,
    dashboard: Boolean,
    md: { type: Number, default: 6 }
  },

  data: () => ({
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    padding: 8,
    width: 2,
    autoLineWidth: true,
    fill: false,
    type: 'bar',
    total_earnings: `$` + (Math.random() * (959 - 1) + 1).toFixed(0),
    completed: (Math.random() * (99 - 1) + 1).toFixed(0),
    remaining: (Math.random() * (99 - 1) + 1).toFixed(0)
  }),
  computed: {
    value() {
      return this.generate_random(8, 1, 10)
    }
  },
  methods: {
    expand() {
      this.$router.push({ name: 'expanded-payments' })
    },
    minimize() {
      this.$router.push({ name: 'default-content' })
    }
  }
}
