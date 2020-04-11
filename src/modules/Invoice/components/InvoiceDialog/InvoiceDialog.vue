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
            <v-row no-gutters>
              <v-col xs="12" md="5"><TopLeft></TopLeft></v-col>
              <v-spacer></v-spacer>
              <v-col xs="12" md="5"><TopRight></TopRight></v-col>
            </v-row>
            <v-row no-gutters>
              <TableSection />
            </v-row>
            <v-row
              no-gutters
              wrap
              justify-space-between
              class="third-row additional-info-section"
            >
              <v-col sm="6" xs="12" class="left-content">
                <BottomLeft />
              </v-col>
              <v-col sm="6" xs="12" class="right-content">
                <BottomRight />
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script src="./InvoiceDialog.js"></script>
<style lang="scss" scoped src="./InvoiceDialog.scss"></style>
