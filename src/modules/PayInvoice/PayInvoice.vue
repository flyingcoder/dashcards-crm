<template>
    <div class="pay-invoice">
        <div class="pay-invoice-wrapper">
            <v-card flat class="ma-2 pay-invoice-content">
                <v-card-title>
                    Pay Invoice #INV-{{invoice_id}}
                </v-card-title>
                <v-progress-linear v-if="loading" height="10" indeterminate></v-progress-linear>
                <v-card-text>
                    <v-row>
                        <v-col md="6">
                            <v-card :loading="loading" v-if="invoice" class="mx-auto">
                                <v-card-title class="subtitle-2">
                                    {{ invoice.title | ucwords }}
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text>
                                    <div>Billed From : {{ invoice.billed_from.fullname | ucwords }} <br>
                                        Billed To : {{invoice.billed_to.fullname | ucwords }} <br>
                                        Billed Date : {{invoice.date }} <br>
                                        Due Date : {{invoice.due_date }}
                                    </div>
                                </v-card-text>
                                <v-card-subtitle>Items:</v-card-subtitle>
                                <v-card-text>
                                    <v-row no-gutters>
                                        <v-col>Description</v-col>
                                        <v-col md="2" class="text-center">Rate</v-col>
                                        <v-col md="2" class="text-center">Hours</v-col>
                                        <v-col md="2" class="text-center">Amount</v-col>
                                    </v-row>
                                    <v-divider class="mb-3"></v-divider>
                                    <v-row no-gutters class="mb-3" v-for="(item, index) in items" :key="index">
                                        <v-col>{{item.descriptions}}</v-col>
                                        <v-col md="2" class="text-center">{{item.rate}}</v-col>
                                        <v-col md="2" class="text-center">{{item.hours}}</v-col>
                                        <v-col md="2" class="text-center">{{item.amount | money}}</v-col>
                                    </v-row>
                                    <v-row no-gutters>
                                        <v-col>Tax</v-col>
                                        <v-col md="2" class="text-center">{{ invoice.tax }}</v-col>
                                    </v-row>
                                    <v-row no-gutters>
                                        <v-col>Discount</v-col>
                                        <v-col md="2" class="text-center">{{ invoice.discount }}</v-col>
                                    </v-row>
                                    <v-row no-gutters>
                                        <v-col>Shipping</v-col>
                                        <v-col md="2" class="text-center">{{ invoice.shipping }}</v-col>
                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row no-gutters class="mt-3">
                                        <v-col>Total Amount</v-col>
                                        <v-col md="2" class="text-center">{{ invoice.total_amount | money }}</v-col>
                                    </v-row>
                                </v-card-text>
                                <v-card-text>
                                    <v-row no-gutters>
                                        <v-col md="2">Notes :</v-col>
                                        <v-col>{{ invoice.notes }}</v-col>
                                    </v-row>
                                    <v-row no-gutters>
                                        <v-col md="2">Terms :</v-col>
                                        <v-col>{{ invoice.terms }}</v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                            <v-alert type="error" outlined v-else-if="!loading">No Invoice found!</v-alert>
                        </v-col>
                        <v-col md="6">
                            <v-card flat class="mx-auto pa-5" v-if="invoice && invoice.status === 'paid'">
                                <v-alert type="success" outlined>Invoice Paid!</v-alert>
                            </v-card>
                            <v-card class="mx-auto pa-5" v-else-if="paymentIntent && can_pay_to_biller">
                                <v-card-title>
                                    <h4 class="mb-5">Pay with card</h4>
                                </v-card-title>
                                <stripe-elements v-show="!loading" ref="elementsRef" :pk="publishableKey" :amount="paymentIntent.amount" @token="confirmCardPayment" :stripeAccount="stripeAccount" @loading="loading = $event">
                                </stripe-elements>
                                <v-btn large class="white--text" color="#3b589e" :disabled="submitting" block @click="submit" v-show="!loading">Pay ${{ paymentIntent.amount / 100}}</v-btn>
                                <v-card-actions class="mt-5">
                                    <a class="caption" href="https://stripe.com/" style="text-decoration: none;color:grey;" target="_blank">Powered by <b>Stripe</b></a>
                                </v-card-actions>
                            </v-card>
                            <v-card flat class="mx-auto pa-5" v-else-if="!paymentIntent && !can_pay_to_biller">
                                <v-card-text>
                                    <v-alert outlined type="error">Cannot proceed to payment!</v-alert>
                                    <v-alert v-if="!billedFromSelf" outlined type="info">User <b>{{invoice.billed_from.fullname}}</b> cannot yet accept payment.</v-alert>
                                    <v-alert v-if="billedFromSelf" outlined type="info">
                                        <p>Connect your Stripe Account to accept payment.</p>
                                        <v-btn text :href="stripeConnect" outlined class="mx-auto">Connect with Stripe</v-btn>
                                    </v-alert>
                                </v-card-text>
                            </v-card>
                            <v-card flat class="mx-auto pa-5" v-else-if="!paymentIntent && billedToSelf">
                                <v-btn text :href="stripeConnect" outlined class="mx-auto">Connect with Stripe</v-btn>
                            </v-card>
                            <v-alert type="error" outlined v-else-if="!loading">{{ errorMessage }}</v-alert>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '~@/sass/_variables';
