<template>
  <div class="reports-list">
    <div class="reports-list-title">Reports List</div>

    <div class="reports-content">
      <v-layout row class="table-header">
        <v-flex xs3 class="reports-id">#</v-flex>
        <v-flex xs9 class="reports-title">Title</v-flex>
      </v-layout>

      <v-progress-linear
        v-if="loading"
        :indeterminate="true"
      ></v-progress-linear>

      <h3 class="no-data" v-else-if="!loading && !reports.length">No Data</h3>

      <div class="list-content" v-else>
        <v-layout
          row
          class="report-item"
          v-for="(report, index) of reports"
          :key="report.id"
        >
          <v-flex xs3 class="reports-id">{{ index + 1 }}</v-flex>
          <v-flex xs9 class="reports-title">{{ report.title }}</v-flex>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script src="./ReportsList.js">
</script>
<style scoped lang="scss" src="./ReportsList.scss">
</style>
