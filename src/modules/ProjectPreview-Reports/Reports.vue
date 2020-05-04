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

    <v-btn color="#3b589e" small dark fab class="add-btn" @click="open_dialog"
      ><v-icon>add</v-icon></v-btn
    >

    <v-col md="12" v-if="has_permission && reports.length">
      <div class="body-wrapper">
        <v-row no-gutters class="pa-2">
          <v-col cols="12" xs="12">
            <v-card>
              <v-tabs class="reports-tab" v-model="active_report" dark>
                <v-tab v-for="report in reports" :key="report.title">
                  {{ report.title }}
                </v-tab>
              </v-tabs>

              <v-tabs-items v-model="active_report">
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
                            :iframe_src="report.url"
                            @iframe-loaded="iframeLoaded"
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
            >Add New Report
          </v-btn>
        </template>
      </Empty>
    </v-col>
  </v-row>
</template>

<script src="./Reports.js"></script>
<style lang="scss" scoped src="./Reports.scss"></style>
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
