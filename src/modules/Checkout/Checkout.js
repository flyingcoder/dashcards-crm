import makeRequestTo from '@/services/makeRequestTo'
import {settings} from '@/variables.js'
import {mapGetters} from 'vuex'
// Create a Stripe client.
// eslint-disable-next-line
const stripe = Stripe(settings.stripe.pub_key)
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
        plan: {
            default: null
        }
    },

    data: () => ({
        card: null,
        submitting: false
    }),

    computed: {
        ...mapGetters(['global_configs']),
        appProduct() {
            return this.global_configs.stripe_app_plan
        },
        price() {
            return this.plan.unit_amount / 100
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            if (!vm.plan) next({name: 'not_found'})
            else next()
        })
    },

    mounted() {
        this.card = elements.create('card', {style: style})
        this.card.mount('#card-element')

        // Handle real-time validation errors from the card Element.
        this.card.addEventListener('change', function (event) {
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
        back_to_pricing() {
            this.card.destroy(this.$refs.checkout);
            this.$router.push({name: 'pricing'})
        },
        submit_payment() {
            var _this = this
            _this.submitting = true
            stripe.createToken(this.card)
                .then(function (result) {
                    if (result.error) {
                        let errorElement = document.getElementById('card-errors')
                        errorElement.textContent = result.error.message
                    } else {
                        makeRequestTo.checkout({token: result.token.id, plan: _this.plan.id})
                            .then(response => {
                                if (response.status === 200) {
                                    _this.$store.dispatch('fetchUser')
                                    _this.$event.$emit('open_snackbar', 'Successfully subscribed to ' + _this.plan.nickname, 'success')
                                    _this.$router.push({name: 'default-content'})
                                } else {
                                    _this.$event.$emit('open_snackbar', response.statusText, 'error')
                                }
                            })
                    }
                })
                .finally(() => _this.submitting = false)
        }
    }
}