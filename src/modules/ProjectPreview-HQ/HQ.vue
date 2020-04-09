<template>
  <v-layout class="hq-tab">
    <v-row>
      <v-col cols="12" md="6"><project-overview-card :id="id"/></v-col>
      <v-col cols="12" md="6"><timeline-card :id="id"/></v-col>
      <v-col cols="12" md="6"
        ><tasks-card :id="id" :view-more-link="taskPath"
      /></v-col>
      <v-col cols="12" md="6"><invoice-table :id="id"/></v-col>
    </v-row>
  </v-layout>
</template>

<script src="./HQ.js"></script>
<style lang="scss" scoped src="./HQ.scss"></style>
