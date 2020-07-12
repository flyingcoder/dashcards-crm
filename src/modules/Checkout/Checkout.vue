<template>
    <div class="checkout" v-if="price" ref="checkout">
        <div class="payment__container">
            <v-card class="mb-3" flat>
                <v-card-text>
                    <v-img :src="appProduct.images[1]" width="300px" class="mx-auto" tile></v-img>
                </v-card-text>
                <v-card-title>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="headline text-center">You are going to pay <h1>{{ price }} {{plan.currency | uppercase}}</h1> for {{plan.nickname}} subscription</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-card-title>
            </v-card>
            <form id="payment-form">
                <div class="form-row">
                    <label for="card-element" class="mb-2">
                        Credit or debit card
                    </label>
                    <div id="card-element" class="mt-3">
                        <!-- A Stripe Element will be inserted here. -->
                    </div>
                    <!-- Used to display form errors. -->
                    <div id="card-errors" role="alert"></div>
                </div>
                <v-row>
                    <v-btn class="ml-3" color="primary" @click.prevent="back_to_pricing">Back</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn class="mr-3" color="primary" @click.prevent="submit_payment">Submit Payment</v-btn>
                </v-row>
            </form>
        </div>
    </div>
</template>
<script src="./Checkout.js"></script>
<style lang="scss" scoped src="./Checkout.scss"></style>