<template>
  <div class="invoice-card">
    <div class="invoice__content">
      <dash-card
        title="Invoice"
        :view-more-link="viewMoreLink"
        class="invoice__content"
        :dashboard="dashboard"
        :viewMoreBtn="enableViewMore"
        @close="$emit('close')"
        @view-more="loadMore"
        @expand="expand"
      >
        <v-card class="mx-auto" slot="content">
          <v-row no-gutters>
            <v-col class="mx-auto">
              <h4 class="text-center grey--text">Clients</h4>
              <h2 class="text-center">{{ total_clients }}</h2>
            </v-col>
            <v-col class="mx-auto">
              <h4 class="text-center grey--text">This Month</h4>
              <h2 class="text-center">{{ current_month_total }}</h2>
            </v-col>
            <v-col class="mx-auto">
              <h4 class="text-center grey--text">Last Month</h4>
              <h2 class="text-center">{{ last_month_total }}</h2>
            </v-col>
          </v-row>

          <v-sparkline
            :value="value"
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :gradient-direction="gradientDirection"
            :fill="fill"
            :type="type"
            :auto-line-width="autoLineWidth"
            auto-draw
          ></v-sparkline>

          <v-list disabled tile two-line dense>
            <v-list-item v-for="item in items" :key="item.user.id" dense>
              <v-list-item-avatar size="40">
                <v-img :src="item.user.image_url"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  v-text="item.user.fullname"
                ></v-list-item-title>
                <v-list-item-subtitle
                  v-text="item.user.job_title"
                ></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-icon>
                {{ item.amount }}
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </dash-card>
    </div>
  </div>
</template>

<script src="./InvoiceCard.js"></script>

<style lang="scss" scoped>
@import '~@/sass/_variables';
@include emptyTable('.empty-invoice');

.justify-content-center {
  display: flex;
  justify-content: center;
}
.user__name {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 10px;
  text-align: center;
  cursor: pointer;

  .v-responsive.v-image {
    border-radius: 50%;
  }
}
</style>
