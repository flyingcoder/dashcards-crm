<template>
    <div class="invoice">
        <!-- <InvoiceDialog type="create" @created="items.unshift($event)" /> -->
        <!-- <InvoiceDialog type="edit" @updated="invoice_updated" /> -->
        <StepperInvoiceDialog ref="invoiceEditDialog" type="edit" @updated="invoice_updated"/>
        <StepperInvoiceDialog ref="invoiceCreateDialog" type="create"
                              @created="items.unshift($event)"
        />
        <ViewInvoice ref="view_invoice_dialog" :item="view_item"/>
        <delete-dialog :open-dialog.sync="delete_dialog" title="Delete Invoice"
                       text-content="Are you sure you want to delete this invoice?" @delete="delete_invoice"
        />
        <delete-dialog :open-dialog.sync="bulk_delete_dialog" title="Delete Invoices"
                       text-content="Are you sure you want to delete these invoices? This can't be undone."
                       @delete="bulk_delete('bulk_delete_invoices')"
        />
        <VueTable :items="items" :headers="headers" :showRowActions="true" icon="list" :loading="loading"
                  title="Invoice" :key="componentKey" :noMoreData="noMoreData" :showSelect="true"
                  @delete-selected="open_bulk_delete_dialog($event)" @load-more="load_more"
                  @selected="selected = $event"
        >
            <template slot="header-toolbar">
                <table-header @click="open_create_dialog"/>
                <v-btn-toggle class="ml-3" v-model="filter.status" mandatory dense>
                    <v-btn value="all" text @click="showInvoice('all')">All</v-btn>
                    <v-btn value="paid" text @click="showInvoice('paid')">Paid</v-btn>
                    <v-btn value="pending" text @click="showInvoice('pending')">Pending</v-btn>
                </v-btn-toggle>
            </template>
            <template v-slot:row-slot="{ item }">
                <td>{{ item.due_date | format }}</td>
                <td @click="open_view_dialog(item)">
                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <span v-on="on">#INV-{{ item.id }}</span>
                        </template>
                        <span>{{ item.title | ucwords }}</span>
                    </v-tooltip>
                </td>
                <td>
                    <Avatar :user="item.billed_from"/>
                </td>
                <td>
                    <Avatar :user="item.billed_to"/>
                </td>
                <td>{{ item.status | ucwords }}</td>
                <td>{{ item.total_amount | money }}</td>
                <Actions :item="item" :permissions="$_permissions.get('invoices')" @delete="open_delete_dialog(item)"
                         @edit="open_edit_dialog(item)" @view="open_view_dialog(item)"
                >
                    <template v-slot:extra>
                        <v-list-item v-if="can_pay(item)" @click="navigatePayment(item)">
                            <v-list-item-title>
                                <v-icon left>mdi-cash</v-icon>
                                Pay
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item v-if="item.status !== 'paid'" @click="remind_invoice(item)">
                            <v-list-item-title>
                                <v-icon left>mdi-bell-circle-outline</v-icon>
                                Remind
                            </v-list-item-title>
                        </v-list-item>
                    </template>
                </Actions>
            </template>
            <template v-slot:empty-slot>
                <v-btn dark color="#3b589e" @click="open_create_dialog">
                    Add Invoice
                </v-btn>
            </template>
            <template v-slot:extra-bulk-buttons>
                <v-btn v-if="selected.length > 0" :loading="btn_reminding" class="ml-2" dark color="#3b589e"
                       @click="remind_invoices">
                    <v-icon left>mdi-bell-circle-outline</v-icon>
                    Remind
                </v-btn>
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