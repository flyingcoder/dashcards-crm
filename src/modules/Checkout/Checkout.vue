<template>
  <div class="checkout">
    <div class="payment__container">
      <h1>You are going to pay {{ price }}</h1>
      <form id="payment-form">
        <div class="form-row">
          <label for="card-element">
            Credit or debit card
          </label>
          <div id="card-element">
            <!-- A Stripe Element will be inserted here. -->
          </div>

          <!-- Used to display form errors. -->
          <div id="card-errors" role="alert"></div>
        </div>

        <button @click.prevent="submit_payment">Submit Payment</button>
      </form>
    </div>
  </div>
</template>
<script src="./Checkout.js">
</script>
<style lang="scss" scoped src="./Checkout.scss">
</style>
