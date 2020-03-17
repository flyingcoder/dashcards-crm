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
          <v-card
            class="mx-auto"
            slot="content"
          >
            <v-layout row class="justify-center">
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

            <v-data-table
              :items="items"
              class="elevation-1"
              hide-actions
              hide-headers
              :key="uniquekey"
            >
              <template v-slot:items="props">
                <td class="text-xs-left">
                  <div class="user__name text-cap" >
                    <v-img
                      max-height="40px"
                      width="40px"
                      :src="props.item.user.image_url"
                    />
                    <span>{{ props.item.user.fullname }}</span>
                  </div>
                </td>
                <td class="text-xs-left">{{ props.item.amount }}</td>
              </template>
            </v-data-table>
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

    .v-responsive.v-image{
      border-radius: 50%;
    }
  }
</style>