<template>
  <v-layout row wrap class="reports__tab">
    <v-flex xs12 md3>
      <reports-list
        v-if="reports.length"
        :reports="reports"
        :active-report="active_report"
        :loading="loading"
        @row-clicked="preview_row_url"
      />
    </v-flex>

    <v-flex xs12 md9>
      <div class="body-wrapper">
        <ReportsDialog ref="dialog" @update-iframe="iframe_src = $event" />

        <ReportsSection
          no_actions
          :iframe_src="iframe_src_table"
          @iframe-loaded="stop_loader"
        />
      </div>
    </v-flex>

    <v-flex xs12>
      <div class="body-wrapper">
        <ReportsSection
          :iframe_src="iframe_src"
          :activate_save="activate_save"
          @open-dialog="open_dialog"
          @save-report="save_report"
          @iframe-loaded="iframe_loaded"
        />
      </div>
    </v-flex>
  </v-layout>
</template>

<script src="./Reports.js"></script>
<style lang="scss" scoped src="./Reports.scss"></style>
