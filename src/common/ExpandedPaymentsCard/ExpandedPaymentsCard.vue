<template>
  <div class="expanded-payments-card">
    <v-layout class="table-header justify-space-between align-center">
      <breadcrumb :paths="paths" />
      <div class="header-actions">
        <v-btn fab small dark color="#3b589e" class="mr-2">
          <v-icon>add</v-icon>
        </v-btn>
        <v-btn fab small class="mr-2">
          <v-icon>more_horiz</v-icon>
        </v-btn>
        <v-btn fab small @click="minimize">
          <v-icon>close</v-icon>
        </v-btn>
      </div>
    </v-layout>
    <v-row>
      <v-col cols="12">
        <payment-card/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Breadcrumb from '@/common/Breadcrumb.vue'
import PaymentCard from '@/common/PaymentCard/PaymentCard.vue'

export default {
  name: 'ExpandedClientsCard',
  components: { Breadcrumb, PaymentCard },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Expanded Payments', disabled: true, router_name: null }
    ]
  }),

  methods: {
    minimize() {
      this.$router.push({ name: 'default-content' })
    }
  }
}
</script>

<style lang="scss">
@import '~@/sass/_variables';

@include pagePadding('.expanded-payments-card');
.expanded-payments-card {
  .dash__card .card__content {
    height: 100%;
  }
}
</style>
