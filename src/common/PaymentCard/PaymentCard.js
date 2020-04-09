import DashCard from '@/common/DashCard.vue'

export default {
  name: 'PaymentCard',
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
    value: [1, 2, 5, 9, 5, 10, 3, 5],
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    padding: 8,
    width: 2,
    autoLineWidth: true,
    fill: false,
    type: 'bar'
  }),

  methods: {
    expand() {
      this.$router.push({ name: 'expanded-payments' })
    },
    minimize() {
      this.$router.push({ name: 'default-content' })
    }
  }
}
