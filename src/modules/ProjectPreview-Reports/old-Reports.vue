<template>
    <v-row no-gutters class="reports__tab">
        <v-progress-linear v-show="loading" :indeterminate="true" />
        <ReportsDialog ref="dialog" :id="id" @report-added="add_new_report" />
        <ReportsEditDialog ref="editDialog" :id="id" @report-updated="reportUpdated" />
        <DeleteDialog :open-dialog.sync="deleteDialog" title="Delete Report"
                      text-content="Are you sure you want to delete this report?" @delete="deleteReport"
        />
        <v-col md="12" v-if="has_permission && reports.length">
            <v-divider />
            <div class="reports-tab">
                <v-tabs grow height="50px" :show-arrows="is_screen_medium_and_down" v-model="active_report" dense
                        centered
                >
                    <v-tab v-for="(report, i) in reports" :key="i">
                        <v-img class="tab-img mr-2" :src="getIconFromUrl(report)" />
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
                    <v-tab-item v-for="(report,i) in reports" :key="i">
                        <v-card flat>
                            <v-card-text>
                                <div class="reports-actions">
                                    <v-spacer />
                                    <v-icon @click="open_dialog">add_circle_outline</v-icon>
                                    <v-icon fab class="mx-1" @click="openEditDialog(report, report.id)">
                                        mdi-circle-edit-outline
                                    </v-icon>
                                    <v-icon fab class="mx-1" @click="openDeleteDialog(report.id)">
                                        mdi-delete-circle-outline
                                    </v-icon>
                                </div>
                                <div class="reports-content">
                                    <div class="site-preview">
                                        <ReportsSection v-if="report.props && report.props.canIframe"
                                                        :iframeSrc="report.url"
                                        />
                                        <v-card class="mx-auto" v-else-if="report.props && report.props.image" flat>
                                            <v-list-item>
                                                <v-list-item-content>
                                                    <v-alert prominent type="warning">
                                                        <v-row align="center">
                                                            <v-col class="grow">
                                                                We are unable to load the site content
                                                                because of the website restrictions.
                                                            </v-col>
                                                            <v-col class="shrink">
                                                                <v-btn :href="report.url" target="_blank">
                                                                    Go to Site
                                                                    <v-icon right>mdi-arrow-right-bold</v-icon>
                                                                </v-btn>
                                                            </v-col>
                                                        </v-row>
                                                    </v-alert>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-img class="white--text align-end" :src="report.props.image">
                                                <v-card-title>{{ report.props.title }}</v-card-title>
                                            </v-img>
                                            <v-card-subtitle class="pb-0 headline">
                                                {{ report.props.title }}
                                            </v-card-subtitle>
                                            <v-card-text class="text--primary">
                                                <div class="subtitle">{{ report.props.description }}</div>
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-spacer />
                                                <v-btn color="orange" text :href="report.url" target="_blank">
                                                    Go to Site
                                                    <v-icon right>mdi-arrow-right-bold</v-icon>
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                        <Empty v-else icon="mdi-link-off" headline="">
                                            <template v-slot:extra>
                                                <v-alert prominent type="warning">
                                                    <v-row align="center">
                                                        <v-col class="grow">
                                                            We are unable to load the site content
                                                            because of the website restrictions.
                                                        </v-col>
                                                        <v-col class="shrink">
                                                            <v-btn :href="report.url" target="_blank">
                                                                Go to Site
                                                                <v-icon right>mdi-arrow-right-bold</v-icon>
                                                            </v-btn>
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
        </v-col>
        <v-col md="12" xs="12" class="ma-0 pa-0" v-else>
            <div class="empty-wrapper">
                <Empty headline="No reports yet" icon="mdi-file-compare">
                    <template v-slot:extra>
                        <v-btn large dark color="#3b589e" v-if="!loading" @click="open_dialog">
                            Add New Report
                        </v-btn>
                    </template>
                </Empty>
            </div>
        </v-col>
    </v-row>
</template>
<script src="./Reports.js"></script>
<style lang="scss" src="./Reports.scss"></style>
<style scoped></style>