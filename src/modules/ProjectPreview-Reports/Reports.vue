<template>
    <div class="reports">
        <div class="body-wrapper" v-if="reports.length > 0">
            <div class="reports-inner">
                <v-tabs grow next-icon="mdi-arrow-right-bold-circle-outline"
                        prev-icon="mdi-arrow-left-bold-circle-outline" :show-arrows="is_screen_medium_and_down"
                        class="reports-tab" v-model="reports_selected"
                >
                    <v-tab class="text-none" v-for="report in reports" :key="report.id">
                        <v-img class="tab-img mr-2" contain :max-width="30" :src="getIconFromUrl(report)" />
                        {{ report.title | ucwords }}
                    </v-tab>
                    <v-tab v-for="btn in calculated_btn" class="reports-tab" :key="btn+999">
                        <v-menu bottom left offset-y>
                            <template v-slot:activator="{ on: menu, attrs }">
                                <v-tooltip top>
                                    <template v-slot:activator="{ on: tooltip }">
                                        <v-btn block tile text class="text-none align-self-center ma-0" v-bind="attrs"
                                               v-on="{ ...tooltip, ...menu }"
                                        >
                                            <v-icon class="mr-2" color="#8090aa">
                                                mdi-plus-circle-multiple-outline
                                            </v-icon>
                                            Add Report
                                        </v-btn>
                                    </template>
                                    <span>Add Report</span>
                                </v-tooltip>
                            </template>
                            <v-list dense>
                                <v-list-item @click="open_dialog">
                                    <v-list-item-title>
                                        <v-icon left>mdi-plus-circle-outline</v-icon>
                                        Add new report via link
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="open_add_report_via_template(null)">
                                    <v-list-item-title>
                                        <v-icon left>mdi-plus-circle-outline</v-icon>
                                        Add new report via template
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-tab>
                    <v-tab class="text-none" v-if="next_url" @click.stop="load_more">
                        <v-icon class="mr-2" color="#8090aa">
                            mdi-arrow-right-bold-outline
                        </v-icon>
                        Load More...
                    </v-tab>
                </v-tabs>
                <v-tabs-items v-model="reports_selected">
                    <v-tab-item v-for="(report, sample) in reports" :key="sample">
                        <v-card flat>
                            <v-card-text>
                                <div class="reports-actions">
                                    <v-spacer />
                                    <v-menu bottom left offset-y v-if="reports.length >= 3">
                                        <template v-slot:activator="{ on: menu, attrs }">
                                            <v-tooltip top>
                                                <template v-slot:activator="{ on: tooltip }">
                                                    <v-icon fab class="mx-1" v-bind="attrs"
                                                            v-on="{ ...tooltip, ...menu }"
                                                    >
                                                        mdi-plus-circle-multiple-outline
                                                    </v-icon>
                                                </template>
                                                <span>Add Report</span>
                                            </v-tooltip>
                                        </template>
                                        <v-list dense>
                                            <v-list-item @click="open_dialog">
                                                <v-list-item-title>
                                                    <v-icon left>mdi-plus-circle-outline</v-icon>
                                                    Add new report via link
                                                </v-list-item-title>
                                            </v-list-item>
                                            <v-list-item @click="open_add_report_via_template(null)">
                                                <v-list-item-title>
                                                    <v-icon left>mdi-plus-circle-outline</v-icon>
                                                    Add new report via template
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                    <v-icon fab class="mx-1" @click="openEditDialog(report, report.id)">
                                        mdi-circle-edit-outline
                                    </v-icon>
                                    <v-icon fab class="mx-1" @click="openDeleteDialog(report.id)">
                                        mdi-delete-circle-outline
                                    </v-icon>
                                </div>
                                <div class="reports-content">
                                    <div class="site-preview">
                                        <Response v-if="report.url === 'template'" :items="report.props.template" />
                                        <ReportsSection v-else-if="report.props && report.props.canIframe"
                                                        :iframeSrc="report.url" @iframe-loaded="iframe_loaded"
                                        />
                                        <v-card class="mx-auto" v-else-if="report.props && report.props.image" flat>
                                            <v-list-item>
                                                <v-list-item-content>
                                                    <v-alert prominent outlined type="warning">
                                                        <v-row align="center">
                                                            <v-col class="grow">
                                                                We are unable to load the site content
                                                                because of the website restrictions.
                                                            </v-col>
                                                            <v-col class="shrink">
                                                                <v-btn dark color="#3b589e" :href="report.url"
                                                                       target="_blank"
                                                                >
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
                                                <v-alert prominent type="warning" outlined>
                                                    <v-row align="center">
                                                        <v-col class="grow">
                                                            We are unable to load the site content
                                                            because of the website restrictions.
                                                        </v-col>
                                                        <v-col class="shrink">
                                                            <v-btn :href="report.url" dark color="#3b589e"
                                                                   target="_blank"
                                                            >
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
        </div>
        <div class="body-wrapper" v-else>
            <Empty headline="No reports yet" icon="mdi-alpha-r-box-outline">
                <template v-slot:extra>
                    <v-menu bottom left offset-y>
                        <template v-slot:activator="{ on: menu, attrs }">
                            <v-tooltip top>
                                <template v-slot:activator="{ on: tooltip }">
                                    <v-btn large dark color="#3b589e" v-bind="attrs" v-on="{ ...tooltip, ...menu }">
                                        <v-icon left>mdi-plus-circle-multiple-outline</v-icon>
                                        Add Report
                                    </v-btn>
                                </template>
                                <span>Add Report</span>
                            </v-tooltip>
                        </template>
                        <v-list dense>
                            <v-list-item @click="open_dialog">
                                <v-list-item-title>
                                    <v-icon left>mdi-plus-circle-outline</v-icon>
                                    Add new report via link
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="open_add_report_via_template(null)">
                                <v-list-item-title>
                                    <v-icon left>mdi-plus-circle-outline</v-icon>
                                    Add new report via template
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
            </Empty>
        </div>
        <DeleteDialog :open-dialog.sync="deleteDialog" title="Delete Report"
                      text-content="Are you sure you want to delete this report?" @delete="deleteReport"
        />
        <ReportsAddDialog ref="dialog" :id="id" @report-added="add_new_report" />
        <ReportsEditDialog ref="editDialog" :id="id" @report-updated="reportUpdated" />
        <report-via-template :isEdit="false" @save="handleSaveReportViaTemplate"
                             :open-dialog.sync="add_report_via_template"
        />
        <report-via-template :isEdit="true" title="Edit Report" :report="activeReport"
                             @save="handleUpdateReportViaTemplate"
                             :open-dialog.sync="edit_report_via_template"
        />
    </div>
</template>
<script src="./Reports.js"></script>
<style scoped lang="scss" src="./Reports.scss"></style>