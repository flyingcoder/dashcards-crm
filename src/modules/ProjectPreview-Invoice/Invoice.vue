<template>
  <div class="invoice">
    <ViewInvoice
      ref="view_invoice_dialog"
      :item="view_item"
      :open="view_invoice_dialog"
      @close="view_invoice_dialog = false"
    ></ViewInvoice>

    <InvoiceDialog type="edit" @updated="invoice_updated" />

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
      icon="list"
      title="Project Invoice"
      :key="componentKey"
      :noMoreData="noMoreData"
      @delete-selected="open_bulk_delete_dialog($event)"
    >
      <template v-slot:row-slot="{ item }">
        <td>{{ item.title }}</td>
        <td>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-avatar color="teal" v-on="on" size="35">
                <v-img :src="item.billed_to.image_url"></v-img>
              </v-avatar>
            </template>
            <span>{{ item.billed_to.fullname }}</span>
          </v-tooltip>
          {{ item.billed_to.fullname }}
        </td>
        <td>{{ item.due_date | format }}</td>
        <td>{{ item.total_amount | money }}</td>
        <Actions
          :item="item"
          @delete="open_delete_dialog(item)"
          @edit="open_edit_dialog(item)"
          @view="open_view_dialog(item)"
        ></Actions>
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
