<template>
  <div class="invoice">
    <table-header
      :paths="paths"
      :no-button="!items.length"
      @click="open_create_dialog"
    />

    <InvoiceDialog type="create" @created="items.unshift($event)" />

    <delete-dialog
      :open-dialog.sync="delete_dialog"
      title="Delete Invoice"
      text-content="Are you sure you want to delete this invoice?"
      @delete="delete_invoice"
    />

    <custom-table
      v-if="items.length || loading"
      :headers="headers"
      :items="items"
      :loading="loading"
      :sort="sort"
      :has-checkbox="true"
      toolbar-title="Invoice"
      hide-actions
      :permission="$_permissions.get('invoice')"
      @items-selected="selected_ids = $event"
      @delete="open_delete_dialog"
    >
      <template slot="custom-item" slot-scope="{ item }">
        <td>{{ item.title }}</td>
        <td>{{ item.due_date }}</td>
        <td>{{ item.billed_to }}</td>
        <td>{{ item.total_amount }}</td>
      </template>

      <template slot="row-view" slot-scope="{ item }">
        <!--<v-btn fab small flat depressed @click="open_email_dialog(item.id)">-->
        <!--<v-icon>email</v-icon>-->
        <!--</v-btn>-->
        <!--<v-btn fab small flat depressed @click="view_invoice_dialog = true">-->
        <!--<v-icon>search</v-icon>-->
        <!--</v-btn>-->
      </template>
    </custom-table>

    <div class="empty-invoice" v-else>
      <div class="empty-content">
        <div class="empty-svg">
          <svg viewBox="0 0 250 250">
            <path
              d="M37 11l176 0c11,0 20,4 26,11 7,6 11,16 11,26l0 154c0,10 -4,19 -11,26 -2,2 -4,3 -6,5 -17,13 -33,1 -48,-11 -10,-7 -19,-14 -26,-11 -5,2 -9,7 -12,13 -12,18 -31,17 -46,4 -5,-5 -11,-10 -16,-11 -6,-1 -12,4 -19,9 -11,8 -23,17 -39,11 -6,-1 -12,-5 -16,-9 -7,-7 -11,-16 -11,-26l0 -154c0,-10 4,-20 11,-26 6,-7 15,-11 26,-11zm22 108c8,0 15,7 15,15 0,8 -7,15 -15,15 -8,0 -15,-7 -15,-15 0,-8 7,-15 15,-15zm0 -56c8,0 15,7 15,15 0,8 -7,15 -15,15 -8,0 -15,-7 -15,-15 0,-8 7,-15 15,-15zm44 24c-4,0 -7,-4 -7,-8 0,-4 3,-7 7,-7l96 0c4,0 7,3 7,7 0,4 -3,8 -7,8l-96 0zm0 56c-4,0 -7,-4 -7,-8 0,-4 3,-7 7,-7l96 0c4,0 7,3 7,7 0,4 -3,8 -7,8l-96 0zm129 70c2,-3 3,-7 3,-11l0 -154c0,-6 -2,-12 -6,-16 -4,-4 -10,-6 -16,-6l-176 0c-6,0 -12,2 -16,6 -4,4 -6,10 -6,16l0 154c0,6 2,11 6,15 1,2 3,3 4,3 13,8 23,1 32,-6 9,-7 18,-13 30,-12 10,2 17,8 24,15 8,7 17,8 24,-1 4,-8 9,-15 19,-19 14,-6 27,3 39,13 13,10 26,20 39,3z"
            />
          </svg>
        </div>
        <div class="empty-btn">
          <v-btn
            large
            dark
            color="#3b589e"
            @click="open_create_dialog"
            >Add New Invoice</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Invoice.js"></script>
<style lang="scss" scoped src="./Invoice.scss"></style>
<style scoped>
>>> .table__toolbar .v-toolbar__content {
  all: unset;
}
</style>
