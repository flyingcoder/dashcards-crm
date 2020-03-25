<template>
  <div class="invoice">
    <table-header :paths="paths" @click="open_create_dialog" />

    <InvoiceDialog type="create" @created="items.unshift($event)" />
    <InvoiceDialog type="edit" @updated="invoice_updated" />

    <ViewInvoice
      ref="view_invoice_dialog"
      :item="view_item"
      :open="view_invoice_dialog"
      @close="view_invoice_dialog = false"
    ></ViewInvoice>

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
      icon="list"
      :loading="loading"
      title="Invoice"
      :key="componentKey"
      :noMoreData="noMoreData"
      @load-more="load_more"
    >
      <template v-slot:row-slot="{ item }">
        <tr>
          <td @click="open_view_dialog(item)">{{ item.title }}</td>
          <td>{{ item.due_date }}</td>
          <td>{{ item.billed_to }}</td>
          <td>$ {{ item.total_amount }}</td>
          <Actions
            :item="item"
            :permissions="$_permissions.get('invoices')"
            @delete="open_delete_dialog(item)"
            @edit="open_edit_dialog(item)"
            @view="open_view_dialog(item)"
          ></Actions>
        </tr>
      </template>
      <template v-slot:empty-slot>
        <v-btn tile text outlined @click="open_create_dialog"
          ><v-icon left>add</v-icon> Add Invoice</v-btn
        >
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
