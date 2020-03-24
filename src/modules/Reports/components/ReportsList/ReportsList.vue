<template>
  <div class="reports-list">
    <div class="reports-list-title">Reports List</div>

    <div class="reports-content">
      <div class="table-header">
        <div class="reports-id">#</div>
        <div class="reports-title">Title</div>
        <div class="text-xs-center">
          <img src="@/assets/icons/table/menu.svg" />
        </div>
      </div>

      <v-progress-linear
        v-if="loading"
        :indeterminate="true"
      ></v-progress-linear>

      <h3 class="no-data" v-else-if="!loading && !reports.length">No Data</h3>

      <div class="list-content" v-else>
        <div
          row
          class="report-item"
          v-for="(report, index) of reports"
          :key="report.id"
          :class="{ active: activeReport && activeReport.id === report.id }"
          @click="previewRowUrl(index)"
        >
          <div class="reports-id">{{ index + 1 }}</div>
          <div class="reports-title text-cap">{{ report.title }}</div>
          <div class="reports-action">
            <v-btn icon @click.stop="actionClicked(report, index, 'edit')">
              󠁿󠁿󠁿<v-icon color="indigo">edit</v-icon>
            </v-btn>
            <v-btn icon @click.stop="actionClicked(report, index, 'delete')">
              󠁿󠁿󠁿<v-icon color="red">delete</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./ReportsList.js"></script>
<style scoped lang="scss" src="./ReportsList.scss"></style>
