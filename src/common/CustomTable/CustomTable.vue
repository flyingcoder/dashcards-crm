<template>
  <v-data-table
          v-bind="$attrs"
          :pagination.sync="pagination"
  >

    <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear> <!-- LOADING  PROGRESS BAR-->

    <template slot="headers" slot-scope="props">
      <slot name="headers"></slot>
    </template>

    <template slot="items" slot-scope="props">
      <slot name="items" :items="props"></slot>
    </template>

    <template slot="no-data">
      <v-alert :value="true" color="error" icon="warning">
        Sorry, nothing to display here :(
        <pre>{{$props}}</pre>
      </v-alert>
    </template>

  </v-data-table>
</template>
<script src="./CustomTable.js"></script>
<style lang="scss" scoped src="./CustomTable.scss"></style>