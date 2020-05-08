<template>
    <v-row no-gutters justify-center>
        <v-dialog fullscreen persistent no-click-animation hide-overlay transition="dialog-bottom-transition" v-model="view_invoice_dialog">
            <v-card class="invoice__dialog mx-auto" outlined v-if="item">
                <v-toolbar color="#3b589e" dark>
                    <v-icon left>list</v-icon>
                    <v-toolbar-title>Invoice : {{ item.title }}</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" disabled>
                                <v-icon>mdi-download</v-icon>
                            </v-btn>
                        </template>
                        <span>Download PDF</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn icon @click="view_invoice_dialog = false" v-on="on">
                                <v-icon>close</v-icon>
                            </v-btn>
                        </template>
                        <span>Close</span>
                    </v-tooltip>
                </v-toolbar>
                <v-container class="invoice-viewbox mb-3">
                    <hr class="mb-4" />
                    <v-row>
                        <v-col>
                            <h1 class="display-3 font-weight-bold grey--text">
                                INVOICE
                            </h1>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col md="2"><label>Page 1 of 1</label></v-col>
                    </v-row>
                    <v-row no-gutters justify-space-between>
                        <v-col md="7">
                            <v-row>
                                <v-col md="4">
                                    <v-img :src="require('@/assets/logo/mini-blue.png')">
                                        <template v-slot:placeholder>
                                            <span class="blue--text headline">No Image Available</span>
                                        </template>
                                    </v-img>
                                </v-col>
                                <v-col md="8">
                                    <h4>Billed From</h4>
                                    <h3>{{ item.billedFrom.fullname | ucwords }}</h3>
                                    <p class="body-2" v-if="item.billedFrom.location !== `Unknown`">
                                        {{ item.billedFrom.location | ucwords }}
                                    </p>
                                    <p class="body-2">
                                        Phone : {{ item.billedFrom.telephone }}<br />
                                        Email : {{ item.billedFrom.email }}
                                    </p>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col md="4">
                                    <v-img :src="item.company_logo">
                                        <template v-slot:placeholder>
                                            <span class="blue--text headline">No Image Available</span>
                                        </template>
                                    </v-img>
                                </v-col>
                                <v-col md="8">
                                    <h4>Billed To</h4>
                                    <h3>{{ item.billedTo.fullname | ucwords }}</h3>
                                    <p class="body-2" v-if="item.billedFrom.location !== `Unknown`">
                                        {{ item.billedTo.location | ucwords }}
                                    </p>
                                    <p class="body-2">
                                        Phone : {{ item.billedTo.telephone }}<br />
                                        Email : {{ item.billedTo.email }}
                                    </p>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col md="5">
                            <v-row no-gutters class="mb-3">
                                <v-col class="table-cell head" md="6" offset="6" sm="12">Invoice ID</v-col>
                                <v-col class="table-cell value mb-1" md="6" offset="6" sm="12">#INV-{{ item.id }}</v-col>
                                <v-col class="table-cell head" md="6" offset="6" sm="12">Balance Due</v-col>
                                <v-col class="table-cell value mb-1" md="6" offset="6" sm="12">${{ item.total_amount }}</v-col>
                            </v-row>
                            <v-row no-gutters>
                                <v-col md="6" class="table-cell head" sm="12">Payment Terms
                                </v-col>
                                <v-col md="6" class="table-cell head" sm="12">Due on Receipt</v-col>
                                <v-col md="6" class="table-cell head" sm="12">Invoice Date
                                </v-col>
                                <v-col md="6" class="table-cell value" sm="12">{{
                                    item.date | format
                                    }}</v-col>
                                <v-col md="6" class="table-cell head" sm="12">Due Date</v-col>
                                <v-col md="6" class="table-cell value" sm="12">{{
                                    item.due_date | format
                                    }}</v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row no-gutters class="mb-3">
                        <v-col md="12">
                            <v-data-table flat class="mt-3 border" :headers="headers" :items="item.items" hide-default-footer>
                                <template v-slot:items="{ item }">
                                    <td>{{ item.descriptions }}</td>
                                    <td>{{ item.rate }}</td>
                                    <td>{{ item.hours }}</td>
                                    <td>$ {{ item.amount }}</td>
                                </template>
                            </v-data-table>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col md="6">
                            <p class="mt-3">
                                Payment Method: <br />
                                Mode of Payment: <br />
                                Account Name: <br />
                                Transaction Code: <br />
                                Swift Code: <br />
                            </p>
                        </v-col>
                        <v-col md="6" class="">
                            <v-list disabled dense class="border">
                                <v-list-item-group>
                                    <v-list-item color="#E8F1FA">
                                        <v-list-item-content>
                                            <v-list-item-title>Total</v-list-item-title>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                            ${{ item.total_amount }}
                                        </v-list-item-action>
                                    </v-list-item>
                                    <v-divider></v-divider>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>Tax</v-list-item-title>
                                        </v-list-item-content>
                                        <v-list-item-action> ${{ item.tax }} </v-list-item-action>
                                    </v-list-item>
                                    <v-divider></v-divider>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>Discount</v-list-item-title>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                            {{ item.discount }}%
                                        </v-list-item-action>
                                    </v-list-item>
                                    <v-divider></v-divider>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>Shipping</v-list-item-title>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                            ${{ item.shipping }}
                                        </v-list-item-action>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-col>
                    </v-row>
                    <v-row no-gutters class="my-2 py-3">
                        <v-flex xs12 md12>Terms : {{ item.terms }}</v-flex>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script src="./ViewInvoice.js"></script>
<style lang="scss" scoped>
.invoice-viewbox {
    max-width: 700px;
    border: 1px solid #e0e0e0;
    padding-top: 3em;
    margin-top: 5px;
    padding-bottom: 3em;

    img {
        max-width: 200px;
        max-height: 150px;
    }
}

.invoice-viewbox-action {
    max-width: 700px;
}

.table-cell {
    padding: 5px;
    font-weight: bold;
    border: 1px solid #eeeff1;
}

.table-cell.head {
    background: #e8f1fa;
}

.table-cell.value {
    background: #fff;
}

.border {
    border: 1px solid #eeeff1;
}

.v-data-table-header {
    background-color: #e8f1fa;
}
</style>