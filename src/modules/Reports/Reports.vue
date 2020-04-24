<template>
  <v-layout wrap class="reports">
    <DeleteDialog
      :open-dialog.sync="deleteDialog"
      title="Delete Report"
      text-content="Are you sure you want to delete this template?"
      @delete="deleteReport"
    />
    <ReportsAddDialog ref="dialog" :id="id" @report-added="add_new_report" />
    <ReportsEditDialog
      ref="editDialog"
      :id="id"
      @report-updated="reportUpdated"
    />
    <v-flex xs12>
      <table-header :paths="paths" @click="open_dialog" />
    </v-flex>

    <v-flex xs4>
      <!-- <reports-list
        v-if="reports.length"
        :reports="reports"
        :loading="loading"
        :active-report="activeReport"
        @row-clicked="previewRowUrl"
        @delete="openDeleteDialog"
        @edit="openEditDialog"
      /> -->
      <v-combobox
        v-model="reports_selected"
        :loading="loading"
        label="Select a report to preview"
        filled
        color="#657186"
      ></v-combobox>
    </v-flex>

    <v-flex xs12 v-if="reports.length">
      <div class="body-wrapper">
        <div class="reports__body">
          <div class="reports-content">
            <div class="reports__buttons">
              <div class="reports__option">
                <!-- <v-btn
                  color="#3b589e"
                  :disabled="!activateSave"
                  class="save"
                  @click="save_report"
                >
                  Save
                </v-btn> -->
              </div>
            </div>
            <div class="site-preview" v-if="reports.length">
              <ReportsSection
                :iframeSrc="iframeSrc"
                @iframe-loaded="iframe_loaded"
              />
            </div>
          </div>
        </div>
      </div>
    </v-flex>

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
<style scoped lang="scss" src="./Reports.scss"></style>
<style scoped>
>>> .theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
  background-color: #fff;
}
</style>
