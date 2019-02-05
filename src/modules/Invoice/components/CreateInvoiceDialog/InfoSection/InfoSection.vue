<template>
  <v-layout row wrap justify-space-between class="first-row info-section">
    <left-side />
    <right-side />
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
.first-row.info-section {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

@media only screen and (max-width: 690px) {
  .first-row.info-section {
    flex-direction: column;
  }
}
</style>
