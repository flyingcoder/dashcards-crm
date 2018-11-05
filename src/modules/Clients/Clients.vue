<template>
  <div class="clients">

    <div class="c-header">
      <breadcrumb :paths="paths"/>

      <div class='newAdd__btn' @click="add_dialog = true">
        <v-icon class="addIcon__btn">add_icon</v-icon>
        <div class="addText__btn"><span>Add New</span></div>
      </div>
    </div>

    <clients-table :dialog.sync="add_dialog" />

  </div>
</template>
<script src="./Clients.js"></script>
<style lang="scss" scoped src="./Clients.scss"></style>