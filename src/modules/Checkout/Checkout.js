import makeRequestTo from '@/services/makeRequestTo'

// Create a Stripe client.
// eslint-disable-next-line
const stripe = Stripe(process.env.VUE_APP_STRIPE_API)
// Create an instance of Elements.
let elements = stripe.elements()

// Custom styling can be passed to options when creating an Element.
// (Note that this demo uses a wider set of styles than the guide below.)
let style = {
  base: {
    color: '#32325d',
    lineHeight: '18px',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
}

export default {
  name: 'Checkout',
  props: {
    price: {
      default: null
    }
  },

  data: () => ({
    card: null
  }),

  created() {
    //TODO move functionality to beforeRouteEnter hook
    if (!this.price) this.$router.replace({ name: 'not_found' })
  },

  mounted() {
    this.card = elements.create('card', { style: style })
    this.card.mount('#card-element')

    // Handle real-time validation errors from the card Element.
    this.card.addEventListener('change', function(event) {
      let displayError = document.getElementById('card-errors')
      if (event.error) {
        displayError.textContent = event.error.message
      } else {
        displayError.textContent = ''
      }
    })
  },

  beforeDestroy() {
    delete this.$options.components.Checkout
  },

  methods: {
    submit_payment() {
      stripe.createToken(this.card).then(function(result) {
        if (result.error) {
          // Inform the user if there was an error.
          let errorElement = document.getElementById('card-errors')
          errorElement.textContent = result.error.message
        } else {
          // Send the token to your server.
          console.log(result.token)
          makeRequestTo.checkout(result.token.id).then(response => {
            console.log(response)
          })
        }
      })
    }
  }
}
