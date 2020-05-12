<template>
  <div class="search">
    <!-- <v-text-field
      text
      label="Search"
      prepend-icon="mdi-database-search"
      autocomplete="new-password"
    ></v-text-field> -->
    <v-autocomplete class="mx-1" hide-details dense  flat :items="[]" :loading="false" v-model="globalsearchbox" :search-input.sync="search" hide-selected placeholder="Start typing to Search" prepend-inner-icon="mdi-database-search" return-object outlined></v-autocomplete>
  </div>
</template>
<script src="./HeaderSearch.js"></script>
<style lang="scss" scoped src="./HeaderSearch.scss"></style>
