<template>
  <v-layout wrap class="reports">
    <DeleteDialog
      :open-dialog.sync="deleteDialog"
      title="Delete Report"
      text-content="Are you sure you want to delete this report?"
      @delete="deleteReport"
    />

    <ReportsAddDialog ref="dialog" :id="id" @report-added="add_new_report" />

    <ReportsEditDialog
      ref="editDialog"
      :id="id"
      @report-updated="reportUpdated"
    />

    <v-flex xs12>
      <table-header :paths="paths" @click="open_dialog"></table-header>
    </v-flex>

    <!-- <v-col md="12" xs="12" class="ma-0 pa-0" v-if="reports.length > 0">
      <div class="body-wrapper">
        <v-row no-gutters class="pa-2">
          <v-col md="4" xs="12">
            <v-combobox
              v-model="reports_selected"
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
              @change="previewRowUrl"
            ></v-combobox>
          </v-col>
          <v-spacer></v-spacer>
          <v-btn text v-if="activeReport" class="ml-1" @click="openEditDialog" ><v-icon small left>edit</v-icon> Edit Report</v-btn>
          <v-btn text v-if="activeReport" class="ml-1" @click="openDeleteDialog" ><v-icon small left>delete</v-icon> Delete Report</v-btn>
        </v-row>
          <div class="reports-content">
            <div class="site-preview">
              <ReportsSection
                 v-if="activeReport"
                :iframeSrc="iframeSrc"
                @iframe-loaded="iframe_loaded"
              />
              <Empty v-else headline="Select a report to preview"></Empty>
            </div>
          </div>
      </div>
    </v-col> -->

    <v-col md="12" xs="12" class="ma-0 pa-0" v-if="reports.length > 0">
      <div class="body-wrapper">
        <v-row no-gutters class="pa-2">
          <v-col cols="12" xs="12">
            <v-card>
              <v-tabs class="reports-tab" v-model="reports_selected" dark>
                <v-tab v-for="report in reports" :key="report.title">
                  {{ report.title }}
                </v-tab>
              </v-tabs>

              <v-tabs-items v-model="reports_selected">
                <v-tab-item v-for="report in reports" :key="report.title">
                  <v-card flat>
                    <v-card-text>
                      <div class="reports-actions">
                        <v-spacer></v-spacer>
                        <v-btn
                          color="#3b589e"
                          small
                          dark
                          fab
                          class="ml-1"
                          @click="openEditDialog(report, report.id)"
                          ><v-icon>edit</v-icon></v-btn
                        >
                        <v-btn
                          color="#3b589e"
                          small
                          dark
                          fab
                          class="ml-1"
                          @click="openDeleteDialog(report.id)"
                          ><v-icon>delete</v-icon></v-btn
                        >
                      </div>
                      <div class="reports-content">
                        <div class="site-preview">
                          <ReportsSection
                            :iframeSrc="report.url"
                            @iframe-loaded="iframe_loaded"
                          />
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-col>
    <v-col md="12" xs="12" class="ma-0 pa-0" v-else>
      <Empty headline="No reports yet">
        <template v-slot:extra>
          <v-btn large dark color="#3b589e" @click="open_dialog"
            >Add Report
          </v-btn>
        </template>
      </Empty>
    </v-col>
  </v-layout>
</template>

<script src="./Reports.js"></script>
<style scoped lang="scss" src="./Reports.scss"></style>
<style scoped>
>>> .reports-tab
  .v-item-group.theme--dark.v-slide-group.v-tabs-bar.white--text {
  background: #eeeef3;
}
>>> .reports-tab .v-slide-group__wrapper {
  border-right: 1px solid #b2b6c0;
  border-left: 1px solid #b2b6c0;
}
>>> .reports-tab .v-slide-group__prev .v-icon,
>>> .reports-tab .v-slide-group__next .v-icon {
  color: #8090aa;
}
</style>
