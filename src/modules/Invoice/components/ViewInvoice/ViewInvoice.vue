<template>
  <v-layout row justify-center>
    <v-dialog
      fullscreen
      persistent
      no-click-animation
      hide-overlay
      transition="dialog-bottom-transition"
      v-model="view_invoice_dialog"
    >
      <v-card class="invoice__dialog mx-auto" outline v-if="item">
        <v-toolbar
          color="blue"
          dark
        >
          <v-icon>list</v-icon>
          <v-toolbar-title>Invoice : {{item.title}}</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn icon @click="view_invoice_dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-container class="invoice-viewbox">
          <hr class="mb-4">
          <v-layout row wrap justify-space-between>
            <v-flex xs12 md3>
              <img :src="item.company_logo" alt="No company logo" >
            </v-flex>
            <v-flex xs12 md4 offset5>
              <p class="text-right">
                Invoice ID:{{item.id}}<br>
                Created: {{item.created_at}}<br>
                Due : {{item.due_date}} <br>
                Type : {{item.type}}
              </p>
            </v-flex>
          </v-layout>

          <v-layout row wrap justify-space-between class="mt-2">
            <v-flex xs12 md3>
              <p class="text-left">
                Billed From:<br>
                {{item.billed_from}}
              </p>
            </v-flex>
            <v-flex xs12 md4 offset5>
              <p class="text-right">
                Billed To:<br>
                {{item.billed_to}}
              </p>
            </v-flex>
          </v-layout>

          <v-layout row wrap justify-space-center class="py-3">
              <v-flex>{{item.title}}</v-flex>
          </v-layout>
      
          <v-data-table
            :headers="headers"
            :items="item.items"
            hide-actions
            hide-default-footer
            class="elevation-1"
          >
            <template v-slot:items="props">
              <td>{{ props.index + 1}}</td>
              <td>{{ props.item.descriptions }}</td>
              <td>{{ props.item.rate }}</td>
              <td>{{ props.item.hours }}</td>
              <td>{{ props.item.amount }}</td>
            </template>
          </v-data-table>

          <v-layout row wrap class="my-2 py-3">
              <v-flex xs12 md12>Total : {{item.total_amount}}</v-flex>
              <v-flex xs12 md12>Tax : {{item.tax}}</v-flex>
              <v-flex xs12 md12>Discount : {{item.discount}}</v-flex>
          </v-layout>
          <v-layout row v-if="item.terms">
              <v-flex xs12 md12 >Terms : {{item.terms}}</v-flex>
          </v-layout>
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
  </v-layout>
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
      max-height : 150px;
    }  
}
.invoice-viewbox-action {
  max-width: 700px;
}
</style>