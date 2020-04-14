<template>
  <div class="payment-card">
    <div class="payment-card-content">
      <dash-card
        title="Payment"
        :view-more-link="viewMoreLink"
        :dashboard="dashboard"
        @close="$emit('close')"
        @expand="expand"
      >
        <div class="content-wrapper" slot="content">
          <v-row no-gutters class="mb-5 payment-graph">
            <v-col class="mx-auto">
              <h4 class="text-center grey--text">Total Earnings</h4>
              <h2 class="text-center">{{ total_earnings }}</h2>
            </v-col>
            <v-col class="mx-auto">
              <h4 class="text-center grey--text">Completed</h4>
              <h2 class="text-center">{{ completed }}</h2>
            </v-col>
            <v-col class="mx-auto">
              <h4 class="text-center grey--text">Remaining</h4>
              <h2 class="text-center">{{ remaining }}</h2>
            </v-col>
          </v-row>

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
