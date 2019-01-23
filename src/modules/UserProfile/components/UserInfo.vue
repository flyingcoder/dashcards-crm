<template>
	<div class="user-info">

		<div class="info-div">
			<div class="hour">Total Hours</div>
			<div class="value">68</div>
		</div>

		<div class="info-div">
			<h4 class="name">Bonnin Gimenez
				<v-icon>edit</v-icon>
			</h4>
			<div class="job-title">UI/UX Designer</div>
			<div class="address">
				<v-icon>place</v-icon>
				Cebu, Philippines
			</div>
		</div>

		<div class="info-div">
			<div class="hour">Per Hour</div>
			<div class="value">$10</div>
		</div>

	</div>
</template>

<style lang="scss" scoped>
@import '~@/sass/variables';

.user-info {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: $white;
  padding: 20px;
  align-items: center;

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
