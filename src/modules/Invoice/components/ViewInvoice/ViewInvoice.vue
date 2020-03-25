<template>
  <v-row no-gutters justify-center>
    <v-dialog
      fullscreen
      persistent
      no-click-animation
      hide-overlay
      transition="dialog-bottom-transition"
      v-model="view_invoice_dialog"
    >
      <v-card class="invoice__dialog mx-auto" outlined v-if="item">
        <v-toolbar
          color="#3b589e"
          dark
        >
          <v-icon>list</v-icon>
          <v-toolbar-title>Invoice : {{ item.title }}</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn icon @click="view_invoice_dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-container class="invoice-viewbox">
          <hr class="mb-4">
          <v-row no-gutters justify-space-between>
            <v-col md="7">
              <v-img :src="item.company_logo">
                <template v-slot:placeholder>
                  <span class="blue--text headline">No Image Available</span>
                </template>
              </v-img>
            </v-col>
            <v-col md="5">
              <v-row no-gutters>
                <v-col md="6" sm="6">Invoice ID</v-col><v-col md="6" sm="6">: {{item.id}}</v-col>
                <v-col md="6" sm="6">Created</v-col><v-col md="6" sm="6">: {{item.created_at}}</v-col>
                <v-col md="6" sm="6">Due </v-col><v-col md="6" sm="6">: {{item.due_date}}</v-col>
                <v-col md="6" sm="6">Type </v-col><v-col md="6" sm="6">: {{item.type}}</v-col>
              </v-row>  
            </v-col>
          </v-row>

          <v-row no-gutters justify-space-between class="mt-2">
            <v-col md="6">
                Billed From:<br>
                {{item.billed_from}}
            </v-col>
            <v-col md="6">
                Billed To:<br>
                {{item.billed_to}}
            </v-col>
          </v-row>

          <v-row no-gutters justify-space-center class="py-3">
            <v-flex>{{item.title}}</v-flex>
          </v-row>
    
          <v-data-table
            :headers="headers"
            :items="item.items"
            hide-default-footer
            hide-default-footer
            class="elevation-1"
          >
            <template v-slot:items="props">
              <td>{{ props.index + 1 }}</td>
              <td>{{ props.item.descriptions }}</td>
              <td>{{ props.item.rate }}</td>
              <td>{{ props.item.hours }}</td>
              <td>{{ props.item.amount }}</td>
            </template>
          </v-data-table>

          <v-row no-gutters class="my-2 py-3">
              <v-flex xs12 md12>Total : {{item.total_amount}}</v-flex>
              <v-flex xs12 md12>Tax : {{item.tax}}</v-flex>
              <v-flex xs12 md12>Discount : {{item.discount}}</v-flex>
          </v-row>
          <v-row no-gutters class="my-2 py-3" v-if="item.terms">
              <v-flex xs12 md12 >Terms : {{item.terms}}</v-flex>
          </v-row>
        </v-container>
        <!-- <v-container class="invoice-viewbox-action">
          <v-card-actions hide>
            <v-spacer></v-spacer>
            <v-btn
              color="orange"
              text
              @click="alert('to be added soon')"
            >
            Download PDF
            </v-btn>
          </v-card-actions>
        </v-container> -->
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
</style>
