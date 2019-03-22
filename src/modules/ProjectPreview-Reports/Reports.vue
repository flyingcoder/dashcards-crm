<template>
  <v-layout row wrap class="reports__tab">
    <v-flex xs12 class="text-xs-right" v-if="has_permission">
      <v-btn
        color="indigo"
        dark
        right
        icon
        title="Add New Report"
        @click="open_dialog"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-flex>

    <v-flex xs12 :md3="has_permission || !reports.length">
      <reports-list
        v-if="reports.length"
        :reports="reports"
        :active-report="active_report"
        :loading="loading"
        @row-clicked="preview_row_url"
      />
    </v-flex>

    <v-flex xs12 md9 v-if="has_permission">
      <div class="body-wrapper">
        <ReportsDialog
          ref="dialog"
          :id="id"
          @report-added="add_new_report"
        />

        <ReportsSection
          :iframe_src="iframe_src"
        />
      </div>
    </v-flex>
  </v-layout>
</template>

<script src="./Reports.js"></script>
<style lang="scss" scoped src="./Reports.scss"></style>
