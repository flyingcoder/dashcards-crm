<template>
	<div class="third-row additional-info-section">

		<left-side />
		<right-side />

	</div>
</template>

<script>
import LeftSide from './LeftSide.vue'
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}
</style>
