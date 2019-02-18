<template>
  <div class="invoice-dialog">
    <v-layout row justify-center>
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
          <v-layout
            row
            wrap
            justify-space-between
            class="first-row info-section"
          >
            <TopLeft />
            <TopRight />
          </v-layout>
          <TableSection />
        </div>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script src="./InvoiceDialog.js"></script>
<style lang="scss" scoped src="./InvoiceDialog.scss"></style>
