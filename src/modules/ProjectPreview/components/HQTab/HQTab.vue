<template>
  <v-layout>
    <div class="hq-tab">
      <project-overview-card :id="id" />
      <timeline-card :id="id" />
      <tasks-card :id="id" :view-more-link="taskPath" />
      <invoice-table :id="id" />
    </div>
  </v-layout>
</template>

<script src="./HQTab.js">
</script>
<style lang="scss" scoped src="./HQTab.scss">
</style>
