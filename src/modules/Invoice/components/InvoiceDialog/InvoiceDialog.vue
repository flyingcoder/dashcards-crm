<template>
  <div class="invoice-dialog">
    <v-dialog
      v-model="invoice_dialog"
      fullscreen
      persist
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <DialogToolbar
        @close="$emit('close', false)"
        @create="$emit('create')"
        @edit="$emit('edit')"
      />

      <div class="content">
        <TopLeft />
      </div>
    </v-dialog>
  </div>
</template>

<script src="./InvoiceDialog.js"></script>
<style lang="scss" scoped src="./InvoiceDialog.scss"></style>
