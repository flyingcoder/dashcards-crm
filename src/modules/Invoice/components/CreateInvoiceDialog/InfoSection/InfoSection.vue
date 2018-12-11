<template>
	<div class="first-row info-section">

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
.first-row.info-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
