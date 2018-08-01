// Create a Stripe client.
const stripe = Stripe('pk_test_IaFgoMQAWbVsxO7GjyW5OhJY');

// Create an instance of Elements.
let elements = stripe.elements();

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
};

export default {
	data: () => ({
		card: null
	}),

	mounted() {
		this.card = elements.create('card', {style: style});
		this.card.mount('#card-element');

		// Handle real-time validation errors from the card Element.
		this.card.addEventListener('change', function(event) {
		let displayError = document.getElementById('card-errors');
			if (event.error) {
				displayError.textContent = event.error.message;
			} else {
				displayError.textContent = '';
			}
		});

	},

	methods: {
		submit_payment() {
			stripe.createToken(this.card).then(function(result) {
				if (result.error) {
					// Inform the user if there was an error.
					let errorElement = document.getElementById('card-errors');
					errorElement.textContent = result.error.message;
				} else {
					// Send the token to your server.
					stripeTokenHandler(result.token);
				}
			});
		}
	}
}