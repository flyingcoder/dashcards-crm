<template>
  <div class="clients">
    <v-layout row wrap>
      <v-flex xs12>
        <table-header :paths="paths" @click="add_dialog = true" />
      </v-flex>
    </v-layout>
    <clients-table :dialog.sync="add_dialog" />
  </div>
</template>
<script src="./Clients.js"></script>
<style lang="scss" scoped src="./Clients.scss"></style>
