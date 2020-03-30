<template>
  <v-layout wrap class="reports__tab">
    <v-progress-linear
      v-show="loading"
      :indeterminate="true"
    ></v-progress-linear>

    <ReportsDialog ref="dialog" :id="id" @report-added="add_new_report" />

    <ReportsEditDialog
      ref="editDialog"
      :id="id"
      @report-updated="reportUpdated"
    />

    <DeleteDialog
      :open-dialog.sync="deleteDialog"
      title="Delete Report"
      text-content="Are you sure you want to delete this template?"
      @delete="deleteReport"
    />

    <v-layout class="actions justify-end" v-if="has_permission">
      <v-btn
        color="#3b589e"
        dark
        fab
        small
        title="Add New Report"
        @click="open_dialog"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-layout>

    <v-layout wrap v-if="reports.length || loading">
      <v-flex xs12 :md3="has_permission || !reports.length">
        <reports-list
          v-if="reports.length"
          :reports="reports"
          :active-report="active_report"
          :loading="loading"
          @row-clicked="preview_row_url"
          @edit="openEditDialog"
          @delete="openDeleteDialog"
        />
      </v-flex>

      <v-flex xs12 md9 v-if="has_permission && reports.length">
        <div class="body-wrapper">
          <ReportsSection
            :iframe_src="iframe_src"
            @iframe-loaded="iframeLoaded"
          />
        </div>
      </v-flex>
    </v-layout>

    <v-flex xs12 md12 class="empty-reports" v-else>
      <div class="empty-content">
        <div class="empty-svg">
          <svg viewBox="0 0 250 250">
            <path
              d="M57 59l150 0 0 -7c0,-4 -1,-8 -4,-10 -3,-3 -6,-5 -10,-5l-164 0c-4,0 -8,2 -10,5 -3,2 -5,6 -5,10l0 112c0,4 2,7 5,10 2,2 6,4 10,4l0 0 0 -92c0,-7 3,-14 8,-19 5,-5 12,-8 20,-8zm129 23l21 0c4,0 7,1 10,3l0 0c2,3 3,6 3,10l0 98c0,3 -1,7 -3,9l0 0c-3,2 -6,4 -10,4l-21 0c-4,0 -7,-2 -9,-4 -3,-2 -4,-6 -4,-9l0 -98c0,-4 1,-7 4,-10 2,-2 5,-3 9,-3zm-116 72l21 0c4,0 7,1 9,4 3,2 4,5 4,9l0 26c0,3 -1,7 -4,9 -2,2 -5,4 -9,4l-21 0c-4,0 -7,-2 -10,-4 -2,-2 -3,-6 -3,-9l0 -26c0,-4 1,-7 3,-9 3,-3 6,-4 10,-4zm21 13l-21 0 0 25 21 0 0 -25zm37 -62l21 0c4,0 7,1 9,3 3,3 4,6 4,10l0 75c0,3 -1,7 -4,9 -2,2 -5,4 -9,4l-21 0c-4,0 -7,-2 -10,-4 -2,-2 -3,-6 -3,-9l0 -75c0,-4 1,-7 3,-10 3,-2 6,-3 10,-3zm21 13l-21 0 0 74 21 0 0 -74zm58 -23l-21 0 0 97 21 0 0 -97zm14 -36l0 0c8,0 15,3 20,8 5,5 8,12 8,19l0 112c0,8 -3,15 -8,20 -5,5 -12,8 -20,8l-164 0c-8,0 -15,-3 -20,-8 -5,-5 -8,-12 -8,-20l0 -7 0 0c-8,0 -15,-3 -20,-8 -5,-5 -8,-12 -8,-19l0 -112c0,-8 3,-15 8,-20 5,-5 12,-8 20,-8l164 0c8,0 15,3 20,8 5,5 8,12 8,20l0 7zm0 13l-164 0c-4,0 -7,2 -10,4 -3,3 -4,6 -4,10l0 112c0,4 1,8 4,10 3,3 6,5 10,5l164 0c4,0 8,-2 10,-5 3,-2 5,-6 5,-10l0 -112c0,-4 -2,-7 -5,-10 -2,-2 -6,-4 -10,-4z"
            />
          </svg>
        </div>
        <div class="empty-btn">
          <v-btn large dark color="#3b589e" @click="open_dialog"
            >Add Report
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script src="./Reports.js"></script>
<style lang="scss" scoped src="./Reports.scss"></style>
