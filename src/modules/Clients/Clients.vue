<template>
  <div class="clients">
    <table-header :paths="paths" @click="add_dialog = true" />
    <clients-table :dialog.sync="add_dialog" />
  </div>
</template>
<script src="./Clients.js"></script>
<style lang="scss" scoped src="./Clients.scss"></style>