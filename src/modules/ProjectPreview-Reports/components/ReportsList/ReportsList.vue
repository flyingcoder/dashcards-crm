<template>
  <div class="reports-list">
    <div class="reports-list-title">Reports List</div>

    <div class="reports-content">
      <v-layout class="table-header">
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
          class="report-item align-center"
          :class="{ active: activeReport && activeReport.id === report.id }"
          v-for="(report, index) of reports"
          :key="report.id"
          @click="preview_row_url(index)"
        >
          <v-flex xs3 class="reports-id">{{ index + 1 }}</v-flex>
          <v-flex xs9 class="reports-title">{{ report.title }}</v-flex>
          <v-btn icon @click.stop="actionClicked(report, index, 'edit')">
            <v-icon color="indigo">edit</v-icon>
          </v-btn>

          <v-btn icon @click.stop="actionClicked(report, index, 'delete')">
            󠁿󠁿󠁿<span style="font-size: 20px">🗙</span>
          </v-btn>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script src="./ReportsList.js"></script>
<style scoped lang="scss" src="./ReportsList.scss"></style>
