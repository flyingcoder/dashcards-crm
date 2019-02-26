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
          @created="$emit('created', $event)"
          @updated="$emit('updated', $event)"
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
          <v-layout
            row
            wrap
            justify-space-between
            class="third-row additional-info-section"
          >
            <v-flex sm6 xs12 class="left-content">
              <BottomLeft />
            </v-flex>
            <v-flex sm6 xs12 class="right-content">
              <BottomRight />
            </v-flex>
          </v-layout>
        </div>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script src="./InvoiceDialog.js"></script>
<style lang="scss" scoped src="./InvoiceDialog.scss"></style>
