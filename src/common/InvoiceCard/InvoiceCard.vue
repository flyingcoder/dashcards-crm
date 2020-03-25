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
      >
        <v-card class="mx-auto" slot="content">
          <v-layout>
            <v-flex class="mx-auto">
              <small>Clients</small>
              <h2>{{ total_clients }}</h2>
            </v-flex>
            <v-flex class="mx-auto">
              <small>This Month</small>
              <h2>{{ current_month_total }}</h2>
            </v-flex>
            <v-flex class="mx-auto">
              <small>Last Month</small>
              <h2>{{ last_month_total }}</h2>
            </v-flex>
          </v-layout>

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
