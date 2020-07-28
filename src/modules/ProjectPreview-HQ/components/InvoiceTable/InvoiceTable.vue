<template>
    <div class="invoice-card">
        <div class="invoice__content">
            <dash-card title="Invoice" :dashboard="dashboard" @close="$emit('close')"
                       :viewMoreBtn="false"
            >
                <div slot="actions" />
                <div class="content-wrapper" slot="content">
                    <v-data-table :headers="headers" :items="items" hide-default-footer shaped height="300px">
                        <template v-slot:top>
                            <v-row no-gutters>
                                <v-spacer />
                                <v-btn-toggle class="ml-3" v-model="filter.status" mandatory dense>
                                    <v-btn value="all" text @click="showInvoice('all')">All</v-btn>
                                    <v-btn value="paid" text @click="showInvoice('paid')">Paid</v-btn>
                                    <v-btn value="pending" text @click="showInvoice('pending')">Pending</v-btn>
                                </v-btn-toggle>
                            </v-row>
                        </template>
                        <template v-slot:loading>
                            <v-progress-linear indeterminate color="cyan" />
                        </template>
                        <template v-slot:item="{ item }">
                            <tr>
                                <td>{{ item.due_date | format }}</td>
                                <td>{{ item.status | ucwords }}</td>
                                <td class="text-cap">
                                    <Avatar :user="item.billed_from" iconOnly />
                                </td>
                                <td class="text-cap">
                                    <Avatar :user="item.billed_to" iconOnly />
                                </td>
                                <td>{{ item.total_amount | money }}</td>
                                <td>
                                    <v-menu bottom left>
                                        <template v-slot:activator="{ on }">
                                            <v-btn icon v-on="on">
                                                <v-icon color="gray">mdi-dots-vertical-circle-outline</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list dense>
                                            <v-list-item @click="view_invoice(item)">
                                                <v-list-item-title>
                                                    <v-icon left>mdi-eye-circle-outline</v-icon> View
                                                </v-list-item-title>
                                            </v-list-item>
                                            <v-list-item @click="remind(item)" v-if="item.status !== 'paid'">
                                                <v-list-item-title>
                                                    <v-icon left>mdi-bell-circle-outline</v-icon> Remind
                                                </v-list-item-title>
                                            </v-list-item>
                                            <v-list-item @click="pay(item)" v-if="can_pay(item)">
                                                <v-list-item-title>
                                                    <v-icon left>mdi-account-cash-outline</v-icon> Pay
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </td>
                            </tr>
                        </template>
                        <template v-slot:no-data>
                            <Empty class="mt-2" headline="No invoice found." icon="mdi-cash-register" />
                        </template>
                    </v-data-table>
                </div>
            </dash-card>
        </div>
        <ViewInvoice ref="view_invoice_dialog" :item="view_item" />
    </div>
</template>
<script src="./InvoiceTable.js"></script>
<style lang="scss" scoped src="./InvoiceTable.scss"></style>
