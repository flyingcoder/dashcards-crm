<template>
  <div class="invoice-dialog">
    <v-layout justify-center>
      <v-dialog
        v-model="invoice_dialog"
        fullscreen
        persistent
        no-click-animation
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <DialogToolbar
          @created="$emit('created', $event)"
          @updated="$emit('updated', $event)"
        />
        <div class="content">
          <v-container fluid style="max-width:900px;">
            <v-layout wrap class="first-row info-section">
              <v-flex xs12 sm6><TopLeft /></v-flex>
              <v-flex xs12 sm6><TopRight /></v-flex>
            </v-layout>
            <v-layout wrap class="second-row">
              <TableSection />
            </v-layout>
            <v-layout
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
          </v-container>
        </div>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script src="./InvoiceDialog.js"></script>
<style lang="scss" scoped src="./InvoiceDialog.scss"></style>
