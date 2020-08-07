<template>
    <div class="templates">
        <milestone-template-dialog
                :dialog.sync="milestone_add_dialog"
                ref="add_dialog"
                :isEditDialog="false"
                title="Add Milestone Template"
                @save="add_item('add_new_milestone_template', $event)"
        />

        <milestone-template-dialog
                :dialog.sync="milestone_edit_dialog"
                ref="edit_dialog"
                title="Edit Milestone Template"
                :isEditDialog="true"
                :fieldsToEdit="activeTemplate"
                @save="update_item('edit_milestone_template', $event, null, close_edit_milestone_dialog())"
        />

        <delete-dialog
                :open-dialog.sync="milestone_delete_dialog"
                title="Delete Milestone Template"
                text-content="This will also deletes milestones associated with this template. Are you sure you want to delete these template? "
                @delete="delete_item('delete_milestone_template', null, null, close_milestone_delete_dialog())"
        />

        <InvoiceTemplateDialog ref="invoice_add_edit_dialog" :defaultTemplates="defaultTemplates"
                               :invoicefields="invoice_fields"
                               @save="handleInvoiceTemplateSave" @preview="open_template_view"
        />
        <InvoiceTemplatePreview ref="invoice_template_view_dialog" :item="activeTemplate"
                                :invoicefields="invoice_fields"
        />
        <InvoiceTemplateHelp ref="help_dialog" :invoicefields="invoice_fields"/>
        <delete-dialog :open-dialog.sync="invoice_delete_dialog" title="Delete Invoice Template"
                       text-content="Are you sure you want to delete this invoice template?"
                       @delete="delete_item('delete_invoice_template', $event, null,close_invoice_delete_dialog())"
        />
        <delete-dialog :open-dialog.sync="report_delete_dialog" title="Delete Report Template"
                       text-content="Are you sure you want to delete this report template?"
                       @delete="delete_item('delete_report_template', $event, null,close_report_delete_dialog())"
        />
        <view-report-template :open-dialog.sync="report_view_dialog" :structures="structures"/>
        <VueTable
                :items="items"
                :headers="headers"
                :showRowActions="true"
                @load-more="load_more"
                icon="widgets"
                title="Templates"
                :noMoreData="noMoreData"
                :showSelect="false"
                :loading="loading"
        >
            <template slot="header-toolbar">
                <div>
                    <v-menu bottom left offset-y>
                        <template v-slot:activator="{ on: menu, attrs }">
                            <v-tooltip top>
                                <template v-slot:activator="{ on: tooltip }">
                                    <v-icon v-bind="attrs" v-on="{ ...tooltip, ...menu }">
                                        mdi-plus-circle-multiple-outline
                                    </v-icon>
                                </template>
                                <span>Create New</span>
                            </v-tooltip>
                        </template>
                        <v-list dense>
                            <v-list-item @click="open_template_add_dialog('milestone')">
                                <v-list-item-title>
                                    <v-icon left>mdi-plus-circle-outline</v-icon>
                                    New Milestone Template
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="open_template_add_dialog('invoice')">
                                <v-list-item-title>
                                    <v-icon left>mdi-plus-circle-outline</v-icon>
                                    New Invoice Template
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="open_template_add_dialog('report')">
                                <v-list-item-title>
                                    <v-icon left>mdi-plus-circle-outline</v-icon>
                                    New Report Template
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon fab class="ml-2 action-btn" v-bind="attrs" v-on="on" @click="open_help_dialog">
                                mdi-help-circle-outline
                            </v-icon>
                        </template>
                        <span>Invoice Template Guide and Rules</span>
                    </v-tooltip>
                    <v-btn-toggle v-model="type" mandatory class="ml-3" dense>
                        <v-btn text value="all" @click="showByType('all')"> All</v-btn>
                        <v-btn text value="milestone" @click="showByType('milestone')"> Milestones</v-btn>
                        <v-btn text value="invoice" @click="showByType('invoice')"> Invoices</v-btn>
                        <v-btn text value="report" @click="showByType('report')"> Reports</v-btn>
                    </v-btn-toggle>
                </div>
            </template>
            <template v-slot:row-slot="{ item }">
                <td class="text-cap">{{ item.replica_type | remove_app }}</td>
                <td class="text-cap clickable-td "
                    @click="open_template_view(item)"
                >
                    {{ item.name | ucwords }}
                </td>
                <td class="text-cap text-center">{{ item.milestones_count || '' }}</td>
                <td v-if="item.creator">
                    <Avatar :user="item.creator" iconOnly/>
                </td>
                <td v-else>
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-avatar v-bind="attrs" v-on="on">
                                <v-icon large>mdi-monitor-clean</v-icon>
                            </v-avatar>
                        </template>
                        <span>System Default</span>
                    </v-tooltip>
                </td>
                <td class="text-cap">{{ item.status }}</td>
                <Actions
                        :item="item"
                        :hasEdit="item.company_id !== 0"
                        :hasDelete="item.company_id !== 0"
                        :permission="$_permissions.get('templates')"
                        @delete="open_template_delete_dialog(item)"
                        @edit="open_template_edit_dialog(item)"
                        @view="open_template_view(item)"
                />
            </template>
            <template v-slot:empty-slot>
                <v-menu top offset-y right>
                    <template v-slot:activator="{ on: menu, attrs }">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on: tooltip }">
                                <v-btn dark color="#3b589e" v-bind="attrs" v-on="{ ...tooltip, ...menu }">
                                    <v-icon left>
                                        mdi-plus-circle-multiple-outline
                                    </v-icon>
                                    Create New Template
                                </v-btn>
                            </template>
                            <span>Create New</span>
                        </v-tooltip>
                    </template>
                    <v-list dense>
                        <v-list-item @click="open_template_add_dialog('milestone')">
                            <v-list-item-title>
                                <v-icon left>mdi-plus-circle-outline</v-icon>
                                New Milestone Template
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="open_template_add_dialog('invoice')">
                            <v-list-item-title>
                                <v-icon left>mdi-plus-circle-outline</v-icon>
                                New Invoice Template
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="open_template_add_dialog('report')">
                            <v-list-item-title>
                                <v-icon left>mdi-plus-circle-outline</v-icon>
                                New Report Template
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>
        </VueTable>
    </div>
</template>

<script src="./Templates.js"></script>
<style scoped lang="scss" src="./Templates.scss"></style>