<template>
    <v-row no-gutters class="reports__tab">
        <v-progress-linear v-show="loading" :indeterminate="true"></v-progress-linear>
        <ReportsDialog ref="dialog" :id="id" @report-added="add_new_report" />
        <ReportsEditDialog ref="editDialog" :id="reportIdToEdit" @report-updated="reportUpdated" />
        <DeleteDialog :open-dialog.sync="deleteDialog" title="Delete Report" text-content="Are you sure you want to delete this report?" @delete="deleteReport" />
        <v-col md="12" v-if="has_permission && reports.length">
            <v-divider></v-divider>
            <div class="reports-tab">
                <v-tabs grow height="50px" :show-arrows="is_screen_medium_and_down" v-model="active_report" dense centered>
                    <v-tab v-for="report in reports" :key="report.title">
                        <img class="tab-img mr-2" :src="getIconFromUrl(report)" />
                        {{ report.title }}
                    </v-tab>
                    <v-tab v-if="reports.length <= 2" class="reports-tab" @click="open_dialog">
                        <v-icon class="mr-2" color="#8090aa">add</v-icon>
                        Add Reports
                    </v-tab>
                    <v-tab v-if="reports.length <= 1" class="reports-tab" @click="open_dialog">
                        <v-icon class="mr-2" color="#8090aa">add</v-icon>
                        Add Reports
                    </v-tab>
                    <v-tab v-if="reports.length <= 0" class="reports-tab" @click="open_dialog">
                        <v-icon class="mr-2" color="#8090aa">add</v-icon>
                        Add Reports
                    </v-tab>
                </v-tabs>
                <v-tabs-items v-model="active_report" class="reports-tab-content">
                    <v-tab-item v-for="report in reports" :key="report.title">
                        <v-card>
                            <v-card-text>
                                <div class="reports-actions">
                                    <v-spacer></v-spacer>
                                    <v-btn color="#3b589e" small dark fab @click="open_dialog">
                                        <v-icon>add</v-icon>
                                    </v-btn>
                                    <v-btn color="#3b589e" small dark fab class="ml-1" @click="openEditDialog(report, report.id)">
                                        <v-icon>edit</v-icon>
                                    </v-btn>
                                    <v-btn color="#3b589e" small dark fab class="ml-1" @click="openDeleteDialog(report.id)">
                                        <v-icon>delete</v-icon>
                                    </v-btn>
                                </div>
                                <div class="reports-content">
                                    <div class="site-preview">
                                        <ReportsSection :iframe_src="report.url" @iframe-loaded="iframeLoaded" />
                                    </div>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </div>
        </v-col>
        <v-col md="12" xs="12" class="ma-0 pa-0" v-else>
            <Empty headline="No reports yet">
                <template v-slot:extra>
                    <v-btn large dark color="#3b589e" @click="open_dialog">Add New Report
                    </v-btn>
                </template>
            </Empty>
        </v-col>
    </v-row>
</template>
<script src="./Reports.js"></script>
<style lang="scss" scoped src="./Reports.scss"></style>
<style scoped></style>