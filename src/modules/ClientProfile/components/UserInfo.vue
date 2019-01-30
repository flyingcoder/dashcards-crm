<template>
	<div class="user-info">

		<div class="loading" v-if="user_loading">
			<v-progress-linear :indeterminate="true" />
		</div>

		<template v-else>
			<div class="info-div">
				<div class="hour">Invoices</div>
				<div class="value">68</div>
			</div>

			<div class="info-div">
				<h4 class="name">
					{{ user.first_name }} {{ user.last_name }}
					<v-icon>edit</v-icon>
				</h4>
				<div class="job-title">CEO, Samsung</div>
				<div class="address">
					<v-icon>place</v-icon>
					Cebu, Philippines
				</div>
			</div>

			<div class="info-div">
				<div class="hour">Amount Paid</div>
				<div class="value">$10,000</div>
			</div>
		</template>

	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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
    position: relative;

    .v-icon {
      color: $textGray;
      opacity: 0.7;
      position: absolute;
      top: 5px;
      margin-left: 5px;
      cursor: pointer;

      &:hover {
        color: $blue;
      }
    }
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
