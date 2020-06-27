<template>
    <v-row class="reports">
        <DeleteDialog :open-dialog.sync="deleteDialog" title="Delete Report" text-content="Are you sure you want to delete this report?" @delete="deleteReport" />
        <ReportsAddDialog ref="dialog" :id="id" @report-added="add_new_report" />
        <ReportsEditDialog ref="editDialog" :id="id" @report-updated="reportUpdated" />
        <v-col md="12" xs="12" class="px-3 pa-0">
            <div class="body-wrapper" v-if="reports.length > 0">
                <v-tabs grow :show-arrows="is_screen_medium_and_down" class="reports-tab" v-model="reports_selected">
                    <v-tab v-for="(report, i) in reports" :key="i">
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
                <v-tabs-items v-model="reports_selected">
                    <v-tab-item v-for="(report, i) in reports" :key="i">
                        <v-card flat>
                            <v-card-text>
                                <div class="reports-actions">
                                    <v-spacer></v-spacer>
                                    <v-btn v-if="reports.length >= 3" color="#3b589e" small dark fab class="ml-1" @click="open_dialog">
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
                                        <ReportsSection :iframeSrc="report.url" @iframe-loaded="iframe_loaded" />
                                    </div>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </div>
            <div class="body-wrapper" v-else>
                <Empty headline="No reports yet">
                    <template v-slot:extra>
                        <v-btn large dark color="#3b589e" @click="open_dialog">Add Report
                        </v-btn>
                    </template>
                </Empty>
            </div>
        </v-col>
    </v-row>
</template>
<script src="./Reports.js"></script>
<style scoped lang="scss" src="./Reports.scss"></style>