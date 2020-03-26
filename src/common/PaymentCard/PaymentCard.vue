<template>
  <div class="payment-card">
    <div class="payment-card-content">
      <dash-card
        title="Payment"
        :view-more-link="viewMoreLink"
        :dashboard="dashboard"
        @close="$emit('close')"
      >
        <div class="content-wrapper" slot="content">
          <v-layout class="mb-5 payment-graph">
            <v-flex xs12 class="mx-auto">
              <small>Total Earnings</small>
              <h2>$100,000</h2>
            </v-flex>
            <v-flex xs6 class="mx-auto">
              <small>Completed</small>
              <h2>$75,000</h2>
            </v-flex>
            <v-flex xs6 class="mx-auto">
              <small>Remaining</small>
              <h2>$25,000</h2>
            </v-flex>
          </v-layout>

          <v-sparkline
            :value="value"
            :labels="labels"
            color="#3b589e"
            :padding="padding"
            type="bar"
            auto-line-width
            fill
            auto-draw
          >
          </v-sparkline>
        </div>
      </dash-card>
    </div>
  </div>
</template>

<script src="./PaymentCard.js"></script>
<style lang="scss">
@import '~@/sass/_variables';
.payment-graph {
  h2 {
    color: $blue;
  }
}
</style>
