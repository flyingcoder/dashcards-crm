<template>
  <custom-dialog
    :title="dialogTitle"
    ref="dialog"
    :open.sync="open"
    button2-text="Save"
    @button1="cancel"
    @button2="save"
  >
    <template #content>
      <v-select
        class="dialog__selectfield mb-1"
        label="Select Template"
        :items="templates"
        item-text="name"
        item-value="id"
        v-model="selected_template"
        color="#667187"
        filled
        hide-details
      ></v-select>
    </template>
  </custom-dialog>
</template>

<script src="./SelectTemplateDialog.js"></script>
<style lang="scss" scoped src="./SelectTemplateDialog.scss"></style>