@include pagePadding('.pay-invoice');

.pay-invoice {
    .pay-invoice-wrapper {
        margin: 10px;
        background-color: $white;
        border: 1px solid $tableBorderBlue;
        border-radius: 10px;
        padding: 10px;

        .pay-invoice-content {
            background-color: $tableBlueBg;
            border: 1px solid $tableBorderBlue;
            padding: 10px;
        }
    }
}
</style>
<script>
import { settings } from '@/variables'
import request from '@/services/axios_instance'
//components
import { StripeElements } from 'vue-stripe-checkout';

export default {
    name: 'PayInvoice',
    components: {
        StripeElements
    },
    data: () => ({
        loading: false,
        publishableKey: settings.stripe.pub_key,
        stripeAccount: null,
        token: null,
        charge: null,
        invoice_id: null,
        invoice: null,
        paymentIntent: null,
        errorMessage: null,
        submitting: false
    }),

    mounted() {
        this.invoice_id = this.$route.params.id
        this.getPaymentIntent();
    },
    computed: {
        items() {
            return JSON.parse(this.invoice.items)
        },
        user() {
            return this.$store.getters.user
        },
        billedToSelf() {
            return this.invoice && this.invoice.billed_to.id === this.user.id
        },
        stripeConnect() {
            return `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${settings.stripe.client_id}&scope=read_write&redirect_uri=${settings.stripe.redirect_uri}`
        },
        can_pay_to_biller() {
            return this.invoice && this.invoice.billed_from.stripe_id
        },
        billedFromSelf() {
            return this.invoice && this.invoice.billed_from.id === this.user.id
        }
    },
    methods: {
        getPaymentIntent() {
            this.loading = true
            request.get(`api/stripe/payment-intent/${this.invoice_id}`)
                .then(({ data }) => {
                    if (data.message) {
                        this.errorMessage = data.message
                    } else {
                        this.paymentIntent = data.payment_intent
                        this.stripeAccount = data.stripe_account
                    }
                    if (data.invoice) {
                        this.invoice = data.invoice
                    }
                })
                .finally(() => this.loading = false)
        },
        submit() {
            this.$refs.elementsRef.submit();
        },
        connectToStripe() {
            this.$router.push({ name: 'cloud' })
        },

        confirmCardPayment() {

            let card = this.$refs.elementsRef.card
            // console.log(card, `${this.paymentIntent.client_secret}`)
            this.$refs.elementsRef.stripe.confirmCardPayment(`${this.paymentIntent.client_secret}`, {
                    payment_method: {
                        card: card,
                        billing_details: {
                            name: this.user.fullname,
                        }
                    },
                })
                .then((result) => {
                    if (result.error) {
                        // Show error to your customer (e.g., insufficient funds)
                        this.$event.$emit('open_snackbar', result.error.message, 'error');
                    } else {
                        // The payment has been processed!
                        if (result.paymentIntent.status === 'succeeded') {
                            // There's a risk of the customer closing the window before callback
                            // execution. Set up a webhook or plugin to listen for the
                            // payment_intent.succeeded event that handles any business critical
                            // post-payment actions. @kirby: webhook added on BE to update the invoice status
                            this.invoice.status = 'paid'
                            this.$event.$emit('open_snackbar', 'Successfully paid!')
                        }
                    }
                })
                .finally(() => {
                    this.submitting = false
                })
        }
    }
}
</script>