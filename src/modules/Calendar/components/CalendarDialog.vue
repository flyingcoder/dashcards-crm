<template>
  <custom-dialog
    :dialogTitle="dialogTitle"
    ref="dialog"
    :open.sync="open"
    button2-text="Save"
    @button1="cancel"
    @button2="save"
  >
    <template slot="content">
      <v-text-field
        class="dialog__textfield d_field"
        label="Calendar Title"
        v-model.trim="title"
        color="#667187"
        filled
        hide-details
      ></v-text-field>

      <v-textarea
        class="dialog__textfield d_field"
        label="Add short description"
        v-model.trim="description"
        color="#667187"
        filled
        hide-details
      ></v-textarea>

      <v-color-picker 
      label="Calendar Theme" 
      class="ma-2 dialog__colorpicker d_field" 
      dot-size="30" 
      v-model.trim="properties" 
      width="470px"
      ></v-color-picker>

    </template>
  </custom-dialog>
</template>

<script src="./CalendarDialog.js"></script>
<style lang="scss" scoped src="./CalendarDialog.scss"></style>
