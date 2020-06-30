<template>
    <v-row class="reports">
        <v-col md="12" xs="12">
            <div class="body-wrapper" v-if="reports.length > 0">
                <v-tabs grow next-icon="mdi-arrow-right-bold-circle-outline" prev-icon="mdi-arrow-left-bold-circle-outline" :show-arrows="is_screen_medium_and_down" class="reports-tab" v-model="reports_selected">
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
                                        <ReportsSection v-if="report.props && report.props.canIframe" :iframeSrc="report.url" @iframe-loaded="iframe_loaded" />
                                        <v-card class="mx-auto" v-else-if="report.props && report.props.image" flat>
                                            <v-list-item>
                                                <v-list-item-content>
                                                    <v-alert prominent type="warning">
                                                        <v-row align="center">
                                                            <v-col class="grow">We are unable to load the site content because of the website restrictions.</v-col>
                                                            <v-col class="shrink">
                                                                <v-btn :href="report.url" target="_blank">Go to Site <v-icon right>mdi-arrow-right-bold</v-icon></v-btn>
                                                            </v-col>
                                                        </v-row>
                                                    </v-alert>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-img class="white--text align-end" :src="report.props.image">
                                                <v-card-title>{{report.props.title}}</v-card-title>
                                            </v-img>
                                            <v-card-subtitle class="pb-0 headline">{{report.props.title}}</v-card-subtitle>
                                            <v-card-text class="text--primary">
                                                <div class="subtitle">{{report.props.description}}</div>
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="orange" text :href="report.url" target="_blank">
                                                    Go to Site <v-icon right>mdi-arrow-right-bold</v-icon>
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                        <Empty v-else icon="mdi-link-off" headline="">
                                            <template v-slot:extra>
                                                <v-alert prominent type="warning">
                                                        <v-row align="center">
                                                            <v-col class="grow">We are unable to load the site content because of the website restrictions.</v-col>
                                                            <v-col class="shrink">
                                                                <v-btn :href="report.url" target="_blank">Go to Site <v-icon right>mdi-arrow-right-bold</v-icon></v-btn>
                                                            </v-col>
                                                        </v-row>
                                                    </v-alert>
                                            </template>
                                        </Empty>
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
        <DeleteDialog :open-dialog.sync="deleteDialog" title="Delete Report" text-content="Are you sure you want to delete this report?" @delete="deleteReport" />
        <ReportsAddDialog ref="dialog" :id="id" @report-added="add_new_report" />
        <ReportsEditDialog ref="editDialog" :id="id" @report-updated="reportUpdated" />
    </v-row>
</template>
<script src="./Reports.js"></script>
<style scoped lang="scss" src="./Reports.scss"></style>