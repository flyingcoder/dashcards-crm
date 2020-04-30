<template>
  <v-row no-gutters class="reports__tab">

    <v-progress-linear
      v-show="loading"
      :indeterminate="true"
    ></v-progress-linear>

    <ReportsDialog ref="dialog" :id="id" @report-added="add_new_report" />

    <ReportsEditDialog
      ref="editDialog"
      :id="reportIdToEdit"
      @report-updated="reportUpdated"
    />

    <DeleteDialog
      :open-dialog.sync="deleteDialog"
      title="Delete Report"
      text-content="Are you sure you want to delete this report?"
      @delete="deleteReport"
    />

    <v-col md="12" v-if="has_permission && reports.length">
      <div class="body-wrapper">
        <v-row no-gutters class="pa-2">
          <v-col md="4" xs="12">
            <v-combobox
              v-model="active_report"
              :loading="loading"
              label="Select a report to preview"
              filled
              solo
              dense
              clearable
              :items="reports"
              color="#657186"
              item-text="title"
              return-object
              @change="preview_row_url"
            >
              <template v-slot:append-outer>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" icon outlined @click="open_dialog">
                      <v-icon color="">mdi-clipboard-plus</v-icon>
                    </v-btn>
                  </template>
                  <span>Add New Project Report</span>
                </v-tooltip>
                
              </template>
            </v-combobox>
          </v-col>
          <v-spacer></v-spacer>
          <v-btn text v-if="active_report" class="ml-1" @click="openEditDialog" ><v-icon small left>edit</v-icon> Edit Report</v-btn>
          <v-btn text v-if="active_report" class="ml-1" @click="openDeleteDialog" ><v-icon small left>delete</v-icon> Delete Report</v-btn>
        </v-row>
        <ReportsSection
          v-if="active_report"
          :iframe_src="iframe_src"
          @iframe-loaded="iframeLoaded"
        />
        <Empty v-else headline="Select a report to preview"></Empty>
      </div>
    </v-col>
    <v-col md="12" xs="12" class="ma-0 pa-0" v-else>
      <Empty headline="No reports yet">
        <template v-slot:extra>
          <v-btn large dark color="#3b589e" @click="open_dialog"
            >Add New Report
          </v-btn>
        </template>
      </Empty>
    </v-col>
  </v-row>
</template>

<script src="./Reports.js"></script>
<style lang="scss" scoped src="./Reports.scss"></style>
