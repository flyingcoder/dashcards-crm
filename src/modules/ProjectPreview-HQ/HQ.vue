<template>
  <v-row no-gutters>
    <div class="hq-tab">
      <project-overview-card :id="id" />
      <timeline-card :id="id" />
      <tasks-card :id="id" :view-more-link="taskPath" />
      <invoice-table :id="id" />
    </div>
  </v-row>
</template>

<script src="./HQ.js"></script>
<style lang="scss" scoped src="./HQ.scss"></style>
