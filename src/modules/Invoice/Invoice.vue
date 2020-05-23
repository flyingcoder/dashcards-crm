<template>
    <div class="invoice">
        <table-header :paths="paths" @click="open_create_dialog" />
        <!-- <InvoiceDialog type="create" @created="items.unshift($event)" /> -->
        <!-- <InvoiceDialog type="edit" @updated="invoice_updated" /> -->
        <StepperInvoiceDialog ref="invoiceEditDialog" type="edit" @updated="invoice_updated"></StepperInvoiceDialog>
        <StepperInvoiceDialog ref="invoiceCreateDialog" type="create" @created="items.unshift($event)"></StepperInvoiceDialog>
        <ViewInvoice ref="view_invoice_dialog" :item="view_item" :open="view_invoice_dialog" @close="view_invoice_dialog = false"></ViewInvoice>
        <delete-dialog :open-dialog.sync="delete_dialog" title="Delete Invoice" text-content="Are you sure you want to delete this invoice?" @delete="delete_invoice" />
        <delete-dialog :open-dialog.sync="bulk_delete_dialog" title="Delete Invoices" text-content="Are you sure you want to delete these invoices? This can't be undone." @delete="bulk_delete('bulk_delete_invoices')" />
        <VueTable :items="items" :headers="headers" :showRowActions="true" icon="list" :loading="loading" title="Invoice" :key="componentKey" :noMoreData="noMoreData" :showSelect="true" @delete-selected="open_bulk_delete_dialog($event)" @load-more="load_more">
            <template v-slot:row-slot="{ item }">
                <td @click="open_view_dialog(item)">#INV-{{ item.id }}</td>
                <td @click="open_view_dialog(item)" class="clickable-td">
                    {{ item.title | ucwords }}
                </td>
                <td>{{ item.due_date | format }}</td>
                <td>
                    <v-avatar size="30" color="teal">
                        <v-img :src="item.billedTo.image_url" :title="item.billedTo.fullname">
                            <template v-slot:placeholder>
                                <span class="white--text headline">C</span>
                            </template>
                        </v-img>
                    </v-avatar>
                    {{ item.billedTo.fullname | ucwords }}
                </td>
                <td>{{ item.status | ucwords }}</td>
                <td>$ {{ item.total_amount }}</td>
                <Actions :item="item" :permissions="$_permissions.get('invoices')" @delete="open_delete_dialog(item)" @edit="open_edit_dialog(item)" @view="open_view_dialog(item)"></Actions>
            </template>
            <template v-slot:empty-slot>
                <v-btn dark color="#3b589e" @click="open_create_dialog">
                    Add Invoice</v-btn>
            </template>
        </VueTable>
    </div>
</template>
<script src="./Invoice.js"></script>
<style lang="scss" scoped src="./Invoice.scss"></style>
<style scoped>
>>>.table__toolbar .v-toolbar__content {
    all: unset;
}
</style>