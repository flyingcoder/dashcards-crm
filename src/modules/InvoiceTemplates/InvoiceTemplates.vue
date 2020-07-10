<template>
    <div class="invoice-templates">
        <VueTable title="Invoice Templates" :hasSearch="false" :headers="headers" :loading="loading" :items="items" :noMoreData="noMoreData" @load-more="getMoreInvoiceTemplates" :showSelect="false">
            <template v-slot:header-toolbar>
                <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon fab class="ml-2 action-btn" v-bind="attrs" v-on="on" @click="open_add_dialog">add_circle_outline</v-icon>
                    </template>
                    <span>Create Template</span>
                </v-tooltip>
                <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon fab class="ml-2 action-btn" v-bind="attrs" v-on="on" @click="open_help_dialog">mdi-help-rhombus-outline</v-icon>
                    </template>
                    <span>Invoice Template Guide and Rules</span>
                </v-tooltip>
            </template>
            <template v-slot:row-slot="{ item }">
                <td>{{ item.name | ucwords }}</td>
                <td v-if="item.creator">
                    <Avatar :user="item.creator"></Avatar>
                </td>
                <td v-else>
                    <v-avatar>
                        <v-icon large>mdi-monitor-clean</v-icon>
                    </v-avatar> System Default
                </td>
                <td v-if="item.company_id === 0"></td>
                <td v-else>{{ item.created_at | bzFromNow }}</td>
                <Actions :hasDelete="can_action(item) && can_delete(item)" :hasEdit="can_action(item)" :item="item" :permissions="$_permissions.get('templates')" @delete="open_delete_dialog(item)" @edit="open_edit_dialog(item)" @view="open_view_dialog(item)"></Actions>
            </template>
            <template v-slot:empty-slot>
                <v-btn dark color="#3b589e" @click="open_add_dialog">Add new invoice template</v-btn>
            </template>
        </VueTable>
        <InvoiceTemplateDialog ref="add_edit_dialog" :defaultTemplates="defaultTemplates" :invoicefields="invoicefields" @save="handleSave" @preview="open_view_dialog"></InvoiceTemplateDialog>
        <InvoiceTemplatePreview ref="view_dialog" :item="activeItem" :invoicefields="invoicefields"></InvoiceTemplatePreview>
        <InvoiceTemplateHelp ref="help_dialog" :invoicefields="invoicefields"></InvoiceTemplateHelp>
        <delete-dialog :open-dialog.sync="delete_dialog" title="Delete Template" text-content="Are you sure you want to delete this invoice template?" @delete="delete_item('delete_invoice_template', $event)" />
    </div>
</template>
<style lang="scss" src="./InvoiceTemplates.scss" scoped></style>
<script src="./InvoiceTemplates.js"></script>