<template>
  <div class="invoice-dialog">
    <v-dialog
      :value="true"
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
    </v-dialog>
  </div>
</template>

<script src="./InvoiceDialog.js"></script>
