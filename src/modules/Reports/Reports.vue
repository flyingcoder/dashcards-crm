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
      <table-header :paths="paths" :noButton="true" />
    </v-flex>

    <v-flex xs12>
      <reports-list
        v-if="reports.length"
        :reports="reports"
        :loading="loading"
        :active-report="activeReport"
        @row-clicked="previewRowUrl"
        @delete="openDeleteDialog"
        @edit="openEditDialog"
      />
    </v-flex>

    <v-flex xs12>
      <div class="body-wrapper">
        <div class="reports__body">
          <div class="reports-content">
            <div class="reports__buttons">
              <div class="reports__option">
                <v-btn color="#3b589e" class="add__link" @click="open_dialog">
                  Add Link
                </v-btn>

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
  </v-layout>
</template>

<script src="./Reports.js"></script>
<style scoped lang="scss" src="./Reports.scss"></style>
