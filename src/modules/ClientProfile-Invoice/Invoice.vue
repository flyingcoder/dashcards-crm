<template>
    <div class="invoice">
        <VueTable v-if="items.length > 0" :items="items" :headers="headers" :showRowActions="true" icon="list"
                  :loading="loading"
                  title="Invoices" :key="componentKey" :noMoreData="noMoreData" :showSelect="false"
                  @delete-selected="open_bulk_delete_dialog($event)" @load-more="load_more"
>
            <template slot="header-toolbar">
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
                <!-- <td @click="open_view_dialog(item)" class="clickable-td">
                    {{ item.title | ucwords }}
                </td> -->
                <td>
                    <Avatar :user="item.billed_from" />
                </td>
                <td>
                    <Avatar :user="item.billed_to" />
                </td>
                <td>{{ item.status | ucwords }}</td>
                <td>{{ item.total_amount | money }}</td>
                <!--<Actions :item="item" :permissions="$_permissions.get('invoices')" @delete="open_delete_dialog(item)"
                         @edit="open_edit_dialog(item)" @view="open_view_dialog(item)">
                    <template v-slot:extra v-if="can_pay(item)">
                        <v-tooltip left>
                            <template v-slot:activator="{ on }">
                                <v-btn dense v-on="on" icon @click="navigatePayment(item)">
                                    <v-icon small>mdi-cash</v-icon>
                                </v-btn>
                            </template>
                            <span>Pay</span>
                        </v-tooltip>
                    </template>
                </Actions>-->
            </template>
        </VueTable>
        <Empty v-else headline="No invoice found" icon="mdi-cash-remove" />
    </div>
</template>

<script src="./Invoice.js"></script>
<style lang="scss" scoped src="./Invoice.scss"></style>
<style scoped>
    >>> .table__toolbar .v-toolbar__content {
        all: unset;
    }
</style>
