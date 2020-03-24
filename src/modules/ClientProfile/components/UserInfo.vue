<template>
  <div class="user-info">
    <div class="loading" v-if="user_loading">
      <v-progress-linear :indeterminate="true" />
    </div>

    <template v-else>
      <div class="info-div">
        <div class="hour">Invoices</div>
        <div class="value">{{ user.no_invoices }}</div>
      </div>

      <div class="info-div">
        <h4 class="name">{{ user.first_name }} {{ user.last_name }}</h4>
        <div class="job-title" v-if="user.meta.company_name">
          {{ user.meta.company_name.value }}
        </div>
        <div class="job-title" v-else>Client</div>
        <div class="address">
          <v-icon>place</v-icon>
          <span v-if="user.meta.location">{{ user.meta.location.value }}</span>
        </div>
      </div>

      <div class="info-div">
        <div class="hour">Amount Paid</div>
        <div class="value">
          {{ currency.symbol }}
          {{ user.total_amount_paid }}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { settings } from '@/variables'

export default {
  data() {
    return {
      currency: settings.defaultCurrency
    }
  },
  computed: {
    ...mapGetters('memberProfile', ['user', 'user_loading'])
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/variables';

.user-info {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: $white;
  padding: 20px;
  align-items: center;

  .loading {
    grid-column: 1 / -1;
  }

  .info-div {
    text-align: center;
  }

  .hour {
    font-size: 14px;
    color: $textGray;
  }
  .value {
    font-size: 30px;
    color: $black;
  }
  .name {
    font-size: 22px;
    color: $black;
    text-transform: capitalize;
  }
  .job-title {
    font-size: 18px;
    color: $black;
    margin-bottom: 10px;
  }
  .address {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: $textGray;
    opacity: 0.7;

    .v-icon {
      color: $textGray;
      opacity: 0.7;
    }
  }
}

@media only screen and (max-width: 768px) {
  .user-info {
    padding: 15px;
  }
}
</style>
