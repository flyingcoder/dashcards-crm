<template>
	<v-layout row wrap justify-space-between class="third-row additional-info-section">

		<v-flex sm6 xs12 class="left-content"><left-side /></v-flex>
		<v-flex sm6 xs12 class="right-content"><right-side /></v-flex>

	</v-layout>
</template>

<script>
import LeftSide from './LeftSide/LeftSide.vue'
import RightSide from './RightSide/RightSide.vue'

export default {
  components: {
    LeftSide,
    RightSide
  }
}
</script>

<style lang="scss" scoped>
.third-row.additional-info-section {
  margin-top: 20px;
}

@media only screen and (max-width: 599px) {
  .third-row.additional-info-section {
    .left-content {
      order: 2;
    }

    .right-content {
      order: 1;
      margin-bottom: 20px;
    }
  }
}
</style>
