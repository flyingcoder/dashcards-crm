<template>
    <div class="invoice">
        <StepperInvoiceDialog :projectLock="true" ref="invoiceEditDialog" type="edit"
                              @updated="invoice_updated"
        />

        <ViewInvoice ref="view_invoice_dialog" :item="view_item"/>

        <delete-dialog
                :open-dialog.sync="delete_dialog"
                title="Delete Invoice"
                text-content="Are you sure you want to delete this invoice?"
                @delete="delete_invoice"
        />
        <delete-dialog
                :open-dialog.sync="bulk_delete_dialog"
                title="Delete Invoices"
                text-content="Are you sure you want to delete these invoices? This can't be undone."
                @delete="bulk_delete('bulk_delete_invoices')"
        />

        <VueTable
                :items="items"
                :headers="headers"
                :showRowActions="true"
                @load-more="getMoreInvoices"
                icon="mdi-alpha-i-box-outline"
                emptyText="No invoice yet"
                :loading="loading"
                :title="tableTitle"
                :key="componentKey"
                :noMoreData="noMoreData"
                :showSelect="false"
                @delete-selected="open_bulk_delete_dialog($event)"
        >
            <template v-slot:row-slot="{ item }">
                <td>{{ item.title }}</td>
                <td>
                    <Avatar :user="item.billed_to" />
                </td>
                <td>{{ item.due_date | format }}</td>
                <td>{{ item.total_amount | money }}</td>
                <Actions
                        :item="item"
                        :permissions="$_permissions.get('invoices')"
                        @delete="open_delete_dialog(item)"
                        @edit="open_edit_dialog(item)"
                        @view="open_view_dialog(item)"
                />
            </template>
        </VueTable>
    </div>
</template>

<script src="./Invoice.js"></script>
<style lang="scss" scoped src="./Invoice.scss"></style>
<style scoped>
    >>> .table__toolbar .v-toolbar__content {
        all: unset;
    }
</style>
