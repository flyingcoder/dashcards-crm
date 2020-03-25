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

    <VueTable
      :items="items" 
      :headers="headers"
      :showRowActions="true"
      @load-more="getMoreInvoices"
      icon="list"
      title="Project Invoice"
      :key="componentKey"
      :noMoreData="noMoreData"
    > 
      <template v-slot:row-slot="{item}">
        <tr>
          <td>{{ item.title }}</td>
          <td>{{ item.billed_to }}</td>
          <td>{{ item.due_date }}</td>
          <td>{{ item.total_amount }}</td>
          <Actions
            :item="item"
            @delete="open_delete_dialog(item)"
            @edit="open_edit_dialog(item)"
            @view="open_view_dialog(item)"
          ></Actions>
        </tr>
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
